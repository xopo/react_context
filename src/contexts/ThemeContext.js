import React, { createContext } from 'react';

export const ThemeContext = createContext();

class ThemeProvider extends React.Component {
    constructor(props){
        super(props);
        this.state = {isDarkMode: true};
        this.toggleTheme = this.toggleTheme.bind(this)
    }

    toggleTheme() {
        this.setState({isDarkMode: !this.state.isDarkMode});
    }

    render() {
        return(
            <ThemeContext.Provider value={{ ...this.state, switchTheme: this.toggleTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeProvider;