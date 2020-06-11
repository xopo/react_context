import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavBarStyles";
// first context is used directly
import { ThemeContext } from './contexts/ThemeContext';
// second context used as HOC
import { withLanguageContext } from './contexts/LanguageContext'

const content = {
  english: {
    flag: '🇸🇪',
    search:'Search'
  },
  french: {
    flag: '🇫🇷',
    search:'Chercher'
  },
  spanish: {
    flag: '🇸🇸',
    search:'Buscar'
  }
};

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {

    const { isDarkMode, switchTheme } = this.context;
    const { classes, languageContext: { language: langSwitch } } = this.props;
    const { flag, search } = content[langSwitch];
    return (
      <div className={classes.root}>
        <AppBar position='static' color={ isDarkMode ? 'default': 'primary' }>
          <Toolbar>
            <IconButton className={classes.menuButton} color='inherit'>
              <span>{flag}</span>
            </IconButton>
            <Typography className={classes.title} variant='h6' color='inherit'>
              App Title
            </Typography>
            <Switch onChange={switchTheme}/>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={`${search}...`}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

// inject props from second context
export default withLanguageContext(withStyles(styles)(Navbar));
