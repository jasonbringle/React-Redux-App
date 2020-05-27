import React from 'react';
import { getJoke } from '../Actions';
import { connect } from 'react-redux'

const ChuckJoke = ({getJoke, chuck, isFetching, error}) =>  {
    if(isFetching){

        return <div className="loading-chuck">
                    <h1>Getting a joke from Chuck Noris</h1>
                </div>
    } else {
        return (
            <div className="chuck-div">
                <h1>{chuck}</h1>  
                <div className="button-div">
                    <button className='button' onClick={getJoke}>Get a quote from Chuck Norris!!</button> 
                </div>
            </div>
        )
    }      
}

const mapStateToProps = state => {
    return {
        chuck: state.chuck,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect (
    mapStateToProps,
    { getJoke }
) ( ChuckJoke);