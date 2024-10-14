import React from "react";
import logo from "../Images/logo.jpg";
import NavbarMobile from "./NavbarMobile";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="fixed-top">
        <nav class="navbar navbar-dark" id="main_navbar">
          <div className="container" id="main_navbar_left">
            <div className="container" id="text_logo">
              <img src={logo} alt="logo"></img>
              <span className="text_logo">M/S ANSHU GROUP </span> <br />
              <p className="logo_statement">
                We promise to provide you best service
              </p>
            </div>
          </div>

          <div className="container" id="navbar_pages">
            <ul className="container" id="nav_ul_items">
              <li className="navbar_pages">
                <Link to="/">Home </Link>
              </li>

              <li className="navbar_pages">
                <Link to="/about">About </Link>
              </li>

              <li className="navbar_pages">
                <Link to="/products">Products</Link>
              </li>

              <li className="navbar_pages">
                <Link to="/disclaimer">Disclaimer </Link>
              </li>

              <li className="navbar_pages">
                <Link to="/termsandconditions">Terms </Link>
              </li>

              <li className="navbar_pages">
                <a href="https://forms.gle/mrUqmyuDXoXT72w29">Contact </a>
              </li>
            </ul>

            <div className="container" id="fas_icons">
              <a
                href="https://wa.me/message/YCTUK47J5LPML1"
                className="whatsapp "
              >
                <i class="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://instagram.com/ms_anshu_group_?utm_medium=copy_link"
                className="instagram"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/M-S-ANSHU-GROUP-104218582195360/" className="facebook ">
                <i class="fab fa-facebook"></i>
              </a>
            </div>
            <NavbarMobile />
          </div>
        </nav>
      </div>
    </div>
  );
}
