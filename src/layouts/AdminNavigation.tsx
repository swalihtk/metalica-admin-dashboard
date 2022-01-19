import React, { useState } from "react";
import "../styles/AdminDashboard.css";
import { Link } from "react-router-dom";

type AdminNavigationProps = {
  children?:React.ReactNode;
};

function AdminNavigation(props: AdminNavigationProps) {
  return (
    <>
      <input type="checkbox" id="hamburger" defaultChecked/>
      <div className="sidebar">
        <div className="sidebar-brand">
          <h1>METALICA</h1>
          <label htmlFor="hamburger">
            <img
              src="https://img.icons8.com/ios/50/ffffff/hamburger.png"
              width={30}
              height={30}
            />
          </label>
        </div>

        <div className="sidebar-items">
          <ul>
            <li>
              <Link to="/">
                <span>
                <img src="https://img.icons8.com/ios/50/ffffff/home--v1.png"/>
                </span>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span>
                <img src="https://img.icons8.com/external-sbts2018-outline-sbts2018/58/ffffff/external-events-social-media-basic-1-sbts2018-outline-sbts2018.png"/>
                </span>
                <span>Events</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span>
                <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-users-cv-resume-flatart-icons-outline-flatarticons.png"/>
                </span>
                <span>Users</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span>
                <img src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/ffffff/external-users-seo-flatart-icons-solid-flatarticons.png"/>
                </span>
                <span>Host Users</span>
              </Link>
            </li>
            <li>
              <Link to="/category" >
                <span>
                <img src="https://img.icons8.com/ios-glyphs/30/ffffff/list--v1.png"/>
                </span>
                <span>Cateogory</span>
              </Link>
            </li>
            {/* <li>
              <Link to="#">
                <span>
                <img src="https://img.icons8.com/ios/50/ffffff/create.png"/>
                </span>
                <span>Create Category</span>
              </Link>
            </li> */}
            <li>
              <Link to="#">
                <span>
                <img src="https://img.icons8.com/ios/50/ffffff/wallet-app--v1.png"/>
                </span>
                <span>Wallet</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span>
                <img src="https://img.icons8.com/ios-filled/50/ffffff/online-support.png"/>
                </span>
                <span>Faq</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span>
                <img src="https://img.icons8.com/wired/64/ffffff/apple-settings.png"/>
                </span>
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <header>
          <div>
            <h1>Dashboard</h1>
          </div>
          <div className="search-wraper">
            <input type="search" placeholder="search here.."/>
            <span>
              <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/ffffff/external-search-interface-kiranshastry-solid-kiranshastry.png" />
            </span>
          </div>

          <div className="right-nav">
            <div className="notification">
              <span>
                <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/ffffff/external-notification-interface-kiranshastry-solid-kiranshastry.png" />
              </span>
            </div>

            <div className="user-wrapper">
              <img src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/ffffff/external-User-essential-collection-bearicons-glyph-bearicons.png" />
              <h4>Username</h4>
            </div>
          </div>
        </header>

        <div className="content">
           {
             props.children
           }
        </div>
      </div>
    </>
  );
}

export default AdminNavigation;
