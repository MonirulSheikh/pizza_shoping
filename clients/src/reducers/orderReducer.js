

export const placeorderReducer=(state={loading:false,success:{},error:""},action)=>{
switch(action.type){
case "PLACE_ORDER_REQUEST": 
return{
    ...state,loading:true
}

case "PLACE_ORDER_SUCCESS":
    return {...state,loading:false,success:action.payload
    
    }

    case "PLACE_ORDER_FAIL":
    return {
        ...state,loading:false,error:action.payload.message

        
    }
    default: return state
}


}

export const  getOrderReducer=(state={error:"",loading:false,orders:[]},action)=>{
switch (action.type) {
    case "USER_ORDER_REQUEST":
        return{
...state,loading:true,
    }

    case "USER_ORDER_SUCCESS":
        return{
            ...state,loading:false,orders:action.payload
        }
        case "USER_ORDER_FAIL":
            return {
                ...state,loading:false,
                error:action.payload
            }
      

    default: return state
      
}

}