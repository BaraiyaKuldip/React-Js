import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

class NewsCard extends React.Component {
  constructor(props){
    super(props);

    this.ItemPhoto = props.ItemPhoto;
    this.ItemName = props.ItemName ;
    this.ItemRating = props.ItemRating;
    this.RestaurantName = props.RestaurantName;
    this.ItemPrice = props.ItemPrice;

  }
  render(){
    return(<div className="col-3 mt-5">
    <div className="card border-0">
      <div className="card-body ">
        <img
          src={this.ItemPhoto}
          className="card-img img-fluid hover-img"
          alt=""
        />
      </div>
      <div className="card-footer mt-1 border-0">
        <div className="d-flex justify-content-between ">
          <div className="fw-bold ">{this.ItemName}</div>
          <div className="btn btn-success rounded-3 fw-bold btn-custom-size">{this.ItemRating} &#9733;</div>
        </div>
        <div className="d-flex justify-content-between">
        <div> 
          {this.RestaurantName}
        </div>
        <div className="fw-semibold">
          ₹ {this.ItemPrice}
        </div>
        </div>
      </div>
    </div>
  </div>);
  }
}
function NavbarComponent() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Breaking News</a></li>
            <li><a className="dropdown-item" href="#">India</a></li>
            <li><a className="dropdown-item" href="#">Gujrat</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


      
    </>
  );
}

function FinalPageComponent() {
  return (
    <div className="div">
      <NavbarComponent />
      <div className="container">
        <div className="row">

        </div>
      </div>
    </div>
  );
}

root.render(<FinalPageComponent/>);
