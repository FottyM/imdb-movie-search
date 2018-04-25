import React from 'react'
import AppBar from 'material-ui/AppBar'
import Typography from 'material-ui/Typography' 
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const NavBar = (props) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit">
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon/>
          </IconButton>
        IMDB Chirstian Search
      </Typography>
    </Toolbar>
  </AppBar>
)
export default NavBar

