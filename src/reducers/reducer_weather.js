import  cityWeather  from "../actions/index";

export default function (state = [],action)
{   
    
    switch(action.type)
    {
        case cityWeather:
        return [action.payload.data,...state]; // similar to state.concat(action.payload.data)
          
    }
    
    return state;
    
}