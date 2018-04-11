import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {fetchInfoTeam} from '../actions';
import {Team} from '../components/Team';

class InfoPage extends Component {
	// componentDidMount(){
	// 	this.props.fetchInfoTeam();
	// }
	renderInfo(){
		return <ul className='collection'>
			{_.map(this.props.teamInfo.teams,(team)=>{
				return <Team key={team.code} team={team}/>
			})}
		</ul>
	};

	render() {
		return (
			<div style={{margin: '25px 0'}}>
				{this.renderInfo()}
			</div>
		)
	}
};

const mapStateToProps = ({teamInfo}) => {
	return {teamInfo}
};

export default {
	component: connect(mapStateToProps, {fetchInfoTeam})(InfoPage),
	loadData: ({dispatch}) => dispatch(fetchInfoTeam())
}
