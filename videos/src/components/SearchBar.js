import React from 'react';

class SearchBar extends React.Component{

    state = { term: '' };

    onInputChane = (event) => {
        this.setState({term:event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
        //Todo: Make sure we call parent component
    }

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label> Video Search</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChane}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;