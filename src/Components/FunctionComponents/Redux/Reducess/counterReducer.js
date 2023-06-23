let intialState = {counter:0};

export const counterReducer = (state=intialState,action)=>{
if(action.type === "increment"){
    return{...state,counter:state.counter+1};
}else if(action.type === "decetment"){
    return{...state,counter:state.counter-1};
}
return state;
};