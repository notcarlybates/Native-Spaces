import { makeStyles } from '@mui/styles';
import config from 'config';
import { defaultTheme } from '../../styles';
import landingHeaderImage from '../../assets/background.png';
import BannerImage from '../../assets/Banner_Tile.svg';

const useStyles = makeStyles(() => ({
  topBar: {
    width: '100%',  // Full width of the container
    height: '60px', // Adjust height based on desired banner size
    backgroundImage: `url(${BannerImage})`, // Use imported BannerImage
    backgroundSize: 'contain', // Ensure the entire image is visible
    backgroundPosition: 'center', // Center the image
    backgroundRepeat: 'repeat', // Prevent repeating of the image
  },
  navLogo: {
    position: 'fixed',
    top: '50px', // Adjust this based on your top bar height
    left: '-5px',
    transform: 'translateY(-50%)',
    zIndex: 2, // Ensure it overlaps the top bar and main content
    width: 'auto', // Adjust size as needed
    height: '110px', // Adjust size as needed
  },
  title: {
    position: 'relative',
    fontSize: '25px',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 'bold',
    left: '45px',
    flexGrow: 1,
    color: 'white',
    textDecoration: 'none',
  },
  bottomBar: {
    //position: 'fixed', // Use fixed positioning
  bottom: '0', // Stick to the bottom of the screen
  position: 'fixed',
    width: '100%',  // Full width of the container
    height: '60px', // Adjust height based on desired banner size
    backgroundImage: `url(${BannerImage})`, // Use imported BannerImage
    //backgroundSize: 'fit', // Ensure the entire image is visible
    backgroundPosition: 'center', // Center the image
    backgroundRepeat: 'repeat', // Prevent repeating of the image
    top: 'unset',
  },
  actionButton: {
    margin: 'auto',
  },
  appContainer: {
    display: 'flex',
    flexGrow: 1,
    backgroundImage: `linear-gradient(180deg, #000000bb, #ffffff00), url(${landingHeaderImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    marginTop: '-64px',
  },
}));

export default useStyles;
