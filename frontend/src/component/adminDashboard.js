import React, { useEffect, useState } from 'react';
// import { Route,Link } from "react-router-dom";
// import EventInfo from './eventInfo';

import "./dashboard.css";
import authService from '../services/auth.service';
import { useNavigate } from "react-router-dom";
function AdminDashboard () {

  useEffect(()=>{
      authService.refreshPage();
    },[])
      
      return (
        <div>
          
      </div>
    );
  }

export default AdminDashboard;