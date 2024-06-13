import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

class VoteForTree extends React.Component 
{

  constructor(props)
  {

    super(props);




  }

  render(){
    return(
      <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-header">
              <p>
                <h5>શું તમે માનો છો કે દરેક વ્યક્તિ એ એક વૃક્ષ ઉછેરવું જોઈએ ?</h5>
              </p>
              </div>
              <div className="card-body">
              <img src="img/save-tree.jpg" className='img-fluid' alt="Save Tree IMG" />
              </div>
              <div className="card-footer">
                <span className='d-flex justify-content-between'>
                  <button type='button' className='btn'>હા 👍</button>
                  <button type='button' className='btn'>ના 👎</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }

}

root.render(<VoteForTree/>);