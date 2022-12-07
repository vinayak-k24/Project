import React, { useEffect, useState } from 'react';
import validator from "validator";
import "./login.css";
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
import { useNavigate } from "react-router-dom";
import authService from '../services/auth.service';
// import bgImage from  '../assets/loginlogo.jpg';
function Login (){
    const navigate=useNavigate();
    const [values,setValues]=useState({
        email:"",
        pasword:""
    })
    const [emailError,setEmailError]=useState("");
    const [passwordError,setPasswordError]=useState("");
    const [authMessage,setAuthMessage]=useState("");

    const handleEmailInputChange=(event)=>{
        setValues(values=>({...values,email:event.target.value}))
    }

    const handlePasswordInputChange=(event)=>{
        setValues(values=>({...values,pasword:event.target.value}))
    }

    const submitDeatils= (event)=>{
        // event.preventDefault();
        if(!validator.isEmail(values.email)){
            setEmailError("Enter Valid Email");
        }
        else{
            setEmailError(emailError=> ({emailError,emailError:null}) );
        }
        if(values.pasword.length<7){
            setPasswordError("Password length should be greater then 7");
        }
        else{
            setPasswordError(passwordError=> ({passwordError,passwordError:null}) );
            
        }
        if(emailError===null && passwordError===null){
                authService.login(values.email,values.pasword)
                        .then(res=> res.json())
                        .then(data=>{
                            if(data.message==="Authentication has been successful")
                            {
                                console.log(data);
                                localStorage.setItem('token',data.token);
                                
                                window.location.href = "/";
                            }
                            else if(data.message==="Already Logged In"){
                                window.location.href = "/";
                            }
                            else{
                                localStorage.removeItem('token');
                                setAuthMessage(data.message);
                            }
                        })
                        .catch(err=>{
                            throw err;
                        })
            }
    }
            
            
    useEffect(()=>{
        if(!authService.getCurrentUser() || authService.getExpiryToken()){
            localStorage.removeItem("token");
        }   
        else{
            navigate("/");
        }
    })  

	return(
        
        <>
        <>  <MDBContainer className="my-5">
                
                <MDBCard>
                <MDBRow className='g-3'>
                <div className="h1 p-3 mb-2 bg-primary text-white"><marquee>WELCOME TO KLE TECH EVENT MANAGEMENT PORTAL</marquee></div>
                <span className="border border-warning"></span>

                    <MDBCol md='6'>
                    <MDBCardImage src={""} style={{height:450,width:20}} alt="login form" className='rounded-start w-100'/>
                    </MDBCol>

                    <MDBCol md='6'>
                    <MDBCardBody className='d-flex flex-column'></MDBCardBody>
                    <div className='d-flex flex-row mt-2'>
                        <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '' }}/>
                        <span className=" h3 fw-normal ">LOGIN HERE!</span><br></br>
                        </div>


                    <MDBInput wrapperClass='shadow p-3 mb-5 bg-body rounded' placeholder='Email_Id' id='username' type='email' size="lg" onChange={handleEmailInputChange}  value={values.email}/>
                    <span className="mb-4">{emailError}</span>
                    <MDBInput wrapperClass='shadow p-3 mb-5 bg-body rounded' placeholder='Password' id='password' type='password' size="lg" onChange={handlePasswordInputChange}  value={values.pasword}/>
                    <span className="mb-4">{passwordError}</span>
                    

                    <button className="mb-4 px-5 btn btn-primary" color='blue' size='lg' onClick={submitDeatils}>Login</button>
                    <p>{authMessage}</p>
                    
                    

                    <div className='d-flex flex-row justify-content-start'>
                    <a href="#!" className="small text-muted me-1">Terms of use.</a>
                    <a href="#!" className="small text-muted">Privacy policy</a>
                    </div>
                </MDBCol>

                </MDBRow>
                </MDBCard>

            </MDBContainer>
      

               {/*}  <form className="text-center" onClick={submitDeatils}>
                                            <div className="mb-3"><input className="form-control" type="email" name="email" onChange={handleEmailInputChange}  value={values.email} />
                                            <span className="mb-3">{emailError}</span> </div>
                                            <div className="mb-3"><input className="form-control" type="password" name="password" onChange={handlePasswordInputChange}  value={values.pasword} />
                                            <span className="mb-3">{passwordError}</span></div>
                                            <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit">Login</button></div>
                                           
                </form> 
                
                </>*/}
        
        
            {/* <link rel="stylesheet" href="assets/css/Login-Form-Basic-icons.css"></link>
        
            <div className="container">
                <div className="row mb-5"></div>
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <h2 style={{ marginBottom: "31px", paddingBottom: "0px", paddingTop: "44px", marginTop: "0px" }}>Log in</h2>
                    <p className="w-lg-50">Curae hendrerit donec commodo hendrerit egestas tempus, turpis facilisis nostra nunc. Vestibulum dui eget ultrices.</p>
                </div>
                <div className="row d-flex justify-content-center" style={{ paddingTop: "34px" }}>
                    <div className="col-md-6 col-xl-4">
                        <div className="card mb-5">
                            <div className="card-body d-flex flex-column align-items-center" style={{ marginTop: "0px" }}>
                                <div className="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-person">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                                </svg></div>
                                <form className="text-center" onClick={submitDeatils}>
                                    <div className="mb-3"><input className="form-control" type="email" name="email" onChange={handleEmailInputChange}  value={values.email} />
                                    <span className="mb-3">{emailError}</span> </div>
                                    <div className="mb-3"><input className="form-control" type="password" name="password" onChange={handlePasswordInputChange}  value={values.pasword} />
                                    <span className="mb-3">{passwordError}</span></div>
                                    <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit">Login</button></div>
                                    <p className="text-muted">Forgot your password?</p>
                                    <p>{authMessage}</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
             */}
        {/* </div> */}
        </>
        </>


        
    );
}

export default Login;
