import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
    return ( 
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor:"#94B49F", marginBottom: "10px"}}>
        <Toolbar>
          <Typography color="inherit" variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none'}}>RECIPES</Typography>
          <Button color="inherit" variant="outlined" component={Link} to="/add">Add new</Button>
        </Toolbar>
      </AppBar>
    </Box>
     );
}
 
export default Navbar;