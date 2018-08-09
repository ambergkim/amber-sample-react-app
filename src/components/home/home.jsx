
import React, { Component } from 'react';
import './home.css';

import Sidebar from '../sidebar/sidebar.jsx';
import Sales from '../sales/sales.jsx';
import Chart from '../chart/chart.jsx';

import logo from '../../images/logo.png';


class Home extends Component {
  render() {
    return (
      <main>
        <header>
          <img src={logo} alt="staclkine logo"/>
        </header>
        <div className="product-info">
          <Sidebar />
          
            <Chart />
            <Sales />

          
        </div>
      </main>
    );
  }
}

export default Home;
