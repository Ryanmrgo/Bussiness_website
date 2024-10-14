import React from "react";
import Navbar from "./Navbar";

export default function Disclaimer() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="container">
          <div className="alert disclaimer_details " role="alert">
            <h2 className="alert-heading dark text-success py-1">DISCLAIMER</h2>
            <p className="lead">
              If you require any more information or have any questions about
              our site's disclaimer, please feel free to contact us by email at
              reenasingh5751@gmail.com. All the information on this website is
              published in good faith and for general information purpose only.
              From our website, you can visit other websites by following
              hyperlinks to such external sites. While we strive to provide only
              quality links to useful and ethical websites, we have no control
              over the content and nature of these sites. These links to other
              websites do not imply a recommendation for all the content found
              on these sites. Site owners and content may change without notice
              and may occur before we have the opportunity to remove a link
              which may have gone 'bad'. Please be also aware that when you
              leave our website, other sites may have different privacy policies
              and terms which are beyond our control. Please be sure to check
              the Privacy Policies of these sites as well as their "Terms of
              Service" before engaging in any business or uploading any
              information.
              <br />
              <br />
              <br />
              <h3 className="py-1 text-success">Consent</h3>
              By using our website, you hereby consent to our disclaimer and
              agree to its terms.
              <br />
              <br />
              <br />
              <h3 className="py-1 text-success">Update</h3>
              Should we update, amend or make any changes to this document,
              those changes will be prominently posted here.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
