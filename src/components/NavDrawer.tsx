import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { AppBar, Drawer, List, ListItem, Toolbar, Typography } from '@mui/material';
import { Theme, useTheme } from '@mui/material/styles';
import ContactDataGrid from './DataGrid/ContactDataGrid';
import Form from './Form/Form';
import ContactCardGrid from './Grid/ContactCardGrid';
import Table from './Table/Table';

const DRAWER_WIDTH = 240;

const themedStyles = (theme: Theme) => {
    return {
        appBar: {
            zIndex: theme.zIndex.drawer + 1
        }
    };
};

const simpleStyles = {
    drawer: {
        width: DRAWER_WIDTH,
        '& .MuiBackdrop-root': {
            display: 'none'
        }
    },
    drawerPaper: {
        width: DRAWER_WIDTH,
        backgroundColor: 'rgba(120, 120, 120, 0.2)'
    },
    content: {
        marginLeft: DRAWER_WIDTH,
        padding: 3
    }
};

export default function NavDrawer() {
    const theme = useTheme();
    return (
        <BrowserRouter>
            <div>
                <AppBar position="fixed" sx={themedStyles(theme).appBar}>
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            Advanced Material UI Styling
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    disableEnforceFocus
                    variant="temporary"
                    open={true}
                    sx={simpleStyles.drawer}
                    PaperProps={{
                        sx: simpleStyles.drawerPaper,
                        elevation: 9
                    }}
                >
                    <Toolbar />
                    <List>
                        {[
                            { text: 'Input Form', route: '/form' },
                            { text: 'Contact Card Grid', route: '/grid' },
                            { text: 'Contact Table', route: '/table' },
                            { text: 'Contact Data Grid', route: '/data' }
                        ].map((nav, index) => (
                            <ListItem key={index}>
                                <Link to={nav.route}>{nav.text}</Link>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <main style={simpleStyles.content}>
                    <Toolbar />
                    <Routes>
                        <Route path="/" element={<Form />} />

                        <Route path="/form" element={<Form />} />
                        <Route path="/grid" element={<ContactCardGrid />} />
                        <Route path="/table" element={<Table />} />
                        <Route path="/data" element={<ContactDataGrid />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}
