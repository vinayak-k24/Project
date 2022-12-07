import React, {useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import authService from '../services/auth.service';
// import {withRouter} from 'react-router-dom'

function EventInfo(){
    const navigate=useNavigate();
    const { id } = useParams();
    const [eventValues,setValues]=useState({
        eventId:"",
        eventName:"",
        eventDescription:"",
        organizerName:"",
        organizerEmail:"",
        venue:"",
        noOfPeopleEstimated:"",
        fromDateTime:new Date(),
        toDateTime:new Date(),
        registerFlag:false,
        upcomingFlag:false,
        organizedFlag:false
    });

    useEffect(()=>{
        console.log(id);
        fetch('http://localhost:8080/eventInfo/'+id,{
            method:"get",   
        }).then(res=>{
            return res.json();
        })
        .then(data=>{
            console.log(data);
            if(data.message==="Success"){
                console.log(data);
                setValues(eventValues=>({...eventValues,
                        eventId:id,
                        eventName:data.event.eventName,
                        eventDescription:data.event.eventDescription,
                        venue:data.event.venue,
                        noOfPeopleEstimated:data.event.noOfPeopleEstimated,
                        organizerEmail:data.event.organizerEmail,
                        organizerName:data.event.organizerName,
                        toDateTime:new Date(data.event.toDateTime),
                        fromDateTime:new Date(data.event.fromDateTime)}));
                        // console.log(eventValues.toDateTime);
            }
            if(data.event.organizerEmail===authService.getCurrentUser().email){
                setValues(eventValues=>({...eventValues,organizedFlag:true}));
            }
            else{
                setValues(eventValues=>({...eventValues,organizedFlag:false}));
            }
            const date=new Date();
            console.log(date,data.event.fromDateTime);
            if(new Date(data.event.fromDateTime)>date){
                setValues(eventValues=>({...eventValues,upcomingFlag:true}));
            }
            else{
                console.log("HI");
                setValues(eventValues=>({...eventValues,upcomingFlag:false}));
            }
            if(!authService.getToken()){
                setValues(eventValues=>({...eventValues,registerFlag:false}));
                console.log("h1");
            }
            else{
                const currentUser=authService.getCurrentUser();
                console.log(currentUser);
                fetch("http://localhost:8080/registeredEvents",
                {
                    method:"POST",
                    body:JSON.stringify({email:currentUser.email}),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                      }
                }).then(data=>{return data.json()})
                .then(data=>{
                    console.log(data);

                    if(data.registeredEventsIds.length>0 &&  data.registeredEventsIds.includes(id)){
                        console.log("h2");
                        setValues(eventValues=>({...eventValues,registerFlag:true}));
                    }else{
                        console.log("h3");
                        setValues(eventValues=>({...eventValues,registerFlag:false}));
                    }
                })
                .catch(err=>console.log(err));
            }
            
        })
        .catch(err=>{
            console.log(err);
        })
    },[]);

    const deleteEvent=()=>{
        fetch("http://localhost:8080/eventDelete",
            {
                method:"POST",
                body:JSON.stringify({id:eventValues.eventId,email:authService.getCurrentUser().email}),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    }
            })
            .then(res=>{return res.json()})
            .then(data=>{
                console.log(data);
                alert("Deleted Successfully");
                navigate("/events");
            })
            .catch(err=>console.log(err));
    }

    const registerEvent=()=>{
        console.log(authService.getCurrentUser().email);
        fetch("http://localhost:8080/registerEvent",{
            method:"POST",
            body:JSON.stringify({eventId:id,email:authService.getCurrentUser().email}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
        }).then(res=> {return res.json()})
        .then(data=>{
            console.log(data);
            setValues({...eventValues,registerFlag:true});
        })
        .catch(err=>console.log(err));
    }
    const deRegisterEvent=()=>{
        console.log(authService.getCurrentUser().email);
        fetch("http://localhost:8080/deRegisterEvent",{
            method:"POST",
            body:JSON.stringify({eventId:id,email:authService.getCurrentUser().email}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
        }).then(res=> {return res.json()})
        .then(data=>{
            console.log(data);
            setValues({...eventValues,registerFlag:false});
        })
        .catch(err=>console.log(err));
    }
    
    return(
        <div className='container'>
            <h1>{eventValues.eventName}</h1>
            <p>{eventValues.eventDescription}</p>
            <h4>Organized By : {eventValues.organizerName}</h4>
            <h1>Venue: {eventValues.venue}</h1>
            <h2>Date: {eventValues.fromDateTime.getDate()===eventValues.toDateTime.getDate() ? `${eventValues.fromDateTime.getDate()}-${eventValues.fromDateTime.getMonth()}-${eventValues.fromDateTime.getFullYear()}` : `${eventValues.fromDateTime.getDate()}-${eventValues.fromDateTime.getMonth()}-${eventValues.fromDateTime.getFullYear()} To ${eventValues.toDateTime.getDate()}-${eventValues.toDateTime.getMonth()}-${eventValues.toDateTime.getFullYear()}`}</h2>
            <h2>Timings: {eventValues.fromDateTime.getHours().toString().length!==2 ? "0"+eventValues.fromDateTime.getHours():eventValues.fromDateTime.getHours()}
                :{eventValues.fromDateTime.getMinutes().toString().length!==2 ? "0"+eventValues.fromDateTime.getMinutes():eventValues.fromDateTime.getMinutes()}
                
                {eventValues.fromDateTime.getHours()>=12 ?"PM":"AM"} {"To "}  
                
                {eventValues.toDateTime.getHours().toString().length!==2 ? "0"+eventValues.toDateTime.getHours():eventValues.toDateTime.getHours()}
                :{eventValues.toDateTime.getMinutes().toString().length!==2 ? "0"+eventValues.toDateTime.getMinutes():eventValues.toDateTime.getMinutes()}
                
                {eventValues.toDateTime.getHours()>=12 ?"PM":"AM"} 

                </h2>
            <h1>No.of People Estimated: {eventValues.noOfPeopleEstimated}</h1>

            {eventValues.organizedFlag?
            
            <>
                {eventValues.upcomingFlag?
                
                    <>
                        <button>Edit</button>
                        <button onClick={deleteEvent}>Delete</button>
                    </>
                :
                
                    <>

                    </>
                }
            </>

            :

            <>
                {eventValues.upcomingFlag?
                <>
                    {!eventValues.registerFlag ?
                        <button onClick={registerEvent}>Register</button>
                    :
                        <button onClick={deRegisterEvent}>DeRegister</button>
                    }
                </>
            :
                <>
                    {eventValues.registerFlag ?
                            <button type='disabled'>Registered</button>
                    :
                            <button type='disabled'>Not Registered</button>
                    }
                </>
            }
            </>
            }
            

            
        </div>
    );
}

export default EventInfo;