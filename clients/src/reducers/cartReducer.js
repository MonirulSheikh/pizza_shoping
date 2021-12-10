export const addTocart=(state={cartItems:[]},action)=>{

    switch (action.type) {
        case "ADD_TO_CART":
            
           const exiting=state.cartItems.find((x)=>x._id===action.payload._id)


           if(exiting){
               return{
                   ...state,cartItems:state.cartItems.map((x)=>x._id===action.payload._id?action.payload:x)
               }
           }else{
               return{
                ...state,cartItems:[...state.cartItems,action.payload]
               }
               
           }
    
case "DELETE_TO_CART":

return{
    ...state,cartItems:state.cartItems.filter((y)=>y._id !== action.payload._id)
}

        default: return state
           
    }

}