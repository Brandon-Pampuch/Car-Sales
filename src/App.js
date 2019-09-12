import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';

import { deleteItem } from './actions/index'

const App = (props) => {

  const removeFeature = item => {
    props.deleteItem(item)
  };

  const buyItem = item => {
    // dispatched in additional features component
  };

  return (

    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total />
      </div>
    </div>

  );
};

const mapStateToProps = (state) => {

  return {


  }
}

export default connect(mapStateToProps, { deleteItem })(App);
