const initialState = {
    books: [],
  };
  
  const bookReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_BOOKS':
        return { ...state, books: action.payload };
      default:
        return state;
    }
  };
  
  export default bookReducer;
  