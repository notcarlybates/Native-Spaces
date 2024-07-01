import { useRoundware } from '../hooks';
import React, { Fragment, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Typography from '@mui/material/Typography';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';

const InfoPopup = () => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button onClick={handleClickOpen}>About This Project</Button>
			<Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
				<DialogTitle id='alert-dialog-title'>About This Project</DialogTitle>
				<DialogContent dividers>
					<Typography variant={'h6'} gutterBottom>
						Welcome to Native Space
					</Typography>
					<Typography gutterBottom mb={3}>You are in Native Space, on the traditional and ancestral lands of the Massachusett Tribe. Our ancestors have been here for at least 10,000 years. We are still here, and we are still the holders of the land. </Typography>


					<Typography gutterBottom mb={3}>Five hundred years ago, colonists began arriving, and the landscape and our way of life changed. But regardless of what has happened to the land, it is still Native Space, and it still resonates with the stories of our ancestors, the songs of our elders, and the voices of our youth. </Typography>


					<Typography gutterBottom mb={3}>This website shares stories and perspectives about this land from present-day members of the Massachusett Tribe, as well as other people, both Native and non-Native, who have come to call this place home. </Typography>

					<Typography gutterBottom mb={3}>Beginning in Salem in 2024, we are releasing non-linear, place-based audio stories that you can listen to while walking in the areas indicated on the map, or access via the website’s map view off-site. Whether you are on the ground or away, Native Space will create a unique sound collage highlighting the Indigenous histories, ideas, and experiences that are rooted in this place and continue to animate the landscape today. </Typography>
					

					<Typography gutterBottom mb={3}>May all that we do in Native Space both honor the land and prepare the way for all those to come.</Typography>
					<Divider />
					<Typography variant={'h6'} gutterBottom>
						<br />
						Credits:
					</Typography>
					<ul>
						<li>Credit #1</li>
						<li>Credit #2</li>
						<li>Credit #3</li>
					</ul>
					<Divider />
					{/* <Typography variant={'h6'} gutterBottom>
						<br />
						Join the fun...
					</Typography>
					<Typography gutterBottom>Roundware is an actively-developed open-source project and is free for anyone to use. It was initially developed for sound art installations, but has since been used for innovative museum audio tours as well as other educational purposes.</Typography>
					<Typography gutterBottom>
						You can check out codebases for the server and various frameworks on our&nbsp;
						<Link href='https://github.com/roundware'>GitHub page</Link>.
					</Typography> */}

					{/*<a href="./listen">
            <img id="map" src={assetMapGraphic} style={{width: "100%"}} />
          </a>
          <hr />*/}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='secondary' autoFocus>
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default InfoPopup;
