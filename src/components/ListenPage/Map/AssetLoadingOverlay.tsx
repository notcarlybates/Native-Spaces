import { Backdrop, Card, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { useRoundware } from '../../../hooks';
export const useLoadingStyles = makeStyles((theme) => {
	return {
		backdrop: {
			zIndex: theme.zIndex.drawer + 1,
			color: '#489AB7',
		},
		loadingCard: {
			display: 'flex',
			flexDirection: 'column',
			backgroundColor: '#00686B',
		},
		loadingMessage: {
			padding: theme.spacing(2),
		},
		loadingSpinner: {
			alignSelf: 'center',
			margin: theme.spacing(3),
			color: 'inherit',
		},
	};
});
const AssetLoadingOverlay = () => {
	const { roundware } = useRoundware();

	const classes = useLoadingStyles();
	return (
		<Backdrop className={classes.backdrop} open={!Array.isArray(roundware.assetData)}>
			<Card className={classes.loadingCard}>
				<CircularProgress className={classes.loadingSpinner} />
				<Typography 
				color='white'
				fontFamily={'sans-serif'} 
				fontWeight = 'bold'
				variant='h5'
				className={classes.loadingMessage}>LOADING...</Typography>
			</Card>
		</Backdrop>
	);
};

export default AssetLoadingOverlay;
