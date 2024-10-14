import React from 'react';
import Navbar from './Navbar';
import SwitchBoard2Switch from '../Images/switchboard2switch.jpeg';
import BrassElectricSwitchgear from '../Images/brasselectricswitchgear.jpeg';
import CopperCables from '../Images/coppercables.jpeg';
import ElectricalSwitch from '../Images/electricalswitch.jpeg';
import ElectricalSwitchBoard from '../Images/electricalswitchboard.jpeg';
import ElectricalSwitches from '../Images/electricalswitches.jpeg';
import IronWire from '../Images/ironwire.jpeg';
import TelecomCable from '../Images/telecomswitchboardcable.jpeg';
import TV from '../Images/tv.jpeg';
import Laptop from '../Images/laptop.jpeg';

export default function Products() {
  return <div>
  <Navbar/>

  <div className="container products">
    <div className="container">
    <div className="container">
    <div className="container text-center"><h1 className='text-success py-3 text-bolder'>Our Products</h1></div>
  <div className="row row-cols-1 row-cols-md-2 g-4 ">
  <div className="col">
    <div className="card box_shadow" data-aos="fade-down">
      <img src={SwitchBoard2Switch} className="card-img-top" height={300}  width={150} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Switch Board 2 Switch</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card box_shadow" data-aos="fade-down">
      <img src={BrassElectricSwitchgear} className="card-img-top" height={300}  width={150} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Brass Electric Switch Gear</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card box_shadow" data-aos="fade-down">
      <img src={CopperCables} className="card-img-top" height={300}  width={150} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Copper Cables</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card box_shadow" data-aos="fade-down">
      <img src={ElectricalSwitch} className="card-img-top" height={300}  width={150}  alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Electrical Switch</h5>
     </div>
    </div>
  </div>
  <div className="col">
    <div className="card box_shadow" data-aos="fade-down">
      <img src={ElectricalSwitchBoard} className="card-img-top" height={300}  width={150} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Electrical Switch Board</h5>
        </div>
    </div>
  </div>


  <div className="col">
    <div className="card box_shadow" data-aos="fade-down">
      <img src={ElectricalSwitches} className="card-img-top" height={300}  width={150} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Electrical Switches</h5>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card box_shadow" data-aos="fade-down">
      <img src={TelecomCable} className="card-img-top" height={300}  width={150} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Telecom Cables</h5>
          </div>
    </div>
  </div>

  <div className="col">
    <div className="card box_shadow" data-aos="fade-down">
      <img src={IronWire} className="card-img-top" height={300}  width={150} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Iron Wire</h5>
          </div>
    </div>
  </div>

  <div className="col">
    <div className="card box_shadow" data-aos="fade-down">
      <img src={TV} className="card-img-top" height={300}  width={150} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Television</h5>
          </div>
    </div>
  </div>

  <div className="col">
    <div className="card box_shadow" data-aos="fade-down">
      <img src={Laptop} className="card-img-top" height={300}  width={150} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Laptops</h5>
          </div>
    </div>
  </div>
</div>
</div>
</div>

</div>

<div className="container">
<div className="alert  about_address" role="alert">
            <h4 className="alert-heading dark text-success">
              Want To Buy Items !
            </h4>
            <p className="lead">
             What's App Us - 9123292533.
              <br />
              Email Us Now - reenasingh5751@gmail.com.
              <br />
              Call Us Now - 9123292533.
            </p>

            <p className="text-success lead">
              OR  Fill Up A Query Form -{" "}
              <a href="https://forms.gle/mrUqmyuDXoXT72w29">Fill Up Now</a>
            </p>
            <hr  />
          </div>
          </div>


  </div>;
}
