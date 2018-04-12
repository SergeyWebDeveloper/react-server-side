import {FETCH_INFO_CLUB} from '../actions';

export default (state={},{type,payload}) => {
	switch (type){
		case FETCH_INFO_CLUB:
			return payload;
		default:
			return state;
	}
}