import { createStore } from 'redux';
import fieldReducer from './reducers/fieldReducer';

const store = createStore(fieldReducer);

export default store;
