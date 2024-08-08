import { makeStyles } from '@mui/styles';
import config from 'config';
import { defaultTheme } from '../../styles';
import landingHeaderImage from '../../assets/salem2.png';
import BannerImage from '../../assets/Banner-01.png';

const useStyles = makeStyles(() => {
	return {
		topBar: {
			backgroundImage: defaultTheme.palette.primary.main,
			backgroundColor: '#00435F',
			// background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(255,255,255,0) 100%)',
			background: 'none',
			boxShadow: 'none',
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
		title: {
			flexGrow: 1,
			color: 'white',
			textDecoration: 'none',
		},
		navLogo: {
			height: config.ui.navLogoHeight || 50,
		},
	};
});
export default useStyles;
