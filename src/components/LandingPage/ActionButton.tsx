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
		backgroundColor: '#2E7CA8',
		color: '#fff',
		borderRadius: '8px',
		margin: theme.spacing(2),
		width: isMobile ? '290px' : '290px', // Adjust width based on isMobile
		height: isMobile ? '120px' : '120px', // Adjust height based on isMobile
		'&:hover': {
			backgroundColor: '#00435F',
		},
	}),
	buttonLabel: ({ isMobile }: { isMobile: boolean }) => ({
		margin: 'auto',
		fontSize: isMobile ? '60px' : '50px', // Adjust font size based on isMobile
		position: 'relative',
		fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
		fontWeight: 'bold',
	}),
}));
