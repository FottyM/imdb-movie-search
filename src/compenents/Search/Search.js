import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Grid from 'material-ui/Grid'
import withStyles from 'material-ui/styles/withStyles'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
  })
});

class Search extends Component {
  render() {
    return (
      <Grid container>
        <Grid item sm>
          <from>
          <TextField
            label="Search movie"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Search for christian movie"
            fullWidth
            margin="normal"
          />
        </from>
        </Grid>
      </Grid>
    );
  }
}

export default  withStyles(styles)(Search);
