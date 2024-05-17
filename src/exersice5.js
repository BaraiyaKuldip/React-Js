import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var output = (
    <div className="forgot-password-form">
    <h2>Forgot Password</h2>
    <form action="#" method="post">
        <input type="email" name="email" className="input-field" placeholder="Enter your email" required />
        <button type="submit" className="btn-submit">Reset Password</button>
    </form>
</div>
);
root.render(output);
