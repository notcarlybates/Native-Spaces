import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoIcon from '@mui/icons-material/Info';

const InfoPopup = () => {
    const [open, setOpen] = useState(false);
    const [showFullCredits, setShowFullCredits] = useState(false);

    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisited');
        if (!hasVisited) {
            setOpen(true);
            localStorage.setItem('hasVisited', 'true');
        }
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setShowFullCredits(false);
    };

    const handleShowFullCredits = () => {
        setShowFullCredits(true);
    };

    const handleShowAboutProject = () => {
        setShowFullCredits(false);
    };

    return (
        <div>
            <IconButton onClick={handleClickOpen}>
                <InfoIcon />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
                PaperProps={{
                    style: {
                        backgroundColor: '#00324A',
                        color: '#ffffff',
                    }
                }}
            >
                <DialogTitle id='alert-dialog-title'>
                    {showFullCredits && (
                        <IconButton onClick={handleShowAboutProject}>
                            <ArrowBackIcon />
                        </IconButton>
                    )}
                    {showFullCredits ? 'Full Credits' : 'About This Project'}
                </DialogTitle>
                <DialogContent dividers>
                    {showFullCredits ? (
                        <>
                            <Typography variant={'h6'} gutterBottom>
                                <b>Credits</b>
                            </Typography>
                            <Typography gutterBottom mb={3}>
                                The Native Space project was initiated by Elizabeth Solomon and Sarah Kanouse in collaboration with the Massachusett Tribe at Ponkapoag and the municipalities and organizations sponsoring audio content. Special thanks to the City of Salem, in particular Patti Kelleher and Elizabeth Peterson, for hosting the pilot chapter of this project. The title is inspired by Natchee Blu Barnd’s book <Link href="https://osupress.oregonstate.edu/book/native-space" target="_blank">Native Space</Link>, which argues that Indigenous communities use space even in colonized territories to reclaim their identities and assert an unbreakable relationship with land.
                            </Typography>
                            <Typography gutterBottom mb={3}>
                                Music by Jennifer Kreisberg (Tuscarora) and members of the Massachusett Tribe at Ponkapoag.
                            </Typography>
                            <Typography gutterBottom mb={3}>
                                Halsey Bergund developed the Roundware platform on which this project is built, and Carly Bates customized its code for Native Space. For full credits, including names of speakers, click the link for each location.
                            </Typography>
                            <Typography gutterBottom mb={3}>
                                Salem 2024
                            </Typography>
                        </>
                    ) : (
                        <>
                            <Typography variant={'h6'} gutterBottom>
                                <b>Welcome to Native Space</b>
								</Typography>
								<Typography gutterBottom mb={3}>

                                You are in Native Space, on the traditional and ancestral lands of the Massachusett Tribe. Our ancestors have been here for at least 10,000 years. We are still here, and we are still the holders of the land.
                            </Typography>
                            <Typography gutterBottom mb={3}>
                                Five hundred years ago, colonists began arriving, and the landscape and our way of life changed. But regardless of what has happened to the land, it is still Native Space, and it still resonates with the stories of our ancestors, the songs of our elders, and the voices of our youth.
                            </Typography>
                            <Typography gutterBottom mb={3}>
                                This website shares stories and perspectives about this land from present-day members of the Massachusett Tribe, as well as other people, both Native and non-Native, who have come to call this place home.
                            </Typography>
                            <Typography gutterBottom mb={3}>
                                Beginning in Salem in 2024, we are releasing non-linear, place-based audio stories that you can listen to while walking in the areas indicated on the map, or access via the website’s map view off-site. Whether you are on the ground or away, Native Space will create a unique sound collage highlighting the Indigenous histories, ideas, and experiences that are rooted in this place and continue to animate the landscape today.
                            </Typography>
                            <Divider style={{ marginBottom: '16px', backgroundColor: 'rgba(0, 0, 0, 0.12)' }} />
                            <Typography variant={'body2'} color='primary' onClick={handleShowFullCredits} style={{ cursor: 'pointer', fontSize: '1.2em' }}>
                                Full Credits
                            </Typography>
                        </>
                    )}
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
