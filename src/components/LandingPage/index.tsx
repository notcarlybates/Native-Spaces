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
				{/* Banner Section */}
				<Grid
					item
					sm={12}
					container
					justifyContent='center'
					alignItems='center'
					style={{ marginBottom: '20px', marginTop: '60px' }}
				>
					<img 
						src={banner} 
						className={classes.landingBanner} 
						alt="Banner" 
						style={{ width: '100%', maxWidth: '400px', height: 'auto' }} // Adjust width and max height
					/>
				</Grid>

				{/* Action Button Section */}
				<Grid
					item
					xs={12}
					container
					justifyContent="center"
					alignItems="center"
					style={{ marginTop: '20px', paddingBottom: '15px', marginBottom: '15px' }}
				>
					{project.data?.listen_enabled && (
						<ActionButton
							onClick={() => {
								// Your click logic here...
							}}
							label={'Listen'}
							linkTo={'/listen'}
							style={{ width: '80%', maxWidth: '300px', margin: '0 auto' }}

						/>
					)}
				</Grid>
			</Grid>
		</Container>
	);
};
