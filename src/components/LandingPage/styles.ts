import { makeStyles } from '@mui/styles';
import landingHeaderImage from '../../assets/salem2.png';

const isMobile = /Mobi|Android/i.test(navigator.userAgent);

const useStyles = makeStyles((theme) => ({
  topBar: {
    backgroundColor: theme.palette.grey[900],
  },
  bottomBar: {
    top: 'auto',
    bottom: 0,
  },
  actionButton: {
    margin: 'auto',
    padding: '12px 24px',
    backgroundColor: '#00435F',
    color: '#00435F',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: '#00324A',
    },
  },
  root: {
    margin: theme.spacing(2),
  },
  landingHeader: {
    height: '100%',
    backgroundPosition: 'center',
  },
  landingTitle: {
    fontSize: '6em',
    [theme.breakpoints.down('lg')]: {
      fontSize: '4em',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '3em',
    },
  },
  landingTagline: {
    textAlign: 'center',
    height: '15vh',
    paddingTop: 15,
    [theme.breakpoints.down('sm')]: {
      lineHeight: '1.2em',
    },
  },
  landingBanner: {
    width: '100%',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
    },
  },
  fixedBanner: {
    position: 'fixed',
    top: '10vh',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    maxWidth: '400px',
  },
  fixedActionButton: {
    position: 'fixed',
    bottom: isMobile ? '16vh' : '15vh', // Use isMobile directly here
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 2,
  },
  '@media (max-width: 400px)': {
    fixedBanner: {
      top: '10vh',
    },
    fixedActionButton: {
      bottom: '16vh',
    },
  },
}));

export default useStyles;
