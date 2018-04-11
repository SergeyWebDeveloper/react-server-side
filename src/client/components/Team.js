import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export const Team = ({team}) => {
	return(
		<li className="collection-item avatar">
			<img src={team.crestUrl} alt={team.name} className="circle" width={100} />
			<span className="title">Команда: {team.name}</span> <br/>
			<span>Сокращенное имя: {team.shortName}</span>
			<Link to={`/${team.code}`} className='waves-effect right waves-light btn'>Результаты команды</Link>
			<Link to={`/players-${team.code}`} className='waves-effect right red btn'>Игроки</Link>
		</li>
	)
};

Team.propTypes = {
	team: PropTypes.object.isRequired
};