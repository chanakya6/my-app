let intialsate = {name : 'raji'}
 export const nameChangeReducer = (state = intialsate,action) =>{
    if(action.type=== "NAME_CHANGE"){
        return {
            ...state,name:action.payload
        }
    }

    return state;
}