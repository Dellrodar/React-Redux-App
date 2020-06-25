import React, {useEffect} from 'react';
import {Card, CardContent, CardHeader, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {connect} from 'react-redux';
import {getJoke} from '../../actions';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

const Jokes = props => {
  const classes = useStyles();

  useEffect(() => {
    getJoke()
  })

  if(props.fetching){
    return <h2 className="loading">Chuck is roundhouse kicking a new joke your way...</h2>
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader> Chunk Norris Joke:</CardHeader>
      <CardContent>
        {props.CNJoke}
      </CardContent>
      <Button onClick={() => getJoke()}>Click for another joke!</Button>
    </Card>
    )}


  const mapStateToProps = state => {
    return{
        CNJoke: state.CNJoke,
        fetching: state.fetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {getJoke})(Jokes);