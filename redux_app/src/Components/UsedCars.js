import React from 'react';
import { getCars } from '../Actions';
import { connect } from 'react-redux'

const UsedCars = ({getCars, cars, isFetching, error}) =>  {
    if(isFetching){
        return <h1>Getting Cars</h1>
    } else {
        return (
            <div>
                <button onClick={getCars}>Get</button>
                {/* <h1>{cars[0].heading}</h1> */}
            </div>
        )
    }      
}

/* <div>{cars.map(car => {
            return <h1>{car.heading}</h1>
            })}
        </div> */

const mapStateToProps = state => {
    return {
        cars: state.cars,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect (
    mapStateToProps,
    { getCars }
) ( UsedCars);