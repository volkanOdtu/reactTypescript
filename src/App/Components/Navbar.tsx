import React from "react";
import KeepOnLogo from "../../Assets/Img/logo_keep_on.png";
import logoutIcon from "../../Assets/Img/logout.png";
import account from "../../Assets/Img/account.png";
import { makeStyles, Theme, createStyles, IconButton, Link, AppBar,Toolbar ,Typography ,Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";

import { useNavigate } from "react-router";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({    
    extendedIcon: {
      marginRight: theme.spacing(1),
    },    
    appBarPrivate: {
      backgroundColor: "white" ,
      border : '1px solid' ,
      borderColor:"#e7f2fb", 
      borderBottomWidth:'2px' ,
      borderBottomColor:"#adceed"   
    },    
    toolbarRight:{
      display: "flex",  
      width :"100%",
      justifyContent: "flex-end"
    },
    buttonActive: {
      backgroundColor: "white" ,
      borderRadius: 0,
      color:"#adceed",      
      fontSize: '20px',
      fontFamily: "Arial",
      marginTop:'15px',
      textTransform: 'none',
      "&:hover": {
        borderBottom : '2px solid',
        color:"#6e90b8"
      }           
    },
    buttonInActive:{
      backgroundColor: "white" ,
      color:"#adceed" ,
      borderRadius: 0,
      borderBottom : '2px solid' ,
      fontSize: '20px',
      fontFamily: "Arial",
      marginTop:'15px',
      textTransform: 'none'      ,
      "&:hover": {
        borderBottom : '2px solid',
        color:"#6e90b8"
      }
    },
    accountText:{
      paddingLeft: "8px",
      color: "#6593c0",
      fontSize: "10px",
      fontFamily: "Arial Black",
      width:"200px",     
    },
    
  })
);

  
const Navbar: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    
    <AppBar position="fixed" className = {classes.appBarPrivate} >
      <Toolbar  style={{  display: "flex" , borderColor: 'red' }}>
        <img src={KeepOnLogo}
            alt="Logo"
            height={50}
            style = {{marginLeft : "60px"}}
            onClick={() => navigate("/portal")}
          />          
        <Toolbar className ={classes.toolbarRight} >
            <Button
                variant="text"
                className ={classes.buttonActive}
                startIcon={<SearchIcon />}>
                Explore
           </Button>                                         
           <Toolbar style={{  display: "flex", width :"50%" }} >
              <Button
                variant="text"
                className = {classes.buttonInActive}               
                startIcon={<AddIcon />}>
                Add a log
                </Button>              
           </Toolbar>                
        </Toolbar>
      
          <img src={account}
            style ={{cursor:"pointer"}}
            height={20}
            onClick={() => navigate("/portal")}
          />

          <Typography  className ={classes.accountText}>Welcome, Pablo Pinto</Typography>

          <img src={logoutIcon}
            style ={{cursor:"pointer"}}
            height={20}
            onClick={() => navigate("/portal")}
          />      
      </Toolbar>
    </AppBar>
    
  );
};

export default Navbar;
