import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, ToolBar, Typography, InputBase, Box} from '@material-ui/core';
import { classes } from "istanbul-lib-coverage";
import SearchIcon from '@material-ui/icons';


const Header = () => {
  return (

    <AppBar position="static">
      <ToolBar className={classes.toolBar}>
        <Typography variant="h5" className={classes.title}>
          Traveller
        </Typography>
        <Box display="flex">
          <Typography variant="h5" className={classes.title}>
            Explore every place
          </Typography>
          <Autocomplete>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search..." classes={{root : classes.inputRoot, input: classes.inputInput }} />

            </div>
          </Autocomplete>
        </Box>
      </ToolBar>
    </AppBar>
  );
}

export default Header;