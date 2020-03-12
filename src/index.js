
import React, { Component } from 'react';
import axios from 'axios';
import createPlotlyComponent from 'react-plotly.js/factory'


const Plot = createPlotlyComponent(Plotly);

class akeoplotly extends Component {
  constructor(props) {
    super(props);
    this.state= {
      data:  [1,2,3,4],
      date : ['01-01-2020'],
      url : '',
    };  

  }

    render() {
if (this.props.data&&this.props.date) {
  this.setState({
    data : this.props.data,
    date : this.props.date
  })
}
if (this.props.url) {
  axios.get(this.props.url)
  .then(res => {
    this.setState({
      data : res.data.data,
      date : res.data.date
    })

  })
  
}
return (
  <div>
  
    <Plot
    data={[
      {
        x: this.state.date,
        y: this.state.data,
        type: 'scatter',
        name: 'lines+markers',
        marker: {color: 'blue'},
      },
      
    ]}
    layout={
      {
      
        xaxis: {
           
            rangeslider: {}
        },
        yaxis: {
            fixedrange: true
        }
      }
    }
    
   
  />
  </div>
);

    }
}

export default akeoplotly;
