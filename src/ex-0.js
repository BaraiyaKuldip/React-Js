import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));


class ScoreCard extends React.Component {
  constructor(props) {
    super(props);
    this.BatsmanName = props.BatsmanName;

    this.state = {
      DotBall: 0,
      One: 0,
      Two: 0,
      Three: 0,
      Four: 0,
      Six: 0,
      Runs: 6,
      Balls: 0,
      StrikeRate: 0,
      All : []
    };
  }
  
  UpadateScoreCard = (Updated) => {
    return (<>
      <td>
        <div className="text-center">
          <button className="btn btn-dark">Runs</button>
        </div>
      </td>
      <td>
        <div className="text-center">
          <button className="btn btn-dark">{Updated.Balls}</button>
        </div>
      </td>
      <td>
        <div className="text-center">
          <button className="btn btn-dark">{Updated.StrikeRate}</button>
        </div>
      </td>
      </>);
  }


  UpadateDotBall=()=>{
    this.setState({
      DotBall:this.state.DotBall + 1
    });
  }

  UpadateOne=()=>{
    this.setState({
      One:this.state.One + 1
    });
  }

UpadateTwo=()=>{
  this.setState({
    Two:this.state.Two + 1
  });
}

UpadateThree=()=>{
  this.setState({
    Three:this.state.Three + 1
  });
}

UpadateFour=()=> {
  this.setState({
    Four:this.state.Four + 1
  });
}

UpadateSix=()=>{
  this.setState({
    Six : this.state.Six + 1
  });
}

UpadateForDotBall=(event)=> {
  event.preventDefault();
  var Updated = { 
      DotBall: this.state.DotBall,
      One: this.state.One,
      Two: this.state.Two,
      Three: this.state.Three,
      Four: this.state.Four,
      Six: this.state.Six,
      Runs: parseInt(this.state.Runs),
      Balls: parseInt(this.state.Balls + 1),
      StrikeRate: parseFloat(((this.state.Runs / this.state.Balls) * 100) )
  }
  
  this.setState({
  All:[...this.state.All,Updated],
  DotBall: this.state.DotBall,
  One: this.state.One,
  Two: this.state.Two,
  Three: this.state.Three,
  Four: this.state.Four,
  Six: this.state.Six,
  Runs: this.state.Runs,
  Balls:this.state.Balls ,
  StrikeRate: this.state.StrikeRate,
  });
  console.log(this.state.All);
}
  
  render() {
    return (
      <tbody>
        <tr>
          <th scope="row">
            <div className="text-start">{this.BatsmanName}</div>
          </th>
          <td>
            <div className="text-center">
              <button onClick={this.UpadateDotBall && this.UpadateForDotBall} className="btn btn-dark">
                Dot Ball<span className="badge ms-2 text-bg-success">{this.state.DotBall}</span>
              </button>
            </div>
          </td>
          <td>
            <div className="text-center">
              <button onClick={this.UpadateOne} className="btn btn-dark">
                One<span className="badge ms-2 text-bg-success">{this.state.One}</span>
              </button>
            </div>
          </td>
          <td>
            <div className="text-center">
              <button onClick={this.UpadateTwo} className="btn btn-dark">
                Two<span className="badge ms-2 text-bg-success">{this.state.Two}</span>
              </button>
            </div>
          </td>
          <td>
            <div className="text-center">
              <button onClick={this.UpadateThree} className="btn btn-dark">
                Three<span className="badge ms-2 text-bg-success">{this.state.Three}</span>
              </button>
            </div>
          </td>
          <td>
            <div className="text-center">
              <button onClick={this.UpadateFour} className="btn btn-dark">
                Four<span className="badge ms-2 text-bg-success">{this.state.Four}</span>
              </button>
            </div>
          </td>
          <td>
            <div className="text-center">
              <button onClick={this.UpadateSix} className="btn btn-dark">
                Six<span className="badge ms-2 text-bg-success">{this.state.Six}</span>
              </button>
            </div>
          </td>
          {/* <td>
        <div className="text-center">
          <button className="btn btn-dark">Runs</button>
        </div>
      </td>
      <td>
        <div className="text-center">
          <button className="btn btn-dark">Balls</button>
        </div>
      </td>
      <td>
        <div className="text-center">
          <button className="btn btn-dark">StrikeRate</button>
        </div>
      </td> */}

          {this.state.All.map((Updated) => {
                      return this.UpadateScoreCard(Updated);
                    })}


        </tr>
      </tbody>
    );
  }
}

class FinalPage extends React.Component {
  render() {
    return (
      <>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">
                  <div className="text-start">Batsman Name</div>
                </th>
                <th scope="col">
                  <div className="text-center">0</div>
                </th>
                <th scope="col">
                  <div className="text-center">1</div>
                </th>
                <th scope="col">
                  <div className="text-center">2</div>
                </th>
                <th scope="col">
                  <div className="text-center">3</div>
                </th>
                <th scope="col">
                  <div className="text-center">4</div>
                </th>
                <th scope="col">
                  <div className="text-center">6</div>
                </th>
                <th scope="col">
                  <div className="text-center">Runs</div>
                </th>
                <th scope="col">
                  <div className="text-center">Balls</div>
                </th>
                <th scope="col">
                  <div className="text-center">Strike Rate</div>
                </th>
              </tr>
            </thead>
            <ScoreCard BatsmanName="Virat Kohli" />
            <ScoreCard BatsmanName="Rohit Sharma" />
            
          </table>
        </div>
      </>
    );
  }
}
root.render(<FinalPage />);
