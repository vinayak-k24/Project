const bodyParser = require("body-parser");
const express=require("express");
// const moongoose=require("mongoose");
const cors=require("cors");
const path=require("path");
const userDb = require('./model/user');
const eventDb = require('./model/event');
const app=express();
const db=require("./util/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require('multer');
const nodemailer = require("nodemailer");
const ObjectID = require('mongodb').ObjectID;

app.use('/public/uploads', express.static('uploads'));
app.use('/public', express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());   
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload = multer({ storage: storage })

app.post("/login",(req,res,next)=>{
        console.log(req.body);
        const { password, email } = req.body;
        console.log(email);
        userDb.find({ email: email })
        .then((user) => {
            console.log(user);
          if (user.length === 0){
            const error=new Error("No user was found with this email");
            error.statusCode=404;
            throw error;
            }
          else if (user.length > 0) {
            
            bcrypt.compare(password, user[0].password, (_err, result) => {

              if (_err){
                const error=new Error("Authentication has failed");
                error.statusCode=401;
                throw error;
            } 
              else if (result) {
                const userData = {
                  email: user[0].email,
                  ID: user[0]._id,
                  type:user[0].userType,
                  registerEvents:user[0].registeredEventsIds
                };
                const token = jwt.sign(userData, "MONGO_SECRET", { expiresIn: "1hr" });
                return res.status(200).json({
                  message: "Authentication has been successful",
                  token: token
                });
              } else
                {
                    const error=new Error("Password is Incorrect");
                    error.statusCode=404;
                    throw error;
                }
            });
          }
        })
        .catch((err)=>{
            if(!err.statusCode){
                err.statusCode=500;
            }
            next(err);
        })
    
})


app.post("/register",(req,res,next)=>{
    console.log(req.body);
    
    
    userDb.findOne({email:req.body.email})
    .then((user) => {
        if (user)
          res.status(409).json({ error: "The entered Email already exist!" });
        else {
          bcrypt.hash(req.body.password, 10, (error, hash) => {
            if (error) res.status(500).json({ error });
            else {
                const user=new userDb({
                    name:req.body.name,
                    email:req.body.email,
                    password:hash,
                    gender:req.body.gender,
                    usn:req.body.usn,
                    phoneNumber:req.body.phoneNumber,
                    semester:req.body.semester,
                    department:req.body.department
                });
                user.save(user)
                    .then(response=>{
                        console.log("saved");
                        // let transporter = nodemailer.createTransport({
                        //     service: "gmail",
                        //     port: 587,
                        //     secure: false, // true for 465, false for other ports
                        //     auth: {
                        //       user: "", 
                        //       pass: "", 
                        //     },
                        //   });
          
                        //   transporter
                        //     .sendMail({
                        //       from: "01fe20bcs108@kletech.ac.in",
                        //       to: `${req.body.email}`,
                        //       subject: "Welcome to iCinema",
                        //       text: `Hello Dear ${req.body.email}`,
                        //       html: `<b>Hello Dear User, we are happy that you join our family. Kind Regards, iCinema Team.</b>`,
                        //     })
                        //     .then((info) => console.log("Email has been sent!"))
                        //     .catch((err) => console.log(err));
                          res.status(201).json({
                            message: "The user has been signed up successfully!",
                            user,
                          });
                    })
                    .catch((error) => res.status(500).json({ message:"Error while saving" }));
            }
        })
    }
    })
  
})

app.get("/upcomingEvents",(req,res,next)=>{
    const nowDate=new Date();
    eventDb.find({"fromDateTime":{$gt:nowDate}})
        .then(data=>{
            console.log(data);
            if(data.length!==0){
                res.status(200).json({message:"Success",data:data});
            }
            else{
                res.status(200).json({message:"No Upcoming Events",data:data});
            }
        })
})

app.get("/previousEvents",(req,res,next)=>{
    const nowDate=new Date();
    eventDb.find({"toDateTime":{$lt:nowDate}})
        .then(data=>{
            console.log(data);
            if(data.length!==0){
                res.status(200).json({message:"Success",data:data});
            }
            else{
                res.status(200).json({message:"No Upcoming Events"});
            }
        })
})

app.post("/bookEvent",upload.single("images"),(req,res)=>{
    // console.log(req.body);
    // console.log(req.images);
    // console.log(req.data);

        
            console.log(req.body);
            const url = req.protocol + '://' + req.get('host');
            const event=new eventDb({
                eventName:req.body.eventName,
                eventDescription:req.body.eventDescription,
                coordinatorName:req.body.coordinatorName,
                coordinatorEmail:req.body.coordinatorEmail,
                coordinatorNumber:req.body.coordinatorNumber,
                venue:req.body.venue,
                noOfPeopleEstimated:req.body.noOfPeopleEstimated,
                fromDateTime:new Date(req.body.fromDateTime),
                toDateTime:new Date(req.body.toDateTime),
                image: url + '/public/uploads/' + req.file.filename
            })
            console.log(event);
            event.save(event)
                .then(res=>{
                    console.log("saved");
                })
                .catch(err=>{
                    console.log(err);
                })

            res.status(200).json( {message: "Success"} );
        
    })

app.get("/eventInfo/:id",(req,res,next)=>{
    const objid=new ObjectID(req.params.id);
    console.log(objid);
    eventDb.find({_id:objid})
        .then((data)=>{
            console.log(data[0]);
            console.log(data[0]["fromDateTime"].toUTCString());
            
            if(data.length===0){
                res.status(400).json({message:"Not Found"});
            }
            else{
                res.status(200).json({message:"Success",event: data[0]});
            }
        })
        .catch(err=>{
            throw err;
        })
})

app.post("/registerEvent",(req,res,next)=>{
    const {email,eventId}=req.body;
    console.log(req.body);
    userDb.find({email:email})
        .then(data=>{
            if(data.length>0){

            
                if(!data[0].registeredEventsIds.includes(eventId)){

                    userDb.update({email:email},{$push:{"registeredEventsIds":eventId}})
                        .then(response=>{
                            res.status(200).json({message:"Registerd"})
                        })
                        .catch(err=>{
                            throw err;
                        })
                    }
                    else{
                        res.status(200).json({message:"Already Registerd"})
                }
            
            }
            else{
                res.status(200).json({message:"User dosent exist"});
            }
        })
})
app.post("/deRegisterEvent",(req,res,next)=>{
    const {email,eventId}=req.body;
    console.log(req.body);
    userDb.find({email:email})
        .then(data=>{
            if(data.length>0){
                if(data[0].registeredEventsIds.includes(eventId)){

                    userDb.update({email:email},{$pull:{"registeredEventsIds":eventId}})
                        .then(response=>{
                            res.status(200).json({message:"DeRegisterd"})
                        })
                        .catch(err=>{
                            throw err;
                        })
                    }
                    else{
                        res.status(200).json({message:"Already DeRegisterd"})
                }
            
            }
            else{
                res.status(200).json({message:"User dosent exist"});
            }
        })
})

app.post("/registeredEvents",(req,res,next)=>{
    console.log(req.body);
    const {email}=req.body;
    userDb.find({email:email})
        .then(data=>{
            if(data.length>0)
            {
                res.status(200).json({registeredEventsIds:data[0].registeredEventsIds});
            }else{
                res.status(200).json({registeredEventsIds:[],message:"User dosent exist"});
            }
        })
        .catch(err=>{throw err});
})

app.use((error,req,res,next)=>{
    console.log(error);
    const status=error.statusCode || 500;
    const message=error.message;
    res.status(status).json({ message:message });
});


app.listen(8080,()=>{
    db().then(res=>{
        console.log("Listening on port 8080  and connected to db");
    });
});