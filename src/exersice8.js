import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
const root = ReactDOM.createRoot(document.getElementById("root"));

function NavbarComponent() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light text-bg-info">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            Features
          </a>
          <a className="nav-link" href="#">
            Pricing
          </a>
        </div>
      </div>
    </div>
  </nav>
  )
}

function TourPackageCardComponent(props) {
  return( 
  <div className="col-6 mt-5">
  <div className="card ">
    <div className="card-header ">
      <h3 className="fw-bold">{props.TourName}</h3>
    </div>
    <div className="card-body">
      <img className="img-fluid rounded" src={props.TourPhoto}  alt="tour img"></img>
    </div>
    <div className="card-footer">
    <p> {props.TourDetail} </p>
    </div>
  </div>
</div>
)

}

function FinalComponent () {
 return (
  <div className="container-fluid">
    <div className="row">
     <div className="col-12">
       {/* navbar start */}

  <NavbarComponent />

{/* navbar end */}

{/* tour card start */}

<TourPackageCardComponent TourName='Somnath Pilgrimage' TourPhoto='https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/4004/Somnath,%20Gujarat.jpg' TourDetail='Embark on a spiritual journey to Somnath , one of the most sacred Hindu pilgrimage sites, known for their ancient temples and religious significance '/>

<TourPackageCardComponent TourName='Rann of Kutch Experience' TourPhoto='https://compassndiaries.files.wordpress.com/2022/02/dsc2339-01w.jpeg?w=1200' TourDetail='Witness the surreal beauty of the Rann of Kutch during the white desert festival, featuring folk dances, camel rides, and breathtaking views of the salt marshes'/>

<TourPackageCardComponent TourName='Gir Wildlife Safari' TourPhoto='https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3793/Lion%20walking%20in%20Jungle%20of%20Gir%20National%20Park%20&%20Wildlife.jpg' TourDetail='Embark on an exciting safari adventure in Gir National Park, home to the majestic Asiatic lions, along with opportunities for birdwatching and nature walks'/>

<TourPackageCardComponent TourName='Ahmedabad Heritage' TourPhoto='https://us.images.westend61.de/0001873745pw/jama-mosque-unesco-world-heritage-site-ahmedabad-gujarat-india-asia-RHPLF26630.jpg' TourDetail='Explore the cultural heritage of Ahmedabad with visits to Sabarmati Ashram, Jama Masjid, and the iconic Adalaj Stepwell, showcasing the city rich history '/>
{/* tour card end */}
     </div>
    </div>
  </div>
 
 )
};
root.render(<FinalComponent/>);
