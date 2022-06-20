import {Link, Outlet} from 'react-router-dom';
import {Box, AppBar, Toolbar, Link as LinkMat, Typography} from '@mui/material';
import React from 'react';


const Layout = () => {
    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <LinkMat href="/" color="inherit" sx={{margin: 2}}>Home</LinkMat>
                        <LinkMat href="/add" color="inherit">Add phone</LinkMat>
                    </Toolbar>
                </AppBar>
            </Box>
            <Outlet/>
            <Box
                component="div"
                sx={{
                    flexGrow: 1,
                    height: 100,
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}
            >
                <Typography variant="body1" color="white" sx={{mx: "auto", py: '30px', width: 'fit-content'}}>2022</Typography>
            </Box>
        </>
    )
}
export {Layout}