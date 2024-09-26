import { ChevronRight, ClearAll, LocationOnOutlined } from '@mui/icons-material';
import LocationOn from '@mui/icons-material/LocationOn';
import { Button, Card, CardContent, CardHeader, Collapse, IconButton, Stack, Typography } from '@mui/material';
import config from 'config';
import { useRoundware } from 'hooks';
import { sortBy, uniqBy } from 'lodash';
import moment from 'moment';
import { useMemo, useState, useEffect } from 'react';
import AssetInfoCard from './Map/AssetLayer/AssetInfoCard';
import { TagsDisplay } from 'components/AssetTags';

const ListenHistory = () => {
	const { roundware, selectAsset, forceUpdate, selectedAsset, playingAssets } = useRoundware();
	const { assets } = roundware.listenHistory;

	const [collapsedItems, setCollapsedItems] = useState<number[]>([]);

	const toggleCollapse = (id: number) => {
		setCollapsedItems((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
	};

	const list = useMemo(
		() =>
			uniqBy(
				sortBy(
					assets.filter((a) => a.id),
					'addedAt'
				),
				'id'
			).reverse(),
		[assets, playingAssets, selectedAsset, forceUpdate, roundware.listenHistory.assets]
	);

	return (
		<Stack spacing={2} p={2}>
			{!!list.length && (
				<Stack direction='row' alignItems='center' justifyContent='end'>
					<Button
						startIcon={<ClearAll />}
						onClick={() => {
							roundware.listenHistory.clear();
							forceUpdate();
						}}
						size='small'
						variant='outlined'
						sx={{
							color: 'white', // Change text color
							borderColor: 'white', // Change button outline color
							'&:hover': {
								color: 'white', // Keep text color white on hover
								borderColor: 'white', // Keep border color white on hover
								backgroundColor: 'rgba(255, 255, 255, 0.1)', // Optional: Add a hover background color
							},
						}}
					>
						Clear Listening History
					</Button>
				</Stack>
			)}
			{list.length ? (
				list.map((asset) => {
					return (
						<Card
	key={asset.id}
	sx={{
		backgroundColor: '#00686B', // Change the background color of the card
	}}
>
	<CardHeader
		subheader={
			<Stack
				spacing={1}
				direction='row'
				alignItems={'center'}
				onClick={() => {
					toggleCollapse(asset.id);
				}}
				sx={{
					cursor: 'pointer',
				}}
			>
				<ChevronRight
					sx={{
						transform: (config.ui.listenSidebar.history.infoCardDefaultCollapsed
							? collapsedItems.includes(asset.id)
							: !collapsedItems.includes(asset.id))
							? 'rotate(90deg)'
							: 'rotate(0deg)',
					}}
				/>
				<TagsDisplay tagIds={asset.tag_ids} />
			</Stack>
		}
	/>

	<Collapse
		in={
			config.ui.listenSidebar.history.infoCardDefaultCollapsed
				? collapsedItems.includes(asset.id)
				: !collapsedItems.includes(asset.id)
		}
	>
		<CardContent
			sx={{
				backgroundColor: '#00686B', // Change the background color of the card content
				paddingBottom: 0,
				paddingTop: 1,
			}}
		>
			<AssetInfoCard
				asset={asset}
				roundware={roundware}
				cardConfig={config.ui.listenSidebar.history.available}
				actions={
					<IconButton
						title='Show on Map'
						onClick={() => {
							selectAsset(asset);
							forceUpdate();
						}}
					>
						{selectedAsset?.id == asset.id ? <LocationOn /> : <LocationOnOutlined />}
					</IconButton>
				}
			/>
		</CardContent>
	</Collapse>
</Card>
					);
				})
			) : (
				<Typography variant='subtitle2' color='#ffffff'>
					You currently have no listening history. As you listen to recordings on the map, they will be displayed here for further discovery.
				</Typography>
			)}
		</Stack>
	);
};

export default ListenHistory;
