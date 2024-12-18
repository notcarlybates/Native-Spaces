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
        const hasVisited = sessionStorage.getItem('hasVisited');
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
                            <Typography variant={'h5'} gutterBottom>
                                <b>Credits</b>
                            </Typography>
                            <Typography gutterBottom mb={3}>
                            Native Spaces was initiated by Elizabeth Solomon and Sarah Kanouse in collaboration with the Massachusett Tribe at Ponkapoag and the municipalities and organizations sponsoring audio content. The title is related to Natchee Blu Barnd’s book{" "}
                            <Link href='https://osupress.oregonstate.edu/book/native-space' color='#a4e5fc' target='_blank'> Native Space</Link>, which argues that Indigenous communities use space even in colonized territories to reclaim their identities and assert an unbreakable relationship with land.

                            </Typography>
                            <Typography gutterBottom mb={3}>
                            The medallion logo is adapted from a design by{" "}<Link href='https://www.sadieredwing.com/' color='#a4e5fc' target='_blank'>Sadie Red Wing</Link> (Spirit Lake Lakota). Music by the{' '}
                            <Link href='https://www.facebook.com/RedHawkSingersAndDancers/' color='#a4e5fc' target='_blank'>Red Hawk Singers </Link> and Pomham Singers, recorded at the 2024 Veteran’s Powwow, with bass motifs by{' '}
                            <Link href='http://erikmusic.net/about.htm' color='#a4e5fc' target='_blank'>Erik Kramer</Link>. 
                            </Typography>
                            <Typography gutterBottom mb={3}>
                            Halsey Bergund developed the Roundware platform on which this project is built, and Carly Bates customized its code for Native Spaces.
                            </Typography>
                            <Typography gutterBottom mb={3}>
                            The Native Spaces concept was developed with the support of a NEFA Collective Imagination for Spatial Justice grant and produced with funding from Northeastern’s NuLab for Digital Humanities and Computational Social Sciences. Special thanks to the City of Salem, especially Elizabeth Peterson, Julie Barry, and Patti Kelleher, for funding and hosting the pilot chapter of this project. 
                            </Typography>

                            <Typography variant={'h6'} gutterBottom>
                                <b>Voices</b>
                            </Typography>
                            <Typography gutterBottom mb={3}>
  Nehemiah Duarte<br />
  Alysha Gray<br />
  Elizabeth Gray<br />
  Faries Gray<br />
  Alex Green<br />
  Thomas Green<br />
  Marie Hunt<br />
  Patti Kelleher<br />
  Robert Nichols<br />
  Jeanne Oliver-Foster<br />
  Elizabeth Peterson<br />
  Alyssa Rosemartin<br />
  Elizabeth Solomon<br />
  And other members of the Massachusett Tribe
</Typography>
<Typography gutterBottom mb={3}>
                            Original recordings by Sarah Kanouse, Nicholas Brown, Jimmy Bautista, and Nathen Green. Additional field recordings by{' '}
                            <Link href="https://freesound.org/people/kantoesploras/" color='#a4e5fc' target="_blank">kantoesploras</Link>
                            , including “Common Raven, Mt. Greylock,” “Desert Natural Area,” and “Eastern Whip-poor-will” from FreeSound.org used under a Creative Commons Attribution NonCommercial 4.0 license

                            </Typography>
                        </>
                    ) : (
                        <>
                            <Typography variant={'h5'} gutterBottom>
                                <b>Welcome to Native Space</b>
                                </Typography>
                                <Typography gutterBottom mb={3}>

                                You are in Native space, a visitor to the homelands of the Massachusett Tribe. Our ancestors have been here for at least 10,000 years, and the land resonates with the stories of our ancestors, the songs of our elders, and the voices of our youth. 
                            </Typography>
                            <Typography gutterBottom mb={3}>
                            If you’re on your phone and in a place where audio is available, press play on the next screen and keep this website open as you move through space to listen to an ever-changing sound collage that responds to your location.
                            </Typography>
                            <Typography gutterBottom mb={3}>
                            If you’re off-site, click the map icon to explore audio content in your web browser. 
                            </Typography>
                            <Typography gutterBottom mb={3}>
                            Whether you’re on the ground or away, Native Spaces will create a unique sonic experience highlighting perspectives on this land from present-day members of the Massachusett Tribe, as well as other people, both Native and non-Native, who have come to call this place home.
                                                         </Typography>
                                                         <Typography variant={'h6'} gutterBottom>
                            <b>Accessibility</b>
                            </Typography>
                            <Typography gutterBottom mb={3}>

                            To read a transcript of voice clips, click on the placemark or open the history panel. 

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

