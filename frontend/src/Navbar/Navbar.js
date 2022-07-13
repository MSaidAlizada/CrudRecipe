import * as React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
    return ( 
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor:"#94B49F", marginBottom: "10px"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            RECIPES
          </Typography>
          <Button color="inherit" variant="outlined">Add new</Button>
        </Toolbar>
      </AppBar>
    </Box>
     );
}
 
export default Navbar;