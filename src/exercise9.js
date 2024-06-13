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
      <nav>
        <div className="navbar sticky-top">
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
    <div className="div">
      <NavbarComponent />
      <div className="container">
        <div className="row">
          <FoodComponent ItemPhoto="/img/ex9-veg-pulao.jpg" ItemName="Veg Pulao" ItemRating="4.9" RestaurantName="Shrijis Garden Restaurant" ItemPrice="289" />
          <FoodComponent ItemPhoto="/img/ex9-dosa.jpg" ItemName="Masala Dosa" ItemRating="4.7" RestaurantName="New Malhar Dhosa" ItemPrice="80" />
          <FoodComponent ItemPhoto="/img/ex9-shahi-paneer.jpg" ItemName="Shahi Paneer" ItemRating="4.8" RestaurantName="Saffron" ItemPrice="325" />
          <FoodComponent ItemPhoto="/img/ex9-pizza.jpg" ItemName="Pizza" ItemRating="4.3" RestaurantName="La Pinoz Pizza" ItemPrice="249" />
          <FoodComponent ItemPhoto="/img/ex9-mango-ice-cream.jpg" ItemName="Mangp Ice Cream" ItemRating="4.5" RestaurantName="Vadilal Hangout" ItemPrice="99" />
          <FoodComponent ItemPhoto="/img/ex9-manchow-soup.jpg" ItemName="Manchow Soup" ItemRating="4.6" RestaurantName="Chinese Point" ItemPrice="110" />
          <FoodComponent ItemPhoto="/img/ex9-veg-burger.jpg" ItemName="Veg Burger" ItemRating="4.1" RestaurantName="Domino's Pizza" ItemPrice="85" />
          <FoodComponent ItemPhoto="/img/ex9-dal-makhani.jpg" ItemName="Dal Makhani" ItemRating="4.4" RestaurantName="Domino's Pizza" ItemPrice="165" />
          <FoodComponent ItemPhoto="/img/ex9-cake-without-eggs.jpg" ItemName="Cake Without Eggs" ItemRating="4.7" RestaurantName="Shreeji Cake Shop" ItemPrice="450" />
          <FoodComponent ItemPhoto="/img/ex9-chhole-masala.jpg" ItemName="Chole Masala" ItemRating="4.0" RestaurantName="Honest Waghawadi" ItemPrice="210" />
          <FoodComponent ItemPhoto="/img/ex9-sandwich.jpg" ItemName="Veg Sandwich" ItemRating="4.7" RestaurantName="Tea Post" ItemPrice="79" />
          <FoodComponent ItemPhoto="/img/ex9-pasta.jpg" ItemName="Veg Cheese Red Penne Pasta" ItemRating="3.8" RestaurantName="The Cafe Bistro" ItemPrice="139" />

        </div>
      </div>
    </div>
  );
}
var output = (<FinalPageComponent/>);
root.render(output);
