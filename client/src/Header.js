import React from 'react'
import {AppBar,Toolbar,Typography} from '@mui/material'
import { makeStyles } from "@material-ui/core/styles"
import "./App.css" 
const useStyles = makeStyles({
  appbar:{
    marginBottom:"20px"
    
  }
});


const Header = () => {
 const classes = useStyles()
  return (
    <React.Fragment>
        <AppBar className={classes.appbar}position='static'>
            <Toolbar>
                <Typography className='name'>Resume Generator</Typography>
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}
export default Header;
