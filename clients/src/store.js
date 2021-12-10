import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { AllProductsReducers } from "./reducers/productReducer"
import {RegisterReducer} from "./reducers/userReducer"
import {addTocart} from "./reducers/cartReducer"
import {LoginReducer} from "./reducers/userReducer"
import {placeorderReducer,getOrderReducer} from "./reducers/orderReducer"

const rootReducers = combineReducers({
    AllPizza: AllProductsReducers,
    userEntry:RegisterReducer,
   cartReducer: addTocart,
   userData:LoginReducer,
   placeOrder:placeorderReducer,
   myOrder:getOrderReducer


})
const cartItems=localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]
const users=localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):""
// console.log(users)
const initialState = {
cartReducer:{
    cartItems:cartItems
    
    
},
userData:{
    userInfo:{users:users}
}


};

const middleware = [thunk]
const store = createStore(rootReducers, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;