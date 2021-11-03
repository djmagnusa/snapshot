import React from 'react';
import Search from './components/search/Search';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';


class App extends React.Component{
    render(){
      return (
        <MuiThemeProvider>
          <div>
            <Search />
          </div>
        </MuiThemeProvider>
      )
    }
}

export default App
