import React from 'react';
import { useState } from 'react';

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
        gender:""
    });

    const signUp=()=>{
        
    }
    
	return(
        
        <div>
            
            <title>User Registration Form</title>
            <div className="container">
                <header>Registration</header>
                <form>
                <div className="form first">
                    <div className="details personal">
                    <span className="title">Personal Details</span>
                    <div className="fields">
                        <div className="input-field">
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter your name" required value={values.name} onChange={(e)=>setValues({...values,name:e.target.value})} />
                        </div>
                        <div className="input-field">
                        <label>Date of Birth</label>
                        <input type="date" placeholder="Enter birth date" required value={values.dob} onChange={(e)=>setValues({...values,dob:e.target.value})}/>
                        </div>
                        <div className="input-field">
                        <label>Email</label>
                        <input type="text" placeholder="Enter your email" required value={values.email} onChange={(e)=>setValues({...values,email:e.target.value})}/>
                        </div>
                        <div className="input-field">
                        <label>Mobile Number</label>
                        <input type="number" placeholder="Enter mobile number" required value={values.phoneNumber} onChange={(e)=>setValues({...values,phoneNumber:e.target.value})}/>
                        </div>
                        <div className="input-field">
                        <label>Gender</label>
                        <select required value={values.gender} onChange={(e)=>setValues({...values,gender:e.target.value})}>
                            <option disabled selected>
                            Select gender
                            </option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                        </select>
                        </div>
                        
                        <div className="input-field">
                        <label>Department</label>
                        <input type="text" placeholder="Enter your Department" required value={values.department} onChange={(e)=>setValues({...values,department:e.target.value})}/>
                        </div>
                        
                        <div className="input-field">
                        <label>USN</label>
                        <input type="text" placeholder="Enter USN" required value={values.usn} onChange={(e)=>setValues({...values,usn:e.target.value})}/>
                        </div>
                        
                        <div className="input-field">
                        <label>Password</label>
                        <input type="text" placeholder="Enter Password" required value={values.password} onChange={(e)=>setValues({...values,password:e.target.value})}/>
                        </div>

                        <div className="input-field">
                        <label>Semester</label>
                        <input type="number" placeholder="Enter Semester" required value={values.semester} onChange={(e)=>setValues({...values,semester:e.target.value})}/>
                        </div>
                    </div>
                    </div>
                    <button onclick={signUp} className="sumbit">
                    <span className="btnText">Submit</span>
                    <i className="uil uil-navigator" />
                    </button>
                </div>
                </form>
            </div>
        </div>
    );
}
export default Signup;
