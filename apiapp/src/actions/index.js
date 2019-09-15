import axios from "axios";

export const GET_TRUMP_REQUEST = "GET_TRUMP_REQUEST";
export const GET_TRUMP_SUCCESS = "GET_TRUMP_SUCCESS";

export const getTrump = () => (dispatch) => {

    dispatch({ type: GET_TRUMP_REQUEST });
    axios
        .get("https://api.whatdoestrumpthink.com/api/v1/quotes/random")
        .then(response => {
            dispatch({ type: GET_TRUMP_SUCCESS, payload: response.data.message })
        })
        .catch(error =>{
            console.log("there is an error somewhere", error)
        });
};

//this page is done