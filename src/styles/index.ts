import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const defaultTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#719EE3',
        },
        secondary: {
            main: "#ffffff",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                textPrimary: {
                    color: '#ffffff !important',
                },
                textSecondary: {
                    color: '#ffffff',
                }
            },
        },
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#006B68',
        },
        secondary: {
            main: '#719EE3', // Adjust secondary color to match your project
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                textPrimary: {
                    color: '#006B68', // Primary button text color
                },
                textSecondary: {
                    color: '#719EE3', // Secondary button text color
                }
            },
        },
    },
});

export const useDefaultStyles = makeStyles(() => ({
    root: {
        height: '100vh',
        display: 'flex',
        // Optionally add more styles here to match your design
    },
}));
