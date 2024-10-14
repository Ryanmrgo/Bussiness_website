import React from "react";
import Reena from "../Images/reena.jpg";
import Gadgets from "../Images/gadgets.jpg";
import HomeAppliance from "../Images/homeappliance.jpg";
import Left from "../Images/left.jpg";
import Center from "../Images/center.jpg";
import Laptop from "../Images/laptop.png";
import Navbar from "./Navbar";

export default function Content() {
  return (
    <>
      <Navbar />

      <div id="myCarousel" className="carousel slide " data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className=""
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="active"
            aria-current="true"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active carousel-item-start">
            <img src={Center} className="image_carousel" alt="..."></img>

            <div className="container">
              <div className="carousel-caption ">
                <h1>Point at Glance.</h1>
                <p>
                  Want to know more about us, make sure to download our
                  brochure.
                </p>
                <p data-aos="zoom-in">
                  <a
                    className="btn btn-lg btn-primary"
                    href="https://drive.google.com/file/d/1plt4Qw31ew3B9kTHor_6C7-zPkcCM0wd/view?usp=sharing"
                  >
                    Download
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="carousel-item carousel-item-next carousel-item-start">
            <img src={Left} className="image_carousel" alt="..."></img>

            <div className="container">
              <div className="carousel-caption  text-start">
                <h1>Queries You Have</h1>
                <p>
                  We are ready to help you at any time, feel free to contact us.
                  <br />
                  reenasingh5751@gmail.com,
                  <br />
                  call now - 9123292533.
                </p>
                <p data-aos="zoom-in">
                  <a
                    className="btn btn-lg btn-primary"
                    href="https://mail.google.com"
                  >
                    E-mail Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev text-light"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next text-light"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container-fluid  alert-light py-4">
        <div className="what_we_do_heading  container text-center py-2 ">
          <h2>What We Do</h2>
        </div>
        <div className="container-fluid ">
          <div className="container my-2">
            <div className="row row-cols-1 row-cols-md-3 g-4 py-3">
              <div className="col" data-aos="fade-down">
                <div className="card box_shadow ">
                  <img
                    src={Gadgets}
                    className="card-img-top card_image "
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">All Electronic Gadgets</h5>
                    <p className="card-text">
                      Mobile Phones, Headphones, Digital Camera, DVD Players,
                      etc.
                      <br />
                      We repair every electronic gadgets.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col" data-aos="fade-down">
                <div className="card box_shadow">
                  <img
                    src={HomeAppliance}
                    className="card-img-top card_image "
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">All Home Appliances</h5>
                    <p className="card-text">
                      Fridge, Washing Machine, Micro-Oven, Television, Irons,
                      etc.
                      <br />
                      We repair all kind of home appliances.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="fade-down">
                <div className="card box_shadow">
                  <img
                    src={Laptop}
                    className="card-img-top card_image "
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Laptops / Computers</h5>
                    <p className="card-text">
                      Laptop, Computers, Tablets, Raspberry, etc. <br />
                      We repair all kind of Computers laptops and other devices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid alert-primary ">
        <div className="container  text-center py-4" id="About">
          <div className="Proprietor  container  py-2 ">
            <h2>Proprietor</h2>
          </div>
          <div className="container py-4">
            <img
              src={Reena}
              className="nothing"
              alt="...."
              style={{ borderRadius: 500, height: 200, width: 200 }}
              data-aos="flip-left"
            />
          </div>

          <div className="reena container-fluid " data-aos="zoom-in">
            REENA SINGH
          </div>
          <div className="container about_box_details py-2">
          Reena singh is the main pillar of MS Anshu group. With the loads of courage and hard work she built this company.
           Mrs. Reena singh is an individual who owns the business. She is an experience holder of 10-12 years in business. 
           The publications and presentations are very much higher now a days. Reena singh is qualified till graduation in 
           educational field. Instead of having low qualification she built this empire with very much hard work and passion. 
           She made this company a most popular and famous in the time of leading industries. 
          M S Anshu group gained many awards and many profitable dealerships.
          </div>
        </div>
      </div>
    </>
  );
}
