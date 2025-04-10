import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../constants/ActionTypes';

class StarWarsStore extends EventEmitter {
    constructor() {
        super();
        this.people = [];

        AppDispatcher.register((action) => {
            switch (action.type) {
                case ActionTypes.FETCH_PEOPLE_SUCCESS:
                    this.people = action.payload;
                    this.emit('change');
                    break;
                default:
                    break;
            }
        });
    }

    getPeople() {
        return this.people;
    }
}

export default new StarWarsStore();
