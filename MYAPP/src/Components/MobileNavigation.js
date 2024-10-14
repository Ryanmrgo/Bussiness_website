import React from 'react';
import { Link } from 'react-router-dom';

export default function MobileNavigation(props) {
  return <>
<div className="container-fluid Mobile_navbar_background " >
<div className="container" id="Mobile_navbar_pages" >
          <ul className="container" id="Mobile_nav_ul_items" >
            <li className="navbar_pages" onClick={() => props.ismobile && props.closeMobileMenu()}>
              <a href="/"> <i class="fas fa-home my-2 me-2"></i>Home </a>
            </li>

            <li className="navbar_pages" >
              <Link to="/about" onClick={() => props.ismobile && props.closeMobileMenu()}><i class="fas fa-address-card my-2 me-2"></i>About </Link>
            </li>

            <li className="navbar_pages" onClick={() => props.ismobile && props.closeMobileMenu()}>
              <Link to="/products"><i class="fas fa-tasks my-2 me-2"></i>Products </Link>
            </li>

            <li className="navbar_pages" onClick={() => props.ismobile && props.closeMobileMenu()}>
              <Link to="/disclaimer"><i class="fas fa-sticky-note my-2 me-2"></i>Disclaimer </Link>
            </li>

            <li className="navbar_pages" onClick={() => props.ismobile && props.closeMobileMenu()}>
              <Link to="/termsandconditions"><i class="fas fa-file-contract my-2 me-2"></i>Terms </Link>
            </li>

            <li className="navbar_pages">
              <a href="https://forms.gle/mrUqmyuDXoXT72w29"><i class="fas fa-id-card-alt my-2 me-2"></i>Contact</a>
            </li>
            <li></li>
            <li>
            <a href='https://wa.me/message/YCTUK47J5LPML1' className='text-large'> <i class="fab fa-whatsapp text-white">  </i></a>
            <a href='https://instagram.com/ms_anshu_group_?utm_medium=copy_link' className='text-large'> <i class="fab fa-instagram text-white"> </i></a>
            <a href='https://www.facebook.com/M-S-ANSHU-GROUP-104218582195360/' className='text-large'> <i class="fab fa-facebook text-white">  </i></a>
            </li>


          </ul>
         
          </div>
          </div>
  </>;
}
