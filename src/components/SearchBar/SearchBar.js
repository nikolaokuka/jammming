import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {term: ''};
		this.handleClick = this.handleClick.bind(this);
		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
	}

	handleTermChange(e){
		this.setState({term: e.target.value});
	}

	handleClick(){
		this.props.search(this.state.term);
	}

	handleOnKeyUp(e){
		if(e.keyCode === 13){
			this.props.search(this.state.term);
		}
	}

	render(){
		return (
			<div className="SearchBar">
		    <input placeholder="Enter A Song, Album or Artist" onChange={this.handleTermChange} onKeyUp={this.handleOnKeyUp} />
		    <a onClick={this.handleClick}>SEARCH</a>
		  </div>
		);
	}
}

export default SearchBar;
