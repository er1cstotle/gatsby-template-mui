import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Button, Container, Grid, Paper } from '@material-ui/core';
import { Link } from 'gatsby';


import Image from 'components/image';
import SEO from 'components/seo';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: 48,
    [theme.breakpoints.up('sm')]: {
      minHeight: 64
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

const IndexPage = (props) => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth={'md'}>
      <SEO title="Home" />

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper variant={'outlined'} square elevation={0} className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper variant={'outlined'} square elevation={0} className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper variant={'outlined'} square elevation={0} className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper variant={'outlined'} square elevation={0} className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper variant={'outlined'} square elevation={0} className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper variant={'outlined'} square elevation={0} className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper variant={'outlined'} square elevation={0} className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>


      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>

      <Link to="/page-2/">Go to page 2</Link>
    </Container>
  );

};

export default IndexPage;
