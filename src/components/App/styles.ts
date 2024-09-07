import { makeStyles } from '@mui/styles';
import config from 'config';
import { defaultTheme } from '../../styles';
import landingHeaderImage from '../../assets/salem2.png';
import BannerImage from '../../assets/Banner-01.png';

const useStyles = makeStyles(() => {
	return {
		topBar: {
			display: 'flex', // Makes the topBar a flex container
			// alignItems: 'center', // Vertically centers the items (navLogo and title)
			justifyContent: 'space-between', // Ensures that the title takes up available space after the logo
			backgroundImage: defaultTheme.palette.primary.main,
			backgroundColor: '#00435F',
			// background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(255,255,255,0) 100%)',
			background: 'none',
			boxShadow: 'none',
			padding: '0 0',

		},
		navLogo: {
			position: 'absolute',
			top: '64px', // Adjust this based on your top bar height
			left: '20px',
			transform: 'translateY(-50%)',
			zIndex: 2, // Ensure it overlaps the top bar and main content
			width: 'auto', // Adjust size as needed
			height: '100px', // Adjust size as needed
		},

		title: {
			position: 'relative',
			fontSize: '25px',
			fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
			fontWeight: 'bold',
			left: '60px',
			flexGrow: 1,
			color: 'white',
			textDecoration: 'none',
		},
		bottomBar: {
			top: 'auto',
			bottom: 0,
			flexFlow: 'row',
			backgroundColor: '#00435F',
			position: 'fixed',
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
			marginTop: -64,
		},
	};
});
export default useStyles;
