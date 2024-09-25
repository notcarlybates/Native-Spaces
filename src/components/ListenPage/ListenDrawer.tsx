import { Close, History } from '@mui/icons-material';
import { Box, IconButton, Stack, Tab, Tabs, Theme, useMediaQuery } from '@mui/material';

import Drawer from '@mui/material/Drawer';
import { useUIContext } from 'context/UIContext';

import config from 'config';
import 'date-fns';
import React, { useState } from 'react';
import { useRoundware } from '../../hooks';
import Filters from './Filters';
import ListenHistory from './ListenHistory';

const ListenDrawer = () => {
	const { roundware } = useRoundware();

	const { drawerOpen: open, setDrawerOpen: setOpen } = useUIContext();

	const toggle = () => setOpen(!open);

	const [selectedTab, setSelectedTab] = useState(config.ui.listenSidebar.history.active ? `history` : `filters`);
	const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
	if (!(roundware.uiConfig && roundware.uiConfig.listen)) {
		return null;
	}
	if (!config.ui.listenSidebar.active) return null;
	return (
		<React.Fragment key={'drawer'}>
			<IconButton
				onClick={(e) => {
					e.stopPropagation();
					toggle();
				}}
			>
				<History fontSize='large' />
			</IconButton>
			<Drawer
	anchor={'right'}
	open={open}
	onClose={(e) => {
		setOpen(false);
	}}
	variant={isDesktop ? 'persistent' : 'temporary'}
	sx={{
		width: 350,
		flexShrink: 0,
		'& .MuiDrawer-paper': {
			width: 350,
			boxSizing: 'border-box',
		},
		position: 'absolute',
	}}
>
<Box
  sx={{
    backgroundColor: '#00324A', // Main body color
    height: '100%', // Ensures the background color covers the entire drawer
    overflow: 'auto', // Enables scrolling within the drawer
  }}
>
  <Stack
    position="sticky"
    top={0}
    sx={{
      backgroundColor: '#00324A', // Header color
      zIndex: 10, // Ensures the header is above the content
      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)', // Adds shadow to make the header stand out
    }}
    direction="row"
    p={1}
    pb={0}
    spacing={1}
    alignItems="center"
  >
    <IconButton
      sx={{
        mt: 1,
      }}
      onClick={(e) => {
        e.stopPropagation();
        setOpen(false);
      }}
    >
      <Close />
    </IconButton>
    <Tabs value={selectedTab} onChange={(e, v) => setSelectedTab(v)} variant="fullWidth">
      {config.ui.listenSidebar.history.active && <Tab label="History" value="history" />}
    </Tabs>
  </Stack>

  {/* Scrollable content */}
  <Box sx={{ padding: 2 }}>
    {selectedTab === 'history' && <ListenHistory />}
  </Box>
</Box>

</Drawer>

		</React.Fragment>
	);
};

export default ListenDrawer;
