import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieList } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({
			term: event.target.value,
		}); 
	}

	onFormSubmit(event) {
		event.preventDefault();

		// go get weather data
		this.props.getMovieList(this.state.term);
		this.setState({
			term: ''
		});
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Search a movie title"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

export default connect(null, { getMovieList })(SearchBar);