import React from 'react'


class SearchBar extends React.Component{

    state = {
        term : ''
    }

    //setting state for input that is typed
    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }


    onFormSubmit = (event) => {
        //prevents the form from submitting
        event.preventDefault()

    //todo make sure we call callback from parent component
    this.props.onFormSubmit(this.state.term)
    }


    render(){
        return(
            <div className = 'serach-bar ui segment'>
                <form onSubmit={this.onFormSubmit} className = 'ui form'>
                    <div className = 'field'>
                        <label>Video Search</label>
                    <input type = 'text' value={this.state.term} 
                    onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
