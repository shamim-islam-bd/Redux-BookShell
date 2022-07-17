import { createStore } from "redux";

// state 
const initialState = {
    products: ["tomato", "potato"],
    NumOfProducts: 2,
 }


// declare types
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
         state;
   }
}
    

// dispatch
const store = createStore(ProductReducer);

store.subscribe(()=> {
   console.log(store.getState())
})

store.dispatch(getProducts());
store.dispatch(AddProducts( "banana" ));
store.dispatch(AddProducts( "apple" ));