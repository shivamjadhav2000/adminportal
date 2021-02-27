import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { ThemeProvider } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Link } from "react-router-dom";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import StoreIcon from '@material-ui/icons/Store';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AssessmentIcon from '@material-ui/icons/Assessment';
import SettingsSystemDaydreamIcon from '@material-ui/icons/SettingsSystemDaydream';
const drawerWidth = 300;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  IconHover:{
        "&:hover":{
          color:"white",
         
          background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          borderRadius:"20px",
        }
  },
  DashBoard:{
    color:"white",
    background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius:"20px",
    

  },
  DashbdText:{marginLeft:"36px"},
  DashbdIcon:{
    color:"white",
    margin:"20",
  },
  Icons:{
    color:"white",
  },
  appBar: {
      background:'white',
      color:'black',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    background: '#273146 !important',
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    background: '#273146 !important',
    width: drawerWidth,
    color:"#9098ac",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    background: '#273146 !important',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
 Bell:{
   marginLeft:"70%"
 },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  
}));

export default function Main(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const LinkStyle={
    color:"#9098ac",
    textDecoration: 'none'
    
  }
  
   const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
 
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            True Barter
           
            
          </Typography>
        </Toolbar>
        
      </AppBar>
      
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        
        <Divider />
        <List>
            
            <Link to="/" style={LinkStyle}>
             <ListItem style={LinkStyle} button key="Dashboard" className={clsx(classes.DashBoard)}>
                    <ListItemIcon className={clsx(classes.DashbdIcon)}>
                        <DashboardIcon />
                        <ListItemText primary="Dashboard" className={clsx(classes.DashbdText)}/>
                    </ListItemIcon>
              </ListItem>
              </Link>
              
              <Divider />
          
            <Link style={LinkStyle} to="/Buyer">
            <ListItem button  className={clsx(classes.IconHover)}>
              <ListItemIcon className={clsx(classes.Icons)}>
               <StoreIcon />
              </ListItemIcon>
              <ListItemText primary="Buyer" />
            </ListItem>
           </Link>
           <Link style={LinkStyle} to="/Seller">
            <ListItem button  className={clsx(classes.IconHover)}>
              <ListItemIcon className={clsx(classes.Icons)}>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary="Seller" />
            </ListItem>
           </Link>
           <Link style={LinkStyle} to="/ListingManagement">
            <ListItem button  className={clsx(classes.IconHover)}>
              <ListItemIcon className={clsx(classes.Icons)}>
               <ListAltIcon />
              </ListItemIcon>
              <ListItemText primary="ListingManagement" />
            </ListItem>
           </Link>
           <Link style={LinkStyle} to="/CategoryAndSubCategory">
            <ListItem button  className={clsx(classes.IconHover)}>
              <ListItemIcon className={clsx(classes.Icons)}>
                <ClearAllIcon  />
              </ListItemIcon>
              <ListItemText primary="CategoryAndSubCategory" />
            </ListItem>
           </Link>
          
        </List>
        <Divider />
        <List>
            <Link style={LinkStyle} to="/Feature">
            <ListItem button  className={clsx(classes.IconHover)}>
            
              <ListItemIcon className={clsx(classes.Icons)}>
              <FeaturedPlayListIcon />
                
              </ListItemIcon>
              <ListItemText primary="Feature" />
            </ListItem>
            </Link>
            <Link style={LinkStyle} to="/Subscription">
            <ListItem button  className={clsx(classes.IconHover)}>
            
              <ListItemIcon className={clsx(classes.Icons)}>
                <SubscriptionsIcon />
              </ListItemIcon>
              <ListItemText primary="Subscription" />
            </ListItem>
            </Link>
            <Link style={LinkStyle} to="/Payment">
            <ListItem button  className={clsx(classes.IconHover)}>
            
              <ListItemIcon className={clsx(classes.Icons)}>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText primary="Payment" />
            </ListItem>
            </Link>
            <Link style={LinkStyle} to="/Report">
            <ListItem button  className={clsx(classes.IconHover)}>
            
              <ListItemIcon className={clsx(classes.Icons)}>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary="Report"/>
            </ListItem>
            </Link>
            <Link style={LinkStyle} to="/ContentManagementSystem">
            <ListItem button  className={clsx(classes.IconHover)}>
            
              <ListItemIcon className={clsx(classes.Icons)}>
              <SettingsSystemDaydreamIcon />  
              </ListItemIcon>
              <ListItemText primary="ContentManagementSystem"/>
            </ListItem>
            </Link>
           
         
        </List>
      </Drawer>
     

      
      <main className={classes.content}>
        <div className={classes.toolbar} />
            
        <div >
        {props.children}
        </div>
      </main>
    </div>
  );
}
