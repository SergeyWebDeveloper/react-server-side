import axios from 'axios';

axios.defaults.headers.common['X-Auth-Token'] = '1396067cb9b04bb8ae72da3196bae9af';

const URL = 'http://api.football-data.org/v1';

export const FETCH_INFO_TEAM = 'FETCH_INFO_TEAM';
export const fetchInfoTeam = () => async (dispatch) => {
	const {data} = await axios.get(`${URL}/competitions/354/teams`);
	dispatch({
		type: FETCH_INFO_TEAM,
		payload: data
	});
};

export const FETCH_INFO_CLUB = 'FETCH_INFO_CLUB';
export const fetchInfoClub = (id) => async (dispatch) => {
	const {data} = await axios.get(`${URL}/teams/${id}/fixtures`);
	dispatch({
		type: FETCH_INFO_CLUB,
		payload: data
	})
};