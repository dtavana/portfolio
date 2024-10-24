import { AppBar, Toolbar, Typography } from '@mui/material';

export default function ResponsiveAppBar() {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography color="textPrimary">My Portfolio</Typography>
            </Toolbar>
        </AppBar>
    )
}