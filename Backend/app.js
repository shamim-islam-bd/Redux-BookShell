// async action- api calling.
// api url - https://jsonplaceholder.typicode.com/todos
// middleware -redux-thunk
// axios api

const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const thunk = require('redux-thunk').default;

// conastant
const TODOS_REQUEST = "TODOS_REQUEST";
const TODOS_SUCCESS = "TODOS_SUCCESS";
const TODOS_FAIELD = "TODOS_FAIELD";
const API_URL = "https://jsonplaceholder.typicode.com/todos";

//states
const initalState = {
    todos: [],
    isLoading: false,
    error: null,
}

// actions
const getTodosRequest = () =>{
    return{type: TODOS_REQUEST}
}
const getTodosSuccess = (success) =>{
    return{
        type: TODOS_SUCCESS,
        payload: success,
    }
}
const getTodosFailed = (error) =>{
    return{
        type: TODOS_FAIELD,
        payload: error,
    }
}

// reducer
const reducer = (state = initalState, action) =>{
  switch (action.type) {
    case TODOS_REQUEST:
      return{
        ...state,
        isLoading: true,
      }
    case TODOS_SUCCESS:
      return{
        ...state,
        isLoading: false,
        payload: action.payload
      }
    case TODOS_FAIELD:
      return{
        ...state,
        isLoading: true,
        payload: action.payload
      }
    default:
       return state;
  }
}


//Asyncing fetching data.
const fetchData = () => {
  return (dispatch) =>{
     dispatch(getTodosRequest());
     axios.get(API_URL)
     .then(res=>{
        console.log(res.data)
        const todos = res.data;
        const titles = todos.map(todo=> todo.title)
        dispatch(getTodosSuccess(titles));
    })
     .catch(error => {
        // console.log(error.message)
        const errorMessage = (error.message);
        dispatch(getTodosFailed(errorMessage))

    })
  }
}



//store
const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(()=>{
    console.log(store.getState());
})

// Dispatch
store.dispatch(fetchData())