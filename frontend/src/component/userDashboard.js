import React, { useEffect, useState } from 'react';

import "./dashboard.css";
import authService from '../services/auth.service';
import { useNavigate } from "react-router-dom";
function UserDashboard () {

  useEffect(()=>{
      authService.refreshPage();
    },[])
      
      return (
        <div>
            
        </div>
    );
  }

export default UserDashboard;