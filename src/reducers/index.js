
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

///that the features being added or removed are coming from a filter means they are arrays, they need to be changed to objects


  export default function appReducer(state = initialState, action) {
      switch (action.type){
        case REMOVE_FEATURE:
          let newFeatures = state.car.features.filter(item => {
            return item.name !== action.payload.feature
          })
     
          let removedFeature = state.car.features.filter(item => {
            return item.name === action.payload.additionalFeatures
          })
          console.log("this is removedFeatures", removedFeature)
          let removeCost = removedFeature.price
          console.log("this is removedFeatures.price", removedFeature.price)
              return {
                ...state,
                car:{
                price: state.price - removeCost,
                features: newFeatures},
                additionalFeatures: [...state.additionalFeatures].concat(removedFeature) 
              }
            
        case ADD_FEATURE:
          let minusFeatures = state.additionalFeatures.filter(item => {
            return item.name !== action.payload.additionalFeatures
          })
          let addedFeature = state.additionalFeatures.filter(item => {
            return item.name === action.payload.feature
          })
          //[0]
          //.indexOf(0)
          console.log("this is addedFeature", addedFeature)
              return {
                ...state,
                additionalPrice:state.additionalPrice + action.payload.price,
                car:{
                price: state.car.price,// had + state.additionalPrice here but it is not useful
                features: [...state.car.features].concat(addedFeature)
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