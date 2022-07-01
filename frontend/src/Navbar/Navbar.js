import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
    return ( 
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor:"#94B49F"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            RECIPES
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
     );
}
 
export default Navbar;