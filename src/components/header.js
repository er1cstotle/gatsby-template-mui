import React, { useState } from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Link } from 'gatsby';
import { grey, yellow } from '@material-ui/core/colors';

import Avatar from 'components/avatar';

import { AppBar, Container, Drawer, Toolbar, IconButton, Tabs, Tab, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import GitHub from '@material-ui/icons/GitHub';
import Twitter from '@material-ui/icons/Twitter';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: grey[900]
  },
  tabs: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexGrow: 1
    },
    paddingLeft: 16
  },
  tab: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    minWidth: 80
  },
  tabsIndicator: {
    backgroundColor: yellow.A700
  },
  toolbar: {
    minHeight: 48,
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-start'
    }
  },
  menuButton: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  socialIcon: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'inline-flex'
    }
  }
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const [value, setValue] = useState(props.path);
  const [drawerOpen, setDrawerOpen] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Container maxWidth={isDesktop ? 'lg' : false} disableGutters={!isDesktop}>
        <Toolbar className={classes.toolbar}>
          <Avatar/>
          {/*  desktop views */}
          <Tabs classes={{ root: classes.tabs, indicator: classes.tabsIndicator }} value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab component={Link} value={'/'} to={'/'} className={classes.tab} label={'Home'} {...a11yProps(0)} />
            <Tab component={Link} value={'/page-2/'} to={'/page-2'} className={classes.tab} label={'Page 2'} {...a11yProps(1)} />
          </Tabs>

          <IconButton className={classes.socialIcon} edge="start" color="inherit" aria-label="menu">
            <Twitter />
          </IconButton>
          <IconButton className={classes.socialIcon} edge="start" color="inherit" aria-label="menu">
            <GitHub />
          </IconButton>

          {/* mobile views */}
          <IconButton edge="start" className={classes.menuButton} onClick={() => setDrawerOpen(true)} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Drawer anchor={'right'} open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <Link onClick={() => setDrawerOpen(false)} to={'/'}>Home</Link>
            <Link onClick={() => setDrawerOpen(false)} to={'/page-2'}>Page 2</Link>
          </Drawer>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
