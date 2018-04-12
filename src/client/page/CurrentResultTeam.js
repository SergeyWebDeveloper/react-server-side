import React, {Component} from 'react';
import {fetchInfoClub} from '../actions';
import {connect} from 'react-redux';
import _ from 'lodash';
import {TeamResult} from '../components/TeamResult';

class CurrentResultTeam extends Component {
	componentDidMount(){
		this.props.fetchInfoClub(this.props.match.params.id);
	}
	renderResult(){
		return <ul className="collection">
			{_.map(this.props.clubInfo.fixtures,(item)=>{
				return <TeamResult key={item.date} item={item} />
		})}
		</ul>
	}
	render(){
		return(
			<div>
				{Object.keys(this.props.clubInfo).length&&this.renderResult()}
			</div>
		)
	}
}

const mapStateToProps = ({clubInfo}) => {
	return {clubInfo};
};

export default {
	component: connect(mapStateToProps,{fetchInfoClub})(CurrentResultTeam),
	loadData: ({dispatch},req) => dispatch(fetchInfoClub(req.url.slice(1)))
}