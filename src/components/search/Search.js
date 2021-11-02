import React from 'react';

class Search extends React.Component{

    state={
        searchText: '',
        apiUrl: 'https://pixabay.com/api',
        apiKey: '24148966-3aeba8bc23024ebda0369ee9d',
        images: []
    }

    onTextChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render()
    {
        return(
            <div>
            
            
                <input type="text" 
                style=
                {{backgroundColor: 'black',
                 color: 'white',
                 marginLeft: 570,
                 marginTop: 100,
                 paddingTop: 20,
                 paddingLeft: 70,
                 fontSize: 30,
                 borderTopStyle: "hidden",
                 borderRightStyle: "hidden",
                 borderLeftStyle: "hidden",
                 outline: "none",
                 borderBottomStyle: "groove"
                }}
                placeholder="Search for images"
                name="search"
                value={this.state.searchText}>
                onChange={this.onTextChange}
                </input>
            </div>
        )
    }
}

export default Search;