import React from 'react';
import Search from './components/search/Search';
import './App.css';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

class App extends React.Component{
    render(){
      return (
        <ThemeProvider>
          <div>
            <Search />
          </div>
        </ThemeProvider>
      )
    }
}

export default App
