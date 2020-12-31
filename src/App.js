import React from "react";
import "./App.css";
import Plot from "react-plotly.js";



 class Graph1 extends React.Component {
  state = {
    line1: {
      x: [0],
      y: [1] ,
      name: 'Line 1'
    },
    line2: {
      x: [0],
      y: [1] ,
      name: 'Line 2'
    }, 
    layout: { 
      datarevision: 0,
    },
    revision: 0,
  }
  componentDidMount() {
    setInterval(this.increaseGraphic, 1000);
  } 
  componentWillUnmount() {
    this._isMounted = false;
  }
  rand = () => parseInt(Math.random() * 10 + this.state.revision, 10);
  increaseGraphic = () => {
    const { line1, line2, layout } = this.state;
    line1.x.push(line1.x.length + 1);
    line1.y.push(this.rand());
   
    line2.x.push(line2.x.length + 1);
    line2.y.push(this.rand());
  
    this.setState({ revision: this.state.revision + 1 });
    layout.datarevision = this.state.revision + 1;
  }
  render() {  
    return (<div>
      <Plot 
        data={[
          this.state.line1,
          this.state.line2,
        ]}
        layout={this.state.layout}
        revision={this.state.revision}
        graphDiv="graph"
      />
    </div>);
  }
}

function App() {
  return (
   <center>
   <div className="App">
      <h1>The weather go brrrrr</h1>

      <img
        alt="super funnny weather meme"
        src="https://i.pinimg.com/564x/7c/2b/f8/7c2bf88c0bfb259fded8a1e771cdbe68.jpg"
        height="auto"
        width="25%"
      />
      <Graph1 />
    </div>
    </center>
  );
}

export default App;
