import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import { InputAdornment }from 'material-ui/Input'
import {withStyles} from 'material-ui'
import TextField from 'material-ui/TextField'
import GridList, {GridListTile, GridListTileBar} from 'material-ui/GridList'
import LocalMovies from '@material-ui/icons/LocalMovies'
import Button from 'material-ui/Button'
import  Typography from 'material-ui/Typography'
import * as imdb from 'imdb-api'



const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * .25,
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
    }),
    image: {
        width: '100%',
        height: 'auto',
        maxWidth: '400px'
    }
})

class Main extends Component {

    static propTypes = {
        classes: PropTypes.any
    }

    state = {
        searchTerm: '',
        searchResult: [],
        apiKey: 'cfb0d954'
    }

    handleClick = async event => {
        event.preventDefault()
        const { apiKey } = this.state
        await imdb.search({ title: this.state.searchTerm }, {apiKey})
            .then(res => {
                const {results} = res
                this.setState({
                    searchResult: results
                })
            })
            .catch(console.log)
        console.log(this.state)
    }

    handleChange = event => {
        event.preventDefault()
        this.setState({ [event.target.name]: event.target.value })
    }

    displayImage = (movies = []) => {
        const { classes } = this.props

        if(movies.length > 0) {
            return(
                <Paper className={classes.root}>
                    <GridList cols={12}>
                        {
                            movies.map(movie => (
                                <GridListTile key={movie.imdbid}>
                                    <img src={ movie.poster} alt="movie poster" className={classes.image}/>
                                </GridListTile>
                            ))
                        }
                    </GridList>
                </Paper>
            )
        }else {
            return(
                <Typography variant='headline' gutterBottom color='error' align='center'>
                    Try again or search for the first time
                </Typography>
            )
        }
    }

    render() {
        const {classes} = this.props
        const {searchTerm, searchResult} = this.state
        return (
            <Grid container>
                <Grid item  sm={12}>
                    <Paper className={classes.root}>
                        <form>
                            <TextField
                                name='searchTerm'
                                label="Search movie"
                                value={searchTerm}
                                placeholder="Search for christian movie"
                                fullWidth
                                margin="normal"
                                onChange={ this.handleChange }
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LocalMovies />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Button color='secondary' type="submit" variant="raised" onClick={this.handleClick}>
                                Search
                            </Button>
                        </form>
                    </Paper>
                    {
                        this.displayImage(searchResult)
                    }
                </Grid>
            </Grid>
        )
    }
}


export default withStyles(styles)(Main)