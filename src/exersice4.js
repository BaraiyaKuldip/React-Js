import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var output = (
    <div className="forgot-password-form">
    <h2>Change Password</h2>
    <form action="#" method="post">
        <input type="password" name="oldpassword" className="input-field" placeholder="Enter your old password" required />
        <input type="password" name="newpassword" className="input-field" placeholder="Enter your new password" required />
        <input type="password" name="confirmnewpassword" className="input-field" placeholder="confirm new password" required />
        <button type="submit" className="btn-submit">Change Password</button>
    </form>
</div>
);
root.render(output);
