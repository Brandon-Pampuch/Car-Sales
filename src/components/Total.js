import React from 'react';
import { connect } from 'react-redux';



const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.carStore.price + props.addPrice}</h4>

    </div>
  );
};

const mapStateToProps = (state) => {

  return {
    carStore: state.car,
    addPrice: state.additionalPrice

  }
}

export default connect(mapStateToProps, {})(Total);
