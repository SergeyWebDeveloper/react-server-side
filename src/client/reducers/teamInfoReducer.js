import {FETCH_INFO_TEAM} from '../actions';

export default (state={},{type,payload}) => {
	switch (type){
		case FETCH_INFO_TEAM:
			return payload;
		default:
			return state;
	}
};
