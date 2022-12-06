import React, { useEffect, useState } from 'react';
// import { Route,Link } from "react-router-dom";
// import EventInfo from './eventInfo';

import "./dashboard.css";
import authService from '../services/auth.service';
import { useNavigate } from "react-router-dom";
function OrganizerDashboard () {

  useEffect(()=>{
      authService.refreshPage();
    },[])
      
      return (
        <div>
          {/* Designined by CodingLab | www.youtube.com/codinglabyt */}
<meta charSet="UTF-8" />
{/*<title> Responsiive Admin Dashboard | CodingLab </title>*/}

{/* Boxicons CDN Link */}
<link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
{/*-div class="sidebar">
<div class="logo-details">

<span class="logo_name"></span>
</div>
<ul class="nav-links">
<li>
  <a href="#" class="active">
    <i class='bx bx-grid-alt' ></i>
    <span class="links_name">Dashboard</span>
  </a>
</li>
<li>
  <a href="#">
    <i class='bx bx-box' ></i>
    <span class="links_name">Product</span>
  </a>
</li>
<li>
  <a href="#">
    <i class='bx bx-list-ul' ></i>
    <span class="links_name">Order list</span>
  </a>
</li>
<li>
  <a href="#">
    <i class='bx bx-pie-chart-alt-2' ></i>
    <span class="links_name">Analytics</span>
  </a>
</li>
<li>
  <a href="#">
    <i class='bx bx-coin-stack' ></i>
    <span class="links_name">Stock</span>
  </a>
</li>
<li>
  <a href="#">
    <i class='bx bx-book-alt' ></i>
    <span class="links_name">Total order</span>
  </a>
</li>
<li>
  <a href="#">
    <i class='bx bx-user' ></i>
    <span class="links_name">Team</span>
  </a>
</li>
<li>
  <a href="#">
    <i class='bx bx-message' ></i>
    <span class="links_name">Messages</span>
  </a>
</li>
<li>
  <a href="#">
    <i class='bx bx-heart' ></i>
    <span class="links_name">Favrorites</span>
  </a>
</li>
<li>
  <a href="#">
    <i class='bx bx-cog' ></i>
    <span class="links_name">Setting</span>
  </a>
</li>
<li class="log_out">
  <a href="#">
    <i class='bx bx-log-out'></i>
    <span class="links_name">Log out</span>
  </a>
</li>
</ul>
</div*/}
<section className="home-section">
  <nav>
    <div className="sidebar-button">
      <i className="bx bx-menu sidebarBtn" />
      <span className="dashboard">Dashboard</span>
    </div>
    <div className="search-box">
      <input type="text" placeholder="Search..." />
      <i className="bx bx-search" />
    </div>
    <div className="profile-details">
      {/*<img src="images/profile.jpg" alt="">*/}
      <span className="admin_name">Prem Shahi</span>
      <i className="bx bx-chevron-down" />
    </div>
  </nav>
  <div className="home-content">
    <div className="overview-boxes">
      <div className="box">
        <div className="right-side">
          <div input type="button" className="box-topic">Create An Event</div>
          <div className="indicator">
            <i className="bx bx-up-arrow-alt" />
            <span className="text">Click here</span>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="right-side">
          <div className="box-topic">Total events organised</div>
          <div className="number">38</div>
          <div className="indicator">
            <i className="bx bx-up-arrow-alt" />
            <span className="text">create more!</span>
          </div>
        </div>
      </div>
      <div className="box">
      <div className="right-side">
        <div className="box-topic">Update</div>
        <div className="number" />
        <div className="indicator">
          <span className="text">here now</span>
        </div>
      </div>
    </div>
    <div className="box">
      <div className="right-side">
        <div className="box-topic">Update </div>
        <div className="number" />
        <div className="indicator">
          <span className="text">Update your profile</span>
        </div>
      </div>
    </div>
  </div>
  <div className="sales-boxes">
    <div className="recent-sales box">
      <div className="title">Upcoming Events</div>
      <div className="sales-details">
        <ul className="details">
          <li className="topic">Date</li>
          <li><a href="#">02 Jan 2021</a></li>
          <li><a href="#">02 Jan 2021</a></li>
          <li><a href="#">02 Jan 2021</a></li>
          <li><a href="#">02 Jan 2021</a></li>
          <li><a href="#">02 Jan 2021</a></li>
          <li><a href="#">02 Jan 2021</a></li>
          <li><a href="#">02 Jan 2021</a></li>
        </ul>
        <ul className="details">
          <li className="topic">Event name</li>
          <li><a href="#">Cse freshers</a></li>
          <li><a href="#">Cse freshers</a></li>
          <li><a href="#">Cse freshers</a></li>
          <li><a href="#">Cse freshers</a></li>
          <li><a href="#">Cse freshers</a></li>
          <li><a href="#">Cse freshers</a></li>
          <li><a href="#">Workshop</a></li>
        </ul>
        {/*-ul class="details">
  <li class="topic">Sales</li>
  <li><a href="#">Delivered</a></li>
  <li><a href="#">Pending</a></li>
  <li><a href="#">Returned</a></li>
  <li><a href="#">Delivered</a></li>
  <li><a href="#">Pending</a></li>
  <li><a href="#">Returned</a></li>
  <li><a href="#">Delivered</a></li>
   <li><a href="#">Pending</a></li>
  <li><a href="#">Delivered</a></li>
</ul>
<ul class="details">
  <li class="topic">Total</li>
  <li><a href="#">$204.98</a></li>
  <li><a href="#">$24.55</a></li>
  <li><a href="#">$25.88</a></li>
  <li><a href="#">$170.66</a></li>
  <li><a href="#">$56.56</a></li>
  <li><a href="#">$44.95</a></li>
  <li><a href="#">$67.33</a></li>
   <li><a href="#">$23.53</a></li>
   <li><a href="#">$46.52</a></li>
</ul>
</div>
<div class="button">
  <a href="#">See All</a>
</div>
</div-*/}
        <div className="top-sales box">
          <div className="title">Previously organised Events</div>
          <ul className="top-sales-details">
            <li>
              <a href="#">
                {/*<img src="images/sunglasses.jpg" alt="">*/}
                <span className="product">Workshop</span>
              </a>
              <span className="price">11/09/2022</span>
            </li>
            <li>
              <a href="#">
                {/*<img src="images/jeans.jpg" alt="">*/}
                <span className="product">Workshop</span>
              </a>
              <span className="price">11/09/2022</span>
            </li>
            <li>
              <a href="#">
                {/* <img src="images/nike.jpg" alt="">*/}
                <span className="product">Workshop</span>
              </a>
              <span className="price">11/09/2022</span>
            </li>
            <li>
              <a href="#">
                {/*<img src="images/scarves.jpg" alt="">*/}
                <span className="product">Workshop</span>
              </a>
              <span className="price">11/09/2022</span>
            </li>
            <li>
              <a href="#">
                {/*<img src="images/blueBag.jpg" alt="">*/}
                <span className="product">Workshop</span>
              </a>
              <span className="price">11/09/2022</span>
            </li>
            <li>
              <a href="#">
                {/*<img src="images/bag.jpg" alt="">*/}
                <span className="product">Workshop</span>
              </a>
              <span className="price">11/09/2022</span>
            </li><li>
              <a href="#">
                {/*<img src="images/addidas.jpg" alt="">*/}
                <span className="product">Workshop</span>
              </a>
              <span className="price">11/09/2022</span>
            </li>
            <li>
              <a href="#">
                {/*<img src="images/shirt.jpg" alt="">*/}
                <span className="product">Workshop</span>
              </a>
              <span className="price">11/09/2022</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div></div></section>
{/*  */}
      </div>
    );
  }

export default OrganizerDashboard;