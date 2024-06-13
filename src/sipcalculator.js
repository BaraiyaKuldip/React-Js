import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
class SipCalculater extends React.Component
{
    constructor(props){
        super(props);
    }

    render(){
        return(<>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                                SIP Calculator
                        </div>
                        <div className="card-body">
                            <input type="number" className='form-control' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>);
    }
}
root.render(<SipCalculater/>);
