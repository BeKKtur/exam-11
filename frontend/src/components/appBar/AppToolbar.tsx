import {AppBar, Button, Grid, styled, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

const LogoLink = styled(NavLink)({
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
        color: 'inherit'
    }
})

const AppToolbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <Grid container justifyContent="space-between" alignItems='center'>
                    <Typography variant="h6" component='div'>
                        <LogoLink to='/'>Flea Market</LogoLink>
                    </Typography>
                    <Button component={NavLink} to="/register" color='inherit'>
                        Sign up
                    </Button>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default AppToolbar;