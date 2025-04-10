import StarWarsService from '../services/StarWarsService';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../constants/ActionTypes';

const StarWarsActions = {
    fetchPeople() {
        StarWarsService.getPeople().then(data => {
            AppDispatcher.dispatch({
                type: ActionTypes.FETCH_PEOPLE_SUCCESS,
                payload: data.results
            });
        }
        );
    }
};

export default StarWarsActions;