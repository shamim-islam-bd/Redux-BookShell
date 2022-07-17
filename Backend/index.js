import { createStore } from "redux";
// import { configureStore } from '@reduxjs/toolkit'
//state
 const initialState = {
    User: ["Shamim"],
    count: 1,
  };
  
//action
  const AddUser = (value) => {
   return {
     type: "increment",
     payload: value,
   } 
  };

//reducer 
    const userReducer = (state = initialState, action) => {
      switch (action.type) {
        case "increment":
          return {
            Users: [...state.User, action.payload],
            count: state.count + 1,
          };
        default:
          return state;
      }
    } 

// store
const store = createStore(userReducer);

//subscribe for checking the state.
store.subscribe(() => {
  console.log(store.getState());
});

//dispatching the action
// store.dispatch(AddUser("Tamim"));
store.dispatch(AddUser("Sadik", "tamim", "mishadh", "hey"));