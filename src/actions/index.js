export const ADD_FEATURE = "ADD_FEATURE"
export const REMOVE_FEATURE = "REMOVE_FEATURE"

export const addFeature = (props) => {
    return{
        type: ADD_FEATURE, payload:
        {
        price:props.feature.price,
        feature: props.feature.name,
        additionalFeatures: props.feature.name}
    }
}

export const removeFeature = props => {
    return{
        type: REMOVE_FEATURE,
        payload: {
            //price:props.feature.price,
            feature: props.feature.name,
            additionalFeatures: props.feature.name}
        }
    }
