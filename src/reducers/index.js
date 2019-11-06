
import {
    ADD_FEATURE,
    REMOVE_FEATURE 
        } from "../actions"

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  }

///that the


  export default function appReducer(state = initialState, action) {
      switch (action.type){
        case REMOVE_FEATURE:
          let newFeatures = state.car.features.filter(item => {
            return item.name !== action.payload.feature
          })
          let removedFeature = state.car.additionalFeatures.filter(item => {
            return item.name === action.payload.additionalFeatures
          })
              return {
                ...state,
                car:{
                price: state.price - action.payload.price,
                features: newFeatures},
                additionalFeatures: [...state.additionalFeatures, removedFeature]
              }
            
        case ADD_FEATURE:
          let minusFeatures = state.car.additionalFeatures.filter(item => {
            return item.name !== action.payload.additionalFeatures
          })
          let addedFeature = state.car.features.filter(item => {
            return item.name === action.payload.feature
          })
              return {
                ...state,
                car:{
                price: state.price + action.payload.price,
                features: [...state.features, addedFeature]
              },
                additionalFeatures: minusFeatures
              }
        
        default:
                return state
            
      }
 
}

//add additional feature to state.features
//delete additional feature by id from state.additionalFeatures
//add incoming state.additionalFeature.price to state.car.price
//what should be the payload? on the reducer I want certain aspects to be changing (the price, the features, and the additionalFeatures)



//rmv
//do the opposite of above
//subtract reduced additionalFeatures prices from state.car.price