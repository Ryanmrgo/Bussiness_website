import React from "react";
import Navbar from "./Navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="container">
          <div className="alert  about_details " role="alert">
            <h2 className="alert-heading dark text-success py-1">
              About Company
            </h2>
            <p className="lead">
              M S Anshu group is a company that deals with electronic items and
              services of appliances too. It includes all electronic gadgets,
              home appliances, laptops, computers etc. This company was
              established in 1950. The proprietorship of this company is handled
              by Mrs. Reena Singh. She is the individual owner of this company.
              Total amount of employees working here is 10. The company provides
              you the best services. This company have dealership of around 50
              lakhs. M S Anshu group believes in hard work and loyalty. To have
              the best services of M S Anshu group we are here to help you. You
              can contact us very easily. E-mail - reenasingh5751@ gmail.com,
              Phone no - 9123292533.
            </p>
            <hr className="container" />
          </div>

          <div className="container-fluid py-3  alert-success">
            <h3 className="alert-heading fact mx-4">Fact Sheet</h3>

            <ol className="list-group py-2 ">
              <li className=" list-group-item  align-items-start ">
                <div className="ms-2 me-auto ">
                  <div className="fw-bold ">Nature of Business</div>
                  Wholesale Distributor
                </div>
              </li>

              <li className="list-group-item  justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Total Number of Employees</div>
                  Upto 10 people
                </div>
              </li>

              <li className="list-group-item  justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Year of Establishment</div>
                  1950
                </div>
              </li>

              <li className="list-group-item  justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Legal Status of Film</div>
                  Individual - Proprietor
                </div>
              </li>

              <li className="list-group-item  justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Annual Turnover.</div>
                  Upto Rs. 50 Lakh
                </div>
              </li>

              <li className="list-group-item justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">GST Number.</div>
                  20KKQPS6375J1ZB
                </div>
              </li>
            </ol>
          </div>

          <div className="alert  about_address" role="alert">
            <h4 className="alert-heading dark text-success">
              Business Address !
            </h4>
            <p className="lead">
              Plot number - 19 Baridih Basti
              <br />
              Near by Bajrang Bali Mandir Patna Line Jamshedpur - 831017
              <br />
              Jharkhand, India.
            </p>

            <p className="text-success lead">
              Map Location -{" "}
              <a href="https://goo.gl/maps/SK6CA8i2hD42u57C9">Go To Map</a>
            </p>
            <hr className=" container" />
          </div>
        </div>
      </div>
    </div>
  );
}
