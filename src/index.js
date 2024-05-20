import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

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

function FoodComponent() {
  return (
    <div className="col-3">
      <div className="card border-0">
        {/* <div className="card-header fw-bold" >
          Veg Pulao
          </div> */}
        <div className="card-body">
          <img
            src="/img/ex9-veg-pulao.jpg"
            className="card-img img-fluid hover-img"
            alt=""
          />
        </div>
        <div className="card-footer mt-1 border-0">
          <div className="d-flex justify-content-between ">
            <div className="fw-bold ">Veg Pulao</div>
            <div className="btn btn-success rounded-3 fw-bold btn-custom-size">4.9 &#9733;</div>
          </div>
          <div className="d-flex justify-content-between">
          <div> 
            Shrijis Garden Restaurant
          </div>
          <div className="fw-semibold">
            ₹ 289
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FinalPageComponent() {
  return (
    <>
      <NavbarComponent />
      <div className="container mt-5">
        <div className="row">
          <FoodComponent />
          <FoodComponent />
          <FoodComponent />
          <FoodComponent />
        </div>
      </div>
    </>
  );
}

root.render(<FinalPageComponent />);
