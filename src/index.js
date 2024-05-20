import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
const root = ReactDOM.createRoot(document.getElementById("root"));


function NavbarComponent () {
  return(
<>
    <nav>
  <div className="navbar">
    <div>
      <img className="logo-img" src="/img/ex9-site-logo.png" alt="Logo" width="50px" />
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
      <input type="search" name="search" id="search" placeholder="Search" />
    </div>
  </div>
</nav>

<div class="menuspace"></div>
</>
);
}

function FoodComponent () {

return(

      <div className="col-3">
        <div className="card">
          <div className="card-header">
          Veg Pulao
          </div>
          <div className="card-body">
          <img src="/img/" alt="" />
          </div>
          <div className="card-footer">

          </div>
        </div>
      </div>

);
}

function FinalPageComponent () {
  return(
<>

  <NavbarComponent />
  <div className="container mt-5">
    <div className="row">

  <FoodComponent />

    </div>
</div>
</>
  );
}

root.render(<FinalPageComponent/>);
