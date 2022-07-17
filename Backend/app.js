import { combineReducers, createStore } from "redux";

// state 
const initialState = {
    products: ["tomato", "potato"],
    NumOfProducts: 2,
 }

// Cart state 
const CartInitialState = {
    CartProducts: ["tomato", "potato"],
    NumOfCartProducts: 2,
 }


// declare  Action > types 
const getProducts = () =>{
   return {
      type: "getProducts"
   }
}
const AddProducts = (product) =>{
   return {
      type: "AddProducts",
      payload: product,
   }
}

// declare Cart Action > types
const getCartProducts = () =>{
   return {
      type: "getCartProducts"
   }
}
const AddCartProducts = (CartProduct) =>{
   return {
      type: "AddCartProducts",
      payload: CartProduct,
   }
}

// ProductsReducer
const ProductReducer = (state = initialState, action) => {
   switch (action.type) {
      case "getProducts":
       return {
           ...state,
        }
      case "AddProducts":
       return {
           products: [...state.products, action.payload],
           NumOfProducts: state.NumOfProducts +  1,
         }
      default:
        return state;
   }
}
    
// ProductsReducer
const CartProductReducer = (state = CartInitialState, action) => {
   switch (action.type) {
      case "getCartProducts":
       return {
           ...state,
        }
      case "AddCartProducts":
       return {
           CartProducts: [...state.CartProducts, action.payload],
           NumOfCartProducts: state.NumOfCartProducts +  1,
         }
      default:
        return state;
   }
}
    

// RootReducer
const rootReducer = combineReducers({
   productR : ProductReducer,
   cartR: CartProductReducer,
})

// dispatch
const store = createStore(rootReducer);


store.subscribe(()=> {
   console.log(store.getState())
})


store.dispatch(getProducts());

store.dispatch(getCartProducts());
store.dispatch(AddCartProducts( "orange" ));


