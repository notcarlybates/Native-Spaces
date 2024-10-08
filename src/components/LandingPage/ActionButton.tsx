import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

interface Props {
	label: string;
	linkTo: string;
	style?: React.CSSProperties;
	onClick?: () => void;
}

// Move `isMobile` outside the component
const isMobile = /Mobi|Android/i.test(navigator.userAgent);

const ActionButton = ({ label, linkTo, style = {}, onClick }: Props) => {
	const history = useHistory();
	// Pass the isMobile value to useStyles
	const classes = useStyles({ isMobile });

	return (
		<Grid container direction="column" justifyContent="center" alignItems="center" style={style}>
			<Grid item>
				<Button
					aria-label={label}
					className={classes.actionButton}
					variant="contained"
					color="primary"
					onClick={() => {
						if (onClick instanceof Function) {
							onClick();
						}
						history.push(linkTo);
					}}
				>
					<Typography variant="h3" className={classes.buttonLabel}>
						{label}
					</Typography>
				</Button>
			</Grid>
		</Grid>
	);
};

export default ActionButton;

// Modify useStyles to accept props and use isMobile
export const useStyles = makeStyles((theme) => ({
	actionButton: ({ isMobile }: { isMobile: boolean }) => ({
		padding: '12px 24px',
		backgroundColor: '#489AB7',
		color: '#fff',
		borderRadius: '13px',
		margin: theme.spacing(2),
		width: isMobile ? '250px' : '280px', // Adjust width based on isMobile
		height: isMobile ? '110px' : '110px', // Adjust height based on isMobile
		'&:hover': {
			backgroundColor: '#2E7CA8',
		},
	}),
	buttonLabel: ({ isMobile }: { isMobile: boolean }) => ({
		margin: 'auto',
		fontSize: isMobile ? '45px' : '46px', // Adjust font size based on isMobile
		position: 'relative',
		fontFamily: 'sans-serif',
		fontWeight: 'bold',
	}),
}));
