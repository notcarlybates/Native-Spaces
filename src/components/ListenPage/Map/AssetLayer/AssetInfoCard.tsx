import CloseIcon from '@mui/icons-material/Close';
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle as MuiDialogTitle, Divider, Grid, IconButton, Modal, Stack, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles, withStyles, WithStyles } from '@mui/styles';
import { IAssetCardConfig } from 'configTypes';
import Interweave from 'interweave';
import React, { useEffect, useState } from 'react';
import { Roundware } from 'roundware-web-framework';
import { IAssetData } from 'roundware-web-framework/dist/types/asset';
import { IImageAsset } from '../../../../types';
import AssetPlayer from '../../../AssetPlayer';
import { TagsDisplay } from '../../../AssetTags';
import { AssetActionButtons } from './AssetActionButtons';

interface Props {
    asset: IAssetData;
    roundware: Roundware;
    cardConfig: IAssetCardConfig;
    actions?: React.ReactNode;
}

const AssetInfoCard = ({ asset, roundware, cardConfig, actions }: Props) => {
    const [imageAssets, setImageAssets] = useState<IImageAsset[]>([]);
    const [textAssets, setTextAssets] = useState<IAssetData[]>([]);
    const [showDialog, setShowDialog] = useState(false);
    const [transcriptContent, setTranscriptContent] = useState<string | null>(null);
    const classes = useStyles();

    useEffect(() => {
        if (Array.isArray(asset?.envelope_ids) && asset?.envelope_ids.length > 0) {
            roundware.getAssets({ media_type: 'photo', envelope_ids: asset.envelope_ids }).then(setImageAssets);
        }
    }, [asset]);

    useEffect(() => {
        if (Array.isArray(asset?.envelope_ids) && asset?.envelope_ids.length > 0) {
            roundware.getAssets({ media_type: 'text', envelope_ids: asset.envelope_ids }).then(setTextAssets);
        }
    }, [asset]);

    const primaryImageUrl = imageAssets[0]?.file;
    const primaryTextUrl = textAssets[0]?.file;

    const handleTranscriptButtonClick = () => {
        if (asset.description) {
            setTranscriptContent(asset.description);
        }
        setShowDialog(true);
    };

    const infoItemsResolver = (elementName: string, index: number, list: string[]) => {
        const showDividerIfEligible = (): React.ReactNode => {
            const prev = list[index - 1];
            return ['description', 'text', 'tags'].includes(prev) ? <Divider style={{ marginTop: 5, marginBottom: 5 }} /> : null;
        };

        switch (elementName) {
            case 'tags':
                return (
                    <div key={elementName}>
                        <Typography variant='body2'>Speaker:</Typography>
                        {showDividerIfEligible()}
                        <TagsDisplay tagIds={Array.isArray(asset.tag_ids) ? asset.tag_ids : []} />
                    </div>
                );
            case 'description':
                return (
                    <div key={elementName} style={{ marginTop: 5, textAlign: 'center' }}>
                        {showDividerIfEligible()}
                        <Button onClick={handleTranscriptButtonClick} size='small' className={classes.readMoreButton}>
                            View Transcript
                        </Button>
                    </div>
                );
            case 'photo':
                return primaryImageUrl ? <LightboxModal key={elementName} imageUrl={primaryImageUrl} /> : null;
            case 'text':
                return primaryTextUrl ? (
                    <div key={elementName}>
                        {showDividerIfEligible()}
                        <TextDisplay textUrl={primaryTextUrl} />
                    </div>
                ) : null;
            case 'audio':
                return <AssetPlayer key={elementName} style={{ width: '100%', marginTop: 10 }} asset={asset} captureEvents />;
            case 'actions':
                return <AssetActionButtons key={elementName} asset={asset} config={cardConfig?.actionItems} additionalActions={actions} />;
            default:
                return null;
        }
    };

    return (
        <Stack spacing={1}>
            {cardConfig.available.map((item, index, list) => infoItemsResolver(item, index, list))}
            <Dialog open={showDialog} onClose={() => setShowDialog(false)} className={classes.dialogContent}>
                <DialogTitle id='description' onClose={() => setShowDialog(false)}>
                    Transcript
                </DialogTitle>
                <DialogContent style={{ backgroundColor: '#00686B', color: '#fdfdfd' }}>
                    <DialogContentText style={{ backgroundColor: '#00686B', color: '#fdfdfd' }}>
                        <Interweave content={transcriptContent} />
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </Stack>
    );
};

const LightboxModal = ({ imageUrl }: { imageUrl: string }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
        <div>
            <img src={imageUrl} width={150} onClick={() => setOpen(true)} alt="Lightbox" />
            <Modal open={open} onClose={() => setOpen(false)}>
                <img src={imageUrl} className={classes.paper} alt="Lightbox" />
            </Modal>
        </div>
    );
};

const TextDisplay = ({ textUrl }: { textUrl: string }) => {
    const [storedText, setStoredText] = useState<string>('');
    const [showDialog, setShowDialog] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        fetch(textUrl)
            .then(response => response.text())
            .then(setStoredText);
    }, [textUrl]);

    return (
        <div>
            <Interweave content={storedText.length > 100 ? `${storedText.substr(0, 70)}...` : storedText} />
            {storedText.length > 100 && (
                <Button onClick={() => setShowDialog(true)} size='small' color='secondary' className={classes.readMoreButton} style={{ color: '#2E7CA8' }}>
                    More
                </Button>
            )}
            {showDialog && (
                <Dialog open={showDialog} onClose={() => setShowDialog(false)} className={classes.dialogContent}>
                    <DialogTitle id='description' onClose={() => setShowDialog(false)}>
                        Transcript
                    </DialogTitle>
                    <DialogContent style={{ backgroundColor: '#00686B', color: '#fdfdfd' }}>
                        <DialogContentText>
                            <Interweave content={storedText} />
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        height: 'auto',
        width: 'auto',
        maxHeight: '90%',
        maxWidth: '90%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        outline: 0,
        minWidth: 300,
        color: '#00686B',
    },
    readMoreButton: {
        color: '#489AB7',
    },
    dialogTitle: {
        margin: 0,
        padding: theme.spacing(2),
        backgroundColor: '#00686B',
        color: '#FFFFFF',
    },
	root: {
		margin: 0,
		padding: theme.spacing(2),
		color: 'white'
	},
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: 'white',
    },
    dialogContent: {
        color: '#00686B !important',
    },
}));

const styles = (theme: Theme) =>
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2),
			color: 'white'
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: 'white',
        },
    });

export interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
    const { children, onClose, ...other } = props;
    const classes = useStyles();
    return (
        <MuiDialogTitle {...other} className={classes.dialogTitle}>
            <Grid container justifyContent='space-between'>
                <Grid item>
                    <Typography variant='h6'>{children}</Typography>
                </Grid>
                <Grid item>
                    {onClose && (
                        <IconButton aria-label='close' onClick={onClose}
						sx={{
							position: 'absolute',
							top: 8,
							right: 8,
							color: '#ffffff', // Same color as the dialog for contrast
						  }}>
                            <CloseIcon />
                        </IconButton>
                    )}
                </Grid>
            </Grid>
        </MuiDialogTitle>
    );
});

export default AssetInfoCard;
