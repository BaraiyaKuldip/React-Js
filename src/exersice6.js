import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var output = (
<div className="container">
  <div className="row ">
    <div className="col-12">
      <h2 className="text-center mb-4">Register</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input type="tel" className="form-control" id="mobile" placeholder="Enter mobile number" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" />
        </div>
        <div className='d-flex justify-content-center'>
            <button type="submit" className="btn btn-primary btn-block mt-3">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>

);
root.render(output);
