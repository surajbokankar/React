import React, { Component } from 'react';
import BarChart from 'react-d3-components/lib/BarChart';
import Button from '@material-ui/core/Button';
import StarRatings from 'react-star-ratings';
import Card from '@material-ui/core/Card';
import axios from "axios";
import Chart from './BarChart';



class Details extends Component {

  constructor(props){
    super(props);
    this.state = {
      dataset: [15, 8, 42, 4, 0],
    };
  }


  state = {
    label: 'Monthly Dates',
    values: []
  };


  onBarClick=(position)=>{
    console.log('bar click',position);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    let self=this;
    axios({
      method: 'GET',
      url: 'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=SPY&apikey=2QEL3WC4KITIBISR'
    })
      .then(function(response) {
        const values = [];
        let i=1;
        if (response && response.data && response.data['Monthly Time Series']) {
          Object.keys(response.data['Monthly Time Series']).forEach((keys) => {
            if (keys) {
              const pointValue = {
                x: String(keys),
                y: Number(i+=1)  //response.data['Monthly Time Series'][keys]['1. open']
              }
              values.push(pointValue);
            }
          });
          self.setState({values});
          console.log('values=',values);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  getGraphData() {
    const { label, values } = this.state;
    console.log(this.state)
    return [{ label, values }]
  }

  renderGraph() {

    const axesProps = {
      legend: {
          xAxis: 'Label bottom axis',
          yAxis: 'Label left axis',
      },
      padding: {
          xAxis: 20,
          yAxis: 20,
      },
      ticksCount: 6,
      tickFormat: {
          xAxis: function(value) {
              return `${value} - formated`;
          },
      },
  };
  
  const colorScale = {
      min: '#B2EBF2',
      max: '#CCC',
  };
    if (this.state.values && this.state.values.length) {
      var width = window.innerWidth;
    // height = window.innerHeight;
      return (
        <BarChart
          data={this.getGraphData()}
          width={width}
          axesProps={axesProps}
          height={400}
          paddingMultiplier={0.90}
          margin={{top: 10, bottom: 50, left: 50, right: 10}} 
                  
        />
 
        

      );
    }
    return '';
  }

  render() {
    return (
      <div>
        <Chart
          dataset={this.getGraphData()}
          onClick={this.onBarClick}
        />
        {/* {this.renderGraph()} */}
      </div>
    )
  }
}


  export default Details;
