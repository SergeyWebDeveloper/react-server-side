import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchInfoTeam} from '../actions';

class InfoPage extends Component {
	componentDidMount(){
		this.props.fetchInfoTeam();
	}
	render() {
		return (
			<div>
				Info
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