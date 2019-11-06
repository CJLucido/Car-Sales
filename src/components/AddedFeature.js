import React from 'react';

import {useDispatch} from "react-redux"

import {removeFeature} from "../actions"

const AddedFeature = props => {

  const dispatch = useDispatch() // I used this because the connect method, although calling the action and setting the payload - was not reaching the reducer

  const remover = e => {
    e.preventDefault();
    dispatch(removeFeature(props))
    console.log(removeFeature(props))
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={(props)=> remover(props)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
