import React from 'react';
import { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
  }
  from 'mdb-react-ui-kit';
// import "./signup.css";
// import "https://unicons.iconscout.com/release/v4.0.0/css/line.css";
function Signup () {
    const [values,setValues]=useState({
        name:"",
        email:"",
        password:"",
        department:"",
        phoneNumber:"",
        semester:1,
        gender:"",
        userType:"",
        usn:"",
    });

    const signUp=()=>{
        
    }
    
	return(
        
        <MDBContainer className="my-5">
                
    <MDBCard alignment='center'>
    <MDBRow className='align-items-center justify-content-center g-0'>

        

        <MDBCol md='6'>
        <MDBCardBody className=' d-flex flex-column'></MDBCardBody>
        
        <div className='d-flex flex-row mt-2'>
            <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
            <span className="h1 fw-bold" alignment='center'>       Registration Form </span>
            </div>


        <MDBInput wrapperClass='shadow p-3 mb-5 bg-body rounded' placeholder='Full Name' id='name' type='text' size="lg" required value={values.name} onChange={(e)=>setValues({...values,name:e.target.value})} />
        
        <MDBInput wrapperClass='shadow p-3 mb-5 bg-body rounded' placeholder='Email' id='email' type='text' size="lg" required value={values.email} onChange={(e)=>setValues({...values,email:e.target.value})}/>

        <MDBInput wrapperClass='shadow p-3 mb-5 bg-body rounded' placeholder='Gender' id='gender' type='text' size="lg" required value={values.gender} onChange={(e)=>setValues({...values,gender:e.target.value})} />

        <MDBInput wrapperClass='shadow p-3 mb-5 bg-body rounded' placeholder='Mobile Number' id='number' type='number' size="lg" required value={values.phoneNumber} onChange={(e)=>setValues({...values,phoneNumber:e.target.value})}/>

        <MDBInput wrapperClass='shadow p-3 mb-5 bg-body rounded' placeholder='Department' id='department' type='text' size="lg" required value={values.department} onChange={(e)=>setValues({...values,department:e.target.value})}/>
        
        <MDBInput wrapperClass='shadow p-3 mb-5 bg-body rounded' placeholder='USN' id='usn' type='text' size="lg" required value={values.usn} onChange={(e)=>setValues({...values,usn:e.target.value})}/>
        
        <MDBInput wrapperClass='shadow p-3 mb-5 bg-body rounded' placeholder='Password' id='password' type='password' size="lg" required value={values.password} onChange={(e)=>setValues({...values,password:e.target.value})}/>
        
        <MDBInput wrapperClass='shadow p-3 mb-5 bg-body rounded' placeholder='Semester' id='semester' type='numbe' size="lg"  required value={values.semester} onChange={(e)=>setValues({...values,semester:e.target.value})}/>

        <MDBInput wrapperClass='shadow p-3 mb-5 bg-body rounded' placeholder='Type' id='type' type='text' size="lg" required value={values.type} onChange={(e)=>setValues({...values,type:e.target.value})} />
       
        <button className="mb-4 px-5 btn btn-primary" id="submit" size='lg' onClick={signUp}>REGISTER</button>
        
        
  
    </MDBCol>
    
    </MDBRow>
    </MDBCard>
</MDBContainer>
    );
}
export default Signup;
