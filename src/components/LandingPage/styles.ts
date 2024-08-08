import { makeStyles } from '@mui/styles';
import landingHeaderImage from '../../assets/salem2.png';
const useStyles = makeStyles((theme) => {
	return {
		topBar: {
			backgroundColor: theme.palette.grey[900],
		},
		bottomBar: {
			top: 'auto',
			bottom: 0,
		},
		actionButton: {
			margin: 'auto',
		},
		root: {
			margin: theme.spacing(2),
		},
		landingHeader: {
			// backgroundImage: `linear-gradient(180deg, #000000ff, #ffffff00), url(${landingHeaderImage})`,
			// backgroundSize: 'cover',
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
			width: 'auto',
			height: 250,
			[theme.breakpoints.down('sm')]: {
				width: '100%',
				height: 'auto',
			},
		},
	};
});

export default useStyles;
