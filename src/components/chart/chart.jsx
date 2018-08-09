import React, { Component } from 'react';
import {connect} from 'react-redux';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import './chart.css';

import {

} from '../../actions/shark-actions.js';

class Charts extends Component {
  constructor(props) {
    super(props);

    this.getChart = this.getChart.bind(this);
  }

  getChart() {
    let salesArr = this.props.currentProduct.sales;
    let retailSales;
    let wholeSale;
    let dates;

    console.log('salesArr', salesArr);

    if (salesArr) {
      retailSales = salesArr.map(stat => {
        return stat.retailSales;
      })

      console.log('retailSales', retailSales);

      wholeSale = salesArr.map(stat => {
        return stat.wholesaleSales;
      });

      let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

      dates = salesArr.map(stat => {
        let date = stat.weekEnding;
        let dateArr = date.split('-');
        let month = parseInt(dateArr[1]);
        return months[month - 1];
      });
    }

    const options = {
      title: {
        text: 'Retail Sales'
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      xAxis: {
        categories: dates
      },
      series: [{
        name: 'Retail Sales',
        type: 'line',
        data: retailSales
        },
        {
          name: 'Wholesale Sales',
          type: 'line',
          data: wholeSale
        }
      ]
    }

    return <HighchartsReact highcharts={Highcharts} options={options}/>
  }
  
  render() {
    return <section className="chart">
        {this.getChart()}
      </section>
  }
}

const mapStateToProps = state => {
  return {
    currentProduct: state.data.currentProduct,
  }
};

const mapDispatchToProps = (dispatch, getState) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Charts);