import React from 'react';
import IconButton from '@mui/material/IconButton';
import MicIcon from '@mui/icons-material/Mic';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const SpeakButton = () => {
	return (
		<Box display="flex" alignItems="center">
			<IconButton
				title='Speak'
				sx={{
					color: 'white',
					backgroundColor: '#00435F',
					'&:hover': {
						backgroundColor: '#006080',
					},
					borderRadius: '12px',
					padding: '10px',
					boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
				}}
			>
				<MicIcon sx={{ fontSize: 30 }} />
			</IconButton>
			{/* Adding text label */}
			<Typography
				sx={{
					color: 'white',    // Text color
					fontSize: '16px',  // Font size
					fontFamily: 'Roboto', // Custom font
					marginLeft: '10px',  // Spacing between icon and text
				}}
			>
				Speak
			</Typography>
		</Box>
	);
};

export default SpeakButton;
