import axios from 'axios';
export const FETCHING_CAR_START = "FETCHING_CAR_START";
export const FETCHING_CAR_SUCCESS = "FETCHING_CAR_SUCCESS";
export const FETCHING_CAR_FAILURE = "FETCHING_CAR_FAILURE";

 export const getCars = () => dispatch => {
     dispatch({ type: FETCHING_CAR_START});
     axios
     .get(`https://marketcheck-prod.apigee.net/v2/search/car/active?api_key=KufE7jT5GG3ybq89qHyNbrVPk4JGK2Xz&zip=97267&car_type=used&year=2005&rows=100&start=0&facet_sort=count&country=US`)
     .then(res => {
        console.log(res);
        dispatch({ type: FETCHING_CAR_SUCCESS, payload: res.data.listings })}
        )
     .catch(err => {
       console.log("error", err);
       dispatch({ type: FETCHING_CAR_FAILURE, payload: err.request.onerror.name})
     });
 }