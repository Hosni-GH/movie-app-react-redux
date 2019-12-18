import {createStore,combineReducers} from "redux";
import ListMoviesReducers  from './reducers/ListMoviesReducers';
import DisplayReducers  from './reducers/DisplayReducers';
import nameReducers  from './reducers/nameReducers';
import imgReducers  from './reducers/imgReducers';
import ratingReducers  from './reducers/ratingReducers';
import nameFilterReducers from './reducers/nameFilterReducer'
import starFilterReducers from './reducers/filterStarReducer'
import classReducer from './reducers/classReducer'




const store=createStore(combineReducers({
ListMoviesReducers:ListMoviesReducers,
DisplayReducers:DisplayReducers,
nameReducers:nameReducers,
imgReducers:imgReducers,
ratingReducers:ratingReducers,
nameFilterReducers:nameFilterReducers,
starFilterReducers:starFilterReducers,
classReducer:classReducer

})
)
export default store;