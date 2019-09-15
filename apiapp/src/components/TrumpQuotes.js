import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getTrump } from "../actions";


export const TrumpQuotes = ({getTrump, quote, requested, error}) =>{

useEffect(() =>{
    getTrump();
    // this is going to run the action creator when the component mounts!
}, [getTrump]);

if(requested) {
    return <h4>STIRRING UP SOME TROUBLE FOR YA!</h4>
}

return(
    <div> 
        <div>
            <h2>{quote}</h2>
        </div>
        <button onClick={getTrump}>Tell me more...</button>
    </div>
)
}

const mapStateToProps = state => {
    return{
        requested: state.requested,
        error: state.error,
        quote: state.quote
    }
}

export default connect(mapStateToProps, { getTrump })(TrumpQuotes);
