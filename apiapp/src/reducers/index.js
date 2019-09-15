import {
    GET_TRUMP_REQUEST,
    GET_TRUMP_SUCCESS,
  } from "../actions";

  export const initialState = {
      quote:null,
      error: "",
      requested: false
  }

  export const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_TRUMP_REQUEST:
            return{
                ...state,
                requested: true,
                error: "",
            };

        case GET_TRUMP_SUCCESS:
            return{
                ...state,
                quote: action.payload,
                requested: false,
                error: ""
            }
            default:
                return state

    }

  }

  //this page is done