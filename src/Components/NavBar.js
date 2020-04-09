import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ListIcon from '@material-ui/icons/List';
import EmailIcon from '@material-ui/icons/Email';
import HelpIcon from '@material-ui/icons/Help';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Velocity from './Velocity-Logo.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBarBackground: {
    backgroundColor: '#142357',
  },
  dividerColor: {
    backgroundColor: '#FFFFFF',
    marginRight: '1rem',
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBarTheme} position="sticky">
        <ToolBar className={classes.appBarBackground}>
          <IconButton
            className={classes.menuButton}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <IconButton>
            <Velocity />
          </IconButton>
          <Divider
            classes={{root: classes.dividerColor}}
            orientation="vertical"
            flexItem
          />
          <Typography className={classes.title} varient="h6" color="inherit">
            Market Funding
          </Typography>
          <IconButton color="inherit" aria-label="search">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="list">
            <ListIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="email">
            <EmailIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="help">
            <HelpIcon />
          </IconButton>
          <Avatar alt="Cindy Baker" src="Static/Images/Avatar/3.jpg" />
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default NavBar;
