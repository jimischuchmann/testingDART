import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import {fade, makeStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {Box, TextField} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {
    display: 'flex',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: '0 8px 0 0',
    paddingLeft: '0px',
    width: '100%',
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    // <div className={classes.search}>
    //   <div className={classes.searchIcon}>
    //     <SearchIcon />
    //   </div>
    //   <InputBase
    //     placeholder="Search…"
    //     classes={{
    //       root: classes.inputRoot,
    //       input: classes.inputInput,
    //     }}
    //     inputProps={{'aria-label': 'search'}}
    //   />
    // </div>
    <Box display="flex" alignItems="center" pr={1}>
      <SearchIcon />
      <InputBase placeholder="Search…" inputProps={{'aria-label': 'search'}} />
    </Box>
  );
}
