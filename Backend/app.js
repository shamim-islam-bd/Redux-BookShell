const {applyMiddleware,createStore} = require('redux')
const {default: logger} = require("redux-logger");


// conastance
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

// state 
const initialState = {
    products: ["tomato", "potato"],
    NumOfProducts: 2,
 }

// declare  Action > types 
const getProducts = () =>{
   return {
      type: GET_PRODUCTS,
   }
}
const AddProducts = (product) =>{
   return {
      type: ADD_PRODUCTS,
      payload: product,
   }
}


// ProductsReducer
const ProductReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_PRODUCTS:
       return {
           ...state,
        }
      case ADD_PRODUCTS:
       return {
           products: [...state.products, action.payload],
           NumOfProducts: state.NumOfProducts +  1,
         }
      default:
        return state;
   }
}
    
    
// dispatch
const store = createStore(ProductReducer, applyMiddleware(logger));


store.subscribe(()=> {
   console.log(store.getState())
})


store.dispatch(getProducts());
store.dispatch(getProducts( "Apple " ));

