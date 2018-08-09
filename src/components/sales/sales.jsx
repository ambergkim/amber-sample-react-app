import React, { Component } from 'react';
import {connect} from 'react-redux';
import './sales.css';

import {

} from '../../actions/shark-actions.js';

class Sales extends Component {
  constructor(props) {
    super(props);

    this.renderSales = this.renderSales.bind(this);
  }

  transformDate(str) {
    let strArr = str.split('-')
    let year = strArr.shift();
    strArr.push(year);
    strArr[2] = strArr[2].slice(-2);
    return strArr.join('-');
  }

  transformMoney(str) {
    let integer = parseInt(str);
    return '$' + integer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  renderSales() {
    let sales = this.props.currentProduct.sales;

    if (sales) {
      let rows = sales.map((sale, i) => {

        let weekEnding = this.transformDate(sale.weekEnding);
        let retailSales = this.transformMoney(sale.retailSales);
        let wholesaleSales = this.transformMoney(sale.wholesaleSales);
        let retailerMargin = this.transformMoney(sale.retailerMargin);

        return <tr key={i}>
          <td>{weekEnding}</td>
          <td>{retailSales}</td>
          <td>{wholesaleSales}</td>
          <td>{sale.unitsSold}</td>
          <td>{retailerMargin}</td>
        </tr>
      });

      return rows;
    }
  }

  
  render() {
    return <React.Fragment>
        <table className="sales-table">
          <thead>
            <tr>
              <td>Week Ending</td>
              <td>Retail Sales</td>
              <td>Wholesale Sales</td>
              <td>Units Sold</td>
              <td>Retailer Margin</td>
            </tr>
          </thead>
          <tbody>
            {this.renderSales()}
          </tbody>
        </table>
      </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sales);