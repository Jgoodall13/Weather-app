import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, combineReducers } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    state = {
        term: ''
    }

    onInputChange = (e) => {
        this.setState({term: e.target.value})
    }

    submitForm = (e) => {
        e.preventDefault();

        this.props.fetchWeather(this.state.term)
        this.setState({term: ''})
    }

    render() {
        return (
            <form onSubmit={this.submitForm} className="input-group">
                <input
                  placeholder="Get a five-day forcase in your favorite cities"
                  className="form-control"
                  value={this.state.term}
                  onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);