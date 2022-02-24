import React from "react";

class Timestamp extends React.Component {
  state={
    curDT : new Date().toLocaleString(),
  }
  render(){
    return (
      <div className="App">
        <p>Your Current Date And Time is {this.state.curDT}</p>
      </div>
    );
  }
}
 
export default Timestamp;