import React from 'react';

import {useDispatch} from "react-redux"

import {removeFeature} from "../actions"

const AddedFeature = props => {

  const dispatch = useDispatch()

  const remover = e => {
    e.preventDefault();
    dispatch(removeFeature(props))
    console.log(removeFeature(props))
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={(props)=> removeFeature(props)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
