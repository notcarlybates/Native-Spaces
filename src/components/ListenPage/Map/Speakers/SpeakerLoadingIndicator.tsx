import { useRoundware } from 'hooks';
import Backdrop from '@mui/material/Backdrop';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { useStyles } from 'components/LandingPage/ActionButton'; 

interface Props {}

const SpeakerLoadingIndicator = (props: Props) => {
	const { roundware } = useRoundware();

	const [loadingSpeakers, setLoadingSpeakers] = useState<{ id: number; value: number }[]>([]);
	useEffect(() => {
		roundware.mixer.speakerTracks?.forEach((sp) => {
			const player = sp.player;
			player.onLoadingProgress((per: number) => {
				if (per <= 100)
					setLoadingSpeakers((prev) => [
						...prev.filter((s) => s.id != sp.speakerId),
						{
							id: sp.speakerId,
							value: per,
						},
					]);
				else setLoadingSpeakers((prev) => [...prev.filter((s) => s.id != sp.speakerId)]);
			});
		});
	}, [roundware?.mixer?.speakerTracks]);

	if (loadingSpeakers.every((s) => s.value == 100)) return null;
	return (
		<Backdrop open sx={{
			margin: 0,
			fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
			fontSize: '1.5rem',
			fontWeight: 'bold',
			color: '#ffffff',
		  }}>
			<Stack spacing={1} p={2}>
				<Typography color='white' variant='h5'>DOWNLOADING AUDIO...</Typography>
				{loadingSpeakers
					.sort((a, b) => (a.id > b.id ? -1 : 1))
					.map((s) => (
						<LinearProgress variant='determinate' value={s.value} key={s.id} />
					))}
			</Stack>
		</Backdrop>
	);
};

export default SpeakerLoadingIndicator;
