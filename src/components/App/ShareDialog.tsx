import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useGoogleMap } from '@react-google-maps/api';
import CopyableText from 'components/elements/CopyableText';
import { useUIContext } from 'context/UIContext';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { URLContext } from 'context/URLContext';
import { useRoundware } from 'hooks';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router';
import { Modal, Box, Stack, Paper } from '@mui/material';
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';

type Props = {
	link?: string;
	open?: boolean;
};

const ShareDialog = (props: Props) => {
	const { params } = React.useContext(URLContext);
	const { showShare, handleCloseShare } = useUIContext();
	const { roundware } = useRoundware();

	const location = useLocation();
	const useMapContext = window.location.pathname === `/listen` ? useGoogleMap : () => null;
	const [includeGeo, setIncludeGeo] = useState(false);
	const isAssetSelected = useMemo(() => params.has('aid') || params.has('eid'), [params, location]);
	const map = useMapContext();
	const { link, showOptions } = useMemo(() => {
		const searchParams = new URLSearchParams();

		if (window.location.pathname === '/listen') {
			let link = window.location.toString();

			if (includeGeo && !isAssetSelected && roundware) {
				const center = map?.getCenter();
				if (center) {
					searchParams.append('latitude', center.lat().toString());
					searchParams.append('longitude', center.lng().toString());
				}
				const zoom = map?.getZoom();
				if (zoom) {
					searchParams.append('zoom', zoom.toString());
				}

				let prefixCharacter = `?`;
				const splitted = link.split(`?`);

				if (splitted.length > 1) {
					prefixCharacter = `&`;
				}

				link = link + prefixCharacter + searchParams.toString();
			}

			return {
				link,
				showOptions: !isAssetSelected,
			};
		}
		return {
			link: showShare !== 'true' ? showShare : window.location.toString(),
			showOptions: false,
		};
	}, [includeGeo, isAssetSelected, location, roundware?.listenerLocation, location.search, map?.getZoom(), map?.getCenter(), showShare]);

	const message = roundware?.project?.data?.sharing_message + ' \n' + link;

	useEffect(() => {
		if (!showShare) return;
		roundware.events?.logEvent(`share_map`, {
			data: `url: ${link}`,
		});
	}, [showShare, link]);


	return (
		<Modal
		  open={!!showShare}
		  onClose={handleCloseShare}
		  sx={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		  }}
		>
		  <Paper
			sx={{
			  backgroundColor: '#006B68', // Custom background color
			  color: '#ffffff', // Optional: Set text color for contrast
			  borderRadius: '8px', // Add border-radius
			  padding: '16px', // Padding for better spacing
			  width: '350px', // Smaller width
			  maxWidth: '80%', // Ensure it doesn't exceed viewport width on small screens
			  position: 'relative',
			}}
		  >
			    {/* Close "X" button */}
				<IconButton
      onClick={handleCloseShare}
      sx={{
        position: 'absolute',
        top: 8,
        right: 8,
        color: '#ffffff', // Same color as the dialog for contrast
      }}
    >
      <CloseIcon />
    </IconButton>
			    {/* Title */}
				<Box
      component="h2"
      sx={{
        margin: 0,
		fontFamily: 'sans-serif',
        fontSize: '1.5rem', // Adjust the size of the title text
        color: '#ffffff', // Ensure the title text has proper contrast
      }}
    >
      Share
    </Box>

			<Stack direction='column' justifyContent='center' spacing={2}>
			  <Stack direction='row' justifyContent='center' spacing={2}>
				{/* Share buttons */}
			  </Stack>
			  <Box
    //   sx={{
    //     maxHeight: '100px', // Set a fixed height for the text box
    //     overflowY: 'auto', // Enable scrolling when content overflows
    //   }}
    >
			  {/* Link */}
			  <CopyableText>{message}</CopyableText>
	  </Box>
			  {/* Options */}
			  {showOptions && (
				<FormControlLabel
				  control={
					<Checkbox
					  checked={includeGeo}
					  onChange={(event) => {
						setIncludeGeo(event.target.checked);
					  }}
					  inputProps={{ 'aria-label': 'controlled' }}
					/>
				  }
				  label='Include Current Geo Information'
				/>
			  )}
			</Stack>
		  </Paper>
		</Modal>
	  );
	  

};

export default ShareDialog;