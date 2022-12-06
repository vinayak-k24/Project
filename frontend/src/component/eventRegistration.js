import React, { useState } from 'react';
import validator from "validator";
import DateTimePicker from 'react-datetime-picker';
import { useEffect } from 'react';
import authService from '../services/auth.service';
import { Navigate, useNavigate } from 'react-router-dom';
// import "./eventRegistration.css";
// import "./eventRegistrationJs.js";
function EventRegistration () {

    const [values,setValues]=useState({
        eventName:"",
        eventDescription:"",
        coordinatorName:"",
        coordinatorEmail:"",
        coordinatorNumber:0,
        venue:"",
        guestName:"",
        noOfPeopleEstimated:50,
        fromDateTime:new Date(),
        toDateTime:new Date(),
        image:"",
        eventType:""
    })
    const [eventNameError,setEventNameError]=useState("");
    const [eventTypeError,setEventTypeError]=useState("");
    const [eventDescriptionError,setEventDescriptionError]=useState("");
    const [coordinatorNameError,setCoordinatorNameError]=useState("");
    const [coordinatorEmailError,setCoordinatorEmailError]=useState("");
    const [coordinatorNumberError,setCoordinatorNumberError]=useState("");
    const [venueError,setVenueError]=useState("");
    const [guestNameError,setGuestNameError]=useState("");
    const [noOfPeopleEstimatedError,setNoOfPeopleEstimatedError]=useState("");
    const [fromDateTimeError,setFromDateTimeError]=useState("");
    const [toDateTimeError,setToDateTimeError]=useState("");
    const [imageError,setImageError]=useState("");

    const handleEventNameInputChange=(event)=>{
        setValues({...values,eventName:event.target.value})
        if(values.eventName.length<4){
            setEventNameError("Event Name length should be minimum 4 ");
        }
        else{
            setEventNameError("");
        }
    }
    const handleCoordinatorNameInputChange=(event)=>{
        setValues({...values,coordinatorName:event.target.value})
        if(values.coordinatorName.length<4){
            setCoordinatorNameError("Coordinator Name length should be minimum 4 ");
        }
        else{
            setCoordinatorNameError("");
        }
    }
    const handleCoordinatorEmailInputChange=(event)=>{
        setValues({...values,coordinatorEmail:event.target.value})
        if(!validator.isEmail(values.coordinatorEmail)){
            setCoordinatorEmailError("Invalid Email ID ");
        }
        else{
            setCoordinatorEmailError("");
        }
    }
    const handleCoordinatorNumberInputChange=(event)=>{
        setValues({...values,coordinatorNumber:event.target.value})
        if(values.coordinatorNumber.length<10){
            setCoordinatorNumberError("Number length should be minimum 10");
        }
        else{
            setCoordinatorNumberError("");
        }
    }
    const handleguestNameInputChange=(event)=>{
        setValues({...values,guestName:event.target.value})
        if(values.guestName.length<4){
            setGuestNameError("Guest Name length should be minimum 4 ");
        }
        else{
            setGuestNameError("");
        }
    }
    const handleEventDescriptionInputChange=(event)=>{
        setValues({...values,eventDescription:event.target.value})
        if(values.eventDescription.length<4){
            setEventDescriptionError("Event Description length should be minimum 4 ");
        }
        else{
            setEventDescriptionError("");
        }
    }
    const handleVenueInputChange=(event)=>{
        setValues({...values,venue:event.target.value})
        if(values.venue.length<4){
            setVenueError("Event Name length should be minimum 4 ");
        }
        else{
            setVenueError("");
        }
    }
    const handleNoOfPeopleEstimatedInputChange=(event)=>{
        setValues({...values,noOfPeopleEstimated:event.target.value})
        if(values.noOfPeopleEstimated<50){
            setNoOfPeopleEstimatedError("No of People Estimated should be greater then 50");
        }
        else{
            setNoOfPeopleEstimatedError("");
        }
    }
    const handleFromDateTimeInputChange=(event)=>{
        console.log(event);
        setValues({...values,fromDateTime:event})
        // if(values.fromDateTime.length<4){
        //     setEventNameError("Event Name length should be minimum 4 ");
        // }
        // else{
        //     setEventNameError("");
        // }
    }
    const handleToDateTimeInputChange=(event)=>{
        console.log(event);
        setValues({...values,toDateTime:event})
        // if(values.fromDateTime.length<4){
        //     setEventNameError("Event Name length should be minimum 4 ");
        // }
        // else{
        //     setEventNameError("");
        // }
    }

    // const convertToBase64 = (file) => {
    //     return new Promise((resolve, reject) => {
    //       const fileReader = new FileReader();
    //       fileReader.readAsDataURL(file);
    //       fileReader.onload = () => {
    //         resolve(fileReader.result);
    //       };
    //       fileReader.onerror = (error) => {
    //         reject(error);
    //       };
    //     });
    //   };

    const handleImageInputChange=(event)=>{
        console.log(event.target.files[0]);
        // const base64=await convertToBase64(event.target.files[0]);
        setValues({...values,image:event.target.files[0]});
        console.log(values.image);
    }

    const handleEventTypeInputChange=(event)=>{
        setValues({...values,eventType:event.target.value});
        if(values.eventType.length<4){
            setEventTypeError("Event Type length should be minimum 4 ");
        }
        else{
            setEventTypeError("");
        }
    }

    
    const submitDeatils= (event)=>{
        event.preventDefault();
        if(values.eventName.length<4){
            setEventNameError("Event Name length should be minimum 4 ");
        }
        else{
            setEventNameError("");
        }
        if(values.eventDescription.length<4){
            setEventDescriptionError("Event Description length should be minimum 4 ");
        }
        else{
            setEventDescriptionError("");
        }
        if(values.venue.length<4){
            setVenueError("Event Name length should be minimum 4 ");
        }
        else{
            setVenueError("");
        }
        if(values.coordinatorName.length<4){
            setCoordinatorNameError("Coordinator Name length should be minimum 4 ");
        }
        else{
            setCoordinatorNameError("");
        }
        if(!validator.isEmail(values.coordinatorEmail)){
            setCoordinatorEmailError("Invalid Email ID ");
        }
        else{
            setCoordinatorEmailError("");
        }
        if(values.coordinatorNumber.length<10){
            setCoordinatorNumberError("Number length should be minimum 10");
        }
        else{
            setCoordinatorNumberError("");
        }
        if(values.guestName.length<4){
            setGuestNameError("Guest Name length should be minimum 4 ");
        }
        else{
            setGuestNameError("");
        }
        if(values.noOfPeopleEstimated<50){
            setNoOfPeopleEstimatedError("No of People Estimated should be greater then 50");
        }
        else{
            setNoOfPeopleEstimatedError("");
        }


        
        if(!eventNameError && !coordinatorNameError && !coordinatorEmailError && !coordinatorNumberError && !guestNameError && !eventDescriptionError && !venueError && !noOfPeopleEstimatedError){
                console.log(values);
                const formData = new FormData()
                formData.append('eventName', values.eventName);
                formData.append('eventDescription', values.eventDescription);
                formData.append('coordinatorName', values.coordinatorName);
                formData.append('coordinatorEmail', values.coordinatorEmail);
                formData.append('coordinatorNumber', values.coordinatorNumber);
                formData.append('venue', values.venue);
                formData.append('guestName', values.guestName);
                formData.append('noOfPeopleEstimated', values.noOfPeopleEstimated);
                formData.append('fromDateTime', values.fromDateTime);
                formData.append('toDateTime', values.toDateTime);
                formData.append('eventType', values.eventType);
                formData.append('images',values.image);
                console.log(formData);
                fetch("http://localhost:8080/bookEvent",{
                    method: 'POST',
                    body: formData,
                    
                })
                        .then(data=>{
                            console.log(data);
                        })
                        .catch(err=>console.log(err));

            //                 if(data.message==="Authentication has been successful")
            //                 {
            //                     console.log(data.token);
            //                     localStorage.setItem('token',data.token);
                                
            //                     window.location.href = "/";
            //                 }    
            //                 else if(data.message==="Already Logged In"){
            //                     window.location.href = "/";
            //                 }
            //                 else{
            //                     localStorage.removeItem('token');
            //                     setAuthMessage(data.message);
            //                 }
            //             })
            //             .catch(err=>{
            //                 throw err;
            //             })
            // }
        }
    }
    const navigate=useNavigate();

    useEffect(()=>{
        authService.refreshPage();
        if(authService.getCurrentUser().type==="user"){
            navigate("/");
        }
    },[])

	return(
        <>
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
        <title>Responsive Regisration Form </title>
        <div className="container">
            <header>Event Registration</header>
            <form onSubmit={submitDeatils}>
                <div className="form first">
                    <div className="details personal">
                    <span className="title">Event Details</span>
                    <div className="fields">
                        <div className="input-field">
                        <label htmlFor='eventName'>Name of the Event</label>
                        <input type="text" name="eventName" required value={values.eventName} onChange={handleEventNameInputChange}/>
                        <span>{eventNameError}</span>
                        </div>
                        <div className="input-field">
                        <label htmlFor="fromDateTime"></label>
                        <DateTimePicker name='fromDateTime' value={values.fromDateTime}  onChange={handleFromDateTimeInputChange} />
                        <span>{fromDateTimeError}</span>
                        </div>
                        <div className="input-field">
                        <label htmlFor="toDateTime"></label>
                        <DateTimePicker name='toDateTime' value={values.toDateTime}  onChange={handleToDateTimeInputChange} />
                        <span>{toDateTimeError}</span>
                        </div>
                        <div className="input-field">
                        <label>Co-ordinator Name</label>
                        <input type="text" value={values.coordinatorName} onChange={handleCoordinatorNameInputChange}  required />
                        <span>{coordinatorNameError}</span>
                        </div>
                        <div className="input-field">
                        <label>Event Description</label>
                        <textarea value={values.eventDescription} onChange={handleEventDescriptionInputChange}  required />
                        <span>{eventDescriptionError}</span>
                        </div>
                        <div>
                        <label>Co-ordinator mail</label>
                        <input type="text" value={values.coordinatorEmail} onChange={handleCoordinatorEmailInputChange} required />
                        <span>{coordinatorEmailError}</span>
                        </div>
                        <div className="input-field">
                        <label>Co-ordinator Mobile Number</label>
                        <input type="number" value={values.coordinatorNumber} onChange={handleCoordinatorNumberInputChange} required />
                        <span>{coordinatorNumberError}</span>
                        </div>
                        <div className="input-field">
                        <label>Target Audience</label>
                        <input type="number" value={values.noOfPeopleEstimated} onChange={handleNoOfPeopleEstimatedInputChange}  required />
                        <span>{noOfPeopleEstimatedError}</span>
                        </div>
                        <div className="input-field">
                        <label>Event Type</label>
                        <input type="text" value={values.eventType} onChange={handleEventTypeInputChange} required />
                        <span>{eventTypeError}</span>
                        </div>
                        <div className="input-field">
                        <label>Venue</label>
                        <input type="text" value={values.venue} onChange={handleVenueInputChange} required />
                        <span>{venueError}</span>
                        </div>
                        <div className="input-field">
                        <label>Guest Name</label>
                        <input type="text" value={values.guestName} onChange={handleguestNameInputChange} required />
                        <span>{guestNameError}</span>
                        </div>
                        <div className="input-field">
                        <label>Poster</label>
                        <input type="file" onChange={handleImageInputChange} required />
                        <span>{imageError}</span>
                        </div>
                    </div>
                    </div>
                    <div className="buttons">
                    <button className="sumbit" type='submit' >
                        <span className="btnText">Submit</span>
                        <i className="uil uil-navigator" />
                    </button>
                    </div>
                </div>
            </form>
        </div>
        
        </>

    );
}
export default EventRegistration;
