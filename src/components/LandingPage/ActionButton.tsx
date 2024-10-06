import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material';

interface Props {
	label: string;
	linkTo: string;
	style?: React.CSSProperties;
	onClick?: () => void;
}

const ActionButton = ({ label, linkTo, style = {}, onClick }: Props) => {
	const classes = useStyles();
	const history = useHistory();

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

export const useStyles = makeStyles((theme) => ({
	actionButton: {
		padding: '12px 24px',
		backgroundColor: '#2E7CA8',
		color: '#fff', // Text color for visibility
		borderRadius: '8px',
		margin: theme.spacing(2),
		width: 250,
		height: 75,
		'&:hover': {
			backgroundColor: '#00435F',
		},
		[theme.breakpoints.down('md')]: {
			width: 250,
			height: 75,
		},
	},
	buttonLabel: {
		margin: 'auto',
		fontSize: '30px',
		position: 'relative',
		fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
		fontWeight: 'bold',
	},
}))