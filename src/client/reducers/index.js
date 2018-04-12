import {combineReducers} from 'redux';
import teamInfo from './teamInfoReducer';
import clubInfo from './infoClubReducer';

export default combineReducers({
	teamInfo,
	clubInfo
});