import { makeStyles } from '@mui/styles';
import landingHeaderImage from '../../assets/salem2.png';

const isMobile = /Mobi|Android/i.test(navigator.userAgent);

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
			padding: '12px 24px',
			backgroundColor: '#00435F',
			color: '#00435F',
			borderRadius: '8px',
			'&:hover': {
				backgroundColor: '#00324A'
			},
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
			height: 300,
			[theme.breakpoints.down('sm')]: {
				width: '100%',
				height: 'auto',
			},
		},
			// fixedBanner: {
			// 	position: 'fixed',
			// 	top: '15vh', // Adjust this value to position the banner vertically
			// 	left: '50%', // Center horizontally
			// 	transform: 'translateX(-50%)',
			// 	zIndex: 1, // Ensure it is on top
			// },
			// fixedActionButton: {
			// 	position: 'fixed',
			// 	top: '75vh', // Adjust this value to position the action button vertically
			// 	left: '50%', // Center horizontally
			// 	bottom: '22vh', // Position above the bottom of the viewport
			// 	transform: 'translateX(-50%)',
			// 	zIndex: 1, // Ensure it is on top
			// },

			fixedBanner: {
				position: 'fixed',
				top: '10vh', // Position below the top bar
				left: '50%',
				transform: 'translateX(-50%)',
				//zIndex: 2, // Ensure it overlaps other content
				width: '100%', // Responsive width
				maxWidth: '400px', // Limit maximum width
			  },
			  fixedActionButton: {
				position: 'fixed',
				bottom: isMobile ? '16vh' : '15vh', // Position above the bottom of the viewport
				left: '50%',
				transform: 'translateX(-50%)',
				zIndex: 2, // Ensure it overlaps other content
				// [theme.breakpoints.down('sm')]: {
				// 	bottom: '16vh'
				// },
			},
			  };
			})
			  // Media query for smaller screens
			//   '@media (max-width: 600px)': {
			// 	fixedBanner: {
			// 	  maxWidth: '400px'
			// 	  //d top position for smaller screens
			// 	},
			// 	fixedActionButton: {
			// 	  bottom: '15vh',
			// 	  maxWidth: '150%'
			// 	},
			//   },
			
			//   '@media (max-width: 400px)': {
			// 	fixedBanner: {
			// 	  top: '10vh', // Further adjustment for very small screens
			// 	},
			// 	fixedActionButton: {
			// 	  bottom: '16vh', // Further adjustment to prevent intersection
			// 	},
			//   },
			// }});

export default useStyles;
