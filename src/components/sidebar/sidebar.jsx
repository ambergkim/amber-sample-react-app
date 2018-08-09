import React, { Component } from 'react';
import { connect } from 'react-redux';
import './sidebar.css';

import {

} from '../../actions/shark-actions.js';

import product from '../../images/product.png';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.renderTags = this.renderTags.bind(this);
  }

  renderTags() {
    let tags = this.props.currentProduct.tags;
    console.log('tags', tags);

    if (tags) {
      let liTags = tags.map((tag, i) => {
        return (<li key={i}>{tag}</li>)
      });

      return liTags;
    }
  }


  render() {
    return <React.Fragment>
      <div className="sidebar">
        <div className="product-summary">
            <img src={this.props.currentProduct.image} alt="product" />
            <h1>{this.props.currentProduct.title}</h1>
            <p>{this.props.currentProduct.subtitle}</p>
            <ul className="product-tags">
              {this.renderTags()}
            </ul>
          </div>
          <nav>
            <a href="#"><i className="fas fa-home"></i>Overview</a>
            <a href="#"><i className="fas fa-chart-bar selected"></i>Sales</a>
        </nav>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);