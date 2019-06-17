import React from 'react'


class SearchBar extends React.Component{

    state = {
        term : ''
    }



    render(){
        return(
            <div>
                <form>
                    <input type = 'text' value/>
                </form>
            </div>
        )
    }
}

export default SearchBar
