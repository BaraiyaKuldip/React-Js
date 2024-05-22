import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

class FoodComponent extends React.Component {
  constructor(props){
    super(props);

    this.ItemPhoto = props.ItemPhoto;
    this.ItemName = props.ItemName ;
    this.ItemRating = props.ItemRating;
    this.RestaurantName = props.RestaurantName;
    this.ItemPrice = props.ItemPrice;

  }
  render(){
    return(<div className="col-3">
    <div className="card border-0">
      <div className="card-body">
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
      <nav>
        <div className="navbar">
          <div>
            <img
              className="logo-img"
              src="/img/ex9-site-logo.png"
              alt="Logo"
              width="50px"
            />
          </div>
          <div className="navbar-items">
            <h1>Taste Lab</h1>
          </div>
          <div className="navbar-items">
            <a href="#">Home</a>
          </div>
          <div className="navbar-items">
            <a href="#">Recipes</a>
          </div>
          <div className="navbar-items">
            <a href="#">About</a>
          </div>
          <div className="navbar-items">
            <a href="#">Contact</a>
          </div>
          <div className="navbar-items">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
            />
          </div>
        </div>
      </nav>

      <div class="menuspace"></div>
    </>
  );
}

function FinalPageComponent() {
  return (
    <>
      <NavbarComponent />
      <div className="container mt-5">
        <div className="row">
          <FoodComponent ItemPhoto="/img/ex9-veg-pulao.jpg" ItemName="Veg Pulao" ItemRating="4.9" RestaurantName="Shrijis Garden Restaurant" ItemPrice="289" />
          <FoodComponent ItemPhoto="/img/ex9-dosa.jpg" ItemName="Masala Dosa" ItemRating="4.7" RestaurantName="New Malhar Dhosa" ItemPrice="80" />
          <FoodComponent ItemPhoto="/img/ex9-shahi-paneer.jpg" ItemName="Shahi Paneer" ItemRating="4.8" RestaurantName="Saffron" ItemPrice="325" />
          
        </div>
      </div>
    </>
  );
}

root.render(<FinalPageComponent />);
