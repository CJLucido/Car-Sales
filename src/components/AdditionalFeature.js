import React from 'react';

import {addFeature} from "../actions"

const AdditionalFeature = props => {

  const adder = e => {
    e.preventDefault();
    addFeature(props)
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
