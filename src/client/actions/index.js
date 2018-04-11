import axios from 'axios';

export const FETCH_INFO_TEAM = 'FETCH_INFO_TEAM';
export const fetchInfoTeam = () => async (dispatch)=>{
	const {data} = await axios.get('http://api.football-data.org/v1/competitions/354/fixtures/?matchday=22');
	dispatch ({
		type: FETCH_INFO_TEAM,
		payload: data
	});
};