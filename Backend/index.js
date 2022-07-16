
//state
const initialCount = {
    count: 0,
    User: ["Shamim"],
  };
  
//action
  const Increment = () => {
    type: "increment";
  };
  const AddUser = () => {
    type: "increment";
  };

//reducer 
    const countReducer = (state = initialCount, action) => {
      switch (action.type) {
        case "increment":
          return {
            ...state,
            count: state.count + 1,
          };
        case "addUser":
          return {
            ...state,
            User: [...state.User, action.payload],
          };
        default:
          return state;
      }
    }

