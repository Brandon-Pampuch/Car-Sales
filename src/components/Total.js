import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.carStore.price}</h4>
      {/* + props.additionalPrice */}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    carStore: state.car


  }
}

export default connect(mapStateToProps, {})(Total);
