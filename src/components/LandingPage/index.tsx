import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import React from 'react';
import { useRoundware } from '../../hooks';
import useStyles from './styles';
import banner from '../../assets/Medallion_Splashpage.png';
import ActionButton from './ActionButton';
import config from 'config';
import { GeoListenMode } from 'roundware-web-framework';

export const LandingPage = () => {
	const { roundware, forceUpdate } = useRoundware();
	const classes = useStyles();

	const project = roundware.project;
	if (!project || project.projectName === '(unknown)') {
		return null;
	}

	return (
		<Container style={{ padding: 0 }}>
			<Grid container className={classes.landingHeader} justifyContent='center' alignItems='center'>
				{/* Main Content */}
				<Grid item xs={12} style={{ paddingTop: '60px', paddingBottom: '28vh' }}> {/* Adjust bottom padding */}
					{/* Your main content goes here */}
				</Grid>
			</Grid>

			{/* Fixed Position Banner Section */}
			<div className={classes.fixedBanner}>
				<img 
					src={banner} 
					className={classes.landingBanner} 
					alt="Banner" 
					style={{ width: '100%', maxWidth: '400px', height: 'auto' }} // Responsive sizing
				/>
			</div>

			{/* Fixed Position Action Button Section */}
			<div className={classes.fixedActionButton}>
				{project.data?.listen_enabled && (
					<ActionButton
						onClick={() => {
							// Your click logic here...
						}}
						label={'Listen'}
						linkTo={'/listen'}
						style={{ width: '100%', maxWidth: 'auto', height: '20vh'}}
					/>
				)}
			</div>
		</Container>
	);
};
