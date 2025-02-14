import React from 'react';

import {useDispatch} from "react-redux"

import {addFeature} from "../actions"

const AdditionalFeature = props => {

  const dispatch = useDispatch() // I used this because the connect method, although calling the action and setting the payload - was not reaching the reducer

  const adder = e => {
    e.preventDefault();
    dispatch(addFeature(props))
    console.log(addFeature(props))
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={(props) => adder(props)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;


  // export default connect(state =>state,
  //   {addFeature})(AdditionalFeature);