import React from 'react';
import PropTypes from 'prop-types';

export const TeamResult = ({item}) => {
	return(
		<li className="collection-item">
			<p>Дата игры: <strong>{item.date}</strong></p>
			{item.homeTeamName} {item.result.goalsHomeTeam} : {item.result.goalsAwayTeam} {item.awayTeamName}
		</li>
	)
};

TeamResult.propTypes = {
	item: PropTypes.object.isRequired
};