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
      Runs: 0,
      Balls: 0,
      StrikeRate: 0,
    };
  }

  UpadateDotBall=()=>{
    this.setState({
      DotBall:this.state.DotBall + 1 ,
      Balls : this.state.Balls + 1 ,
      StrikeRate: parseFloat((this.state.Runs/this.state.Balls)*100)
    });

  }

  UpadateOne=()=>{
    this.setState({
      One:this.state.One + 1,
      Runs:this.state.Runs + 1,
      Balls:this.state.Balls + 1 ,
      StrikeRate: parseFloat((this.state.Runs/this.state.Balls)*100)
    });
  }

UpadateTwo=()=>{
  this.setState({
    Two:this.state.Two + 1 , 
    Runs:this.state.Runs + 2,
    Balls:this.state.Balls + 1 ,
    StrikeRate: parseFloat((this.state.Runs/this.state.Balls)*100)
  });
}

UpadateThree=()=>{
  this.setState({
    Three:this.state.Three + 1 ,
    Runs:this.state.Runs + 3,
    Balls:this.state.Balls + 1 ,
    StrikeRate: parseFloat((this.state.Runs/this.state.Balls)*100)
  });
}

UpadateFour=()=> {
  this.setState({
    Four:this.state.Four + 1 ,
    Runs:this.state.Runs + 4,
    Balls:this.state.Balls + 1 ,
    StrikeRate: parseFloat((this.state.Runs/this.state.Balls)*100)
  });
}

UpadateSix=()=>{
  this.setState({
    Six : this.state.Six + 1 ,
    Runs:this.state.Runs + 6,
    Balls:this.state.Balls + 1 ,
    StrikeRate: parseFloat((this.state.Runs/this.state.Balls)*100)
  });
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
              <button onClick={this.UpadateDotBall} className="btn btn-dark">
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
          <td>
            <div className="text-center">
              <button className="btn btn-dark">{this.state.Runs}</button>
            </div>
          </td>
          <td>
            <div className="text-center">
              <button className="btn btn-dark">{this.state.Balls}</button>
            </div>
          </td>
          <td>
            <div className="text-center">
              <button className="btn btn-dark">{this.state.StrikeRate}</button>
            </div>
          </td>
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
            <ScoreCard BatsmanName="MS Dhoni" />
          </table>
        </div>
      </>
    );
  }
}
root.render(<FinalPage />);
