import React, {Component, Fragment} from 'react';
import {fetchInfoClub} from '../actions';
import {connect} from 'react-redux';
import _ from 'lodash';
import {TeamResult} from '../components/TeamResult';

class CurrentResultTeam extends Component {
	componentDidMount() {
		this.props.fetchInfoClub(this.props.match.params.id);
	}

	renderResult() {
		return (<div>
			<h1>Сезон: {this.props.clubInfo.season}</h1>
			<ul className="collection">
				{_.map(this.props.clubInfo.fixtures, (item) => {
					return <TeamResult key={item.date} item={item}/>
				})}
			</ul>
		</div>)
	}

	render() {
		return (
			<Fragment>
				{Object.keys(this.props.clubInfo).length>0 ? this.renderResult() : null}
			</Fragment>
		)
	}
}

const mapStateToProps = ({clubInfo}) => {
	return {clubInfo};
};

export default {
	component: connect(mapStateToProps, {fetchInfoClub})(CurrentResultTeam),
	loadData: ({dispatch}, url) => dispatch(fetchInfoClub(url.slice(1)))
}