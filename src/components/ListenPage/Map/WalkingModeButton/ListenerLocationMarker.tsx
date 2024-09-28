import { useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Circle, Marker, useGoogleMap } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';
import { useRoundware } from '../../../../hooks';
import WalkingModePin from '../../../../assets/walkingModePin.svg';

const ListenerLocationMarker = () => {
	const { roundware } = useRoundware();
	const map = useGoogleMap();
	const theme = useTheme();
	const loc = roundware.listenerLocation;
	const lat = loc && loc.latitude;
	const lng = loc && loc.longitude;
	const center = { lat: lat!, lng: lng! };

	const iconPin = {
		url: WalkingModePin,
		scaledSize: new google.maps.Size(30, 30),
	};

	const [infoWindowVisible, setInfoWindowVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setInfoWindowVisible(false);
		}, 7000); // Fade out after 7 seconds

		return () => clearTimeout(timer); // Cleanup timer on unmount
	}, []);

	return (
		<>
			<Circle
				radius={roundware.project.recordingRadius}
				center={center}
				onLoad={(circle) => {
					const newBounds = circle.getBounds();
					if (map !== null && newBounds) map.panToBounds(newBounds);
				}}
				options={{
					strokeColor: theme.palette.secondary.light,
					strokeOpacity: 0.5,
					strokeWeight: 0,
					fillColor: '#FFCD67',
					fillOpacity: 0.3,
					clickable: false,
					draggable: false,
					editable: false,
					visible: true,
					zIndex: 1,
				}}
			/>

			<Marker position={{ lat: center.lat, lng: center.lng }} icon={iconPin}>
				{infoWindowVisible && (
					<div style={{
						backgroundColor: 'white',
						padding: '10px',
						borderRadius: '4px',
						boxShadow: '0 2px 10px rgba(0,0,0,0.5)',
						position: 'absolute',
						transform: 'translate(-50%, -100%)', // Position above marker
					}}>
						<Typography variant='body2' style={{ color: 'black' }}>
							You Are Here
						</Typography>
					</div>
				)}
			</Marker>
		</>
	);
};

export default ListenerLocationMarker;
