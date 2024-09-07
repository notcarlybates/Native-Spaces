import { MarkerClusterer, useGoogleMap } from '@react-google-maps/api';
import { Clusterer } from '@react-google-maps/marker-clusterer';
import config from 'config';
import React, { Fragment, useEffect, useState } from 'react';
import { Coordinates } from 'roundware-web-framework/dist/types';
import { IAssetData } from 'roundware-web-framework/dist/types/asset';
import { OverlappingMarkerSpiderfier } from 'ts-overlapping-marker-spiderfier';
import { useRoundware } from '../../../../hooks';
import AssetMarker from './AssetMarker';
const OverlappingMarkerSpiderfierComponent = (props: { children: (props: OverlappingMarkerSpiderfier | null) => React.ReactNode }) => {
	const map = useGoogleMap();
	const [spiderfier, set_spiderfier] = useState<OverlappingMarkerSpiderfier | null>(null);
	if (!map) {
		return null;
	}
	if (!spiderfier) {
		const oms_obj = new OverlappingMarkerSpiderfier(map, {
			nearbyDistance: 1,
			markersWontMove: true,
			markersWontHide: true,
			basicFormatEvents: true,
		});
		set_spiderfier(oms_obj);
	}

	return <Fragment>{props.children(spiderfier)}</Fragment>;
};

const AssetLayer = ({ updateLocation }: { updateLocation: (newLocation: Coordinates) => void }) => {
	const { roundware, assetPage, selectedAsset, playingAssets } = useRoundware();

	const map = useGoogleMap();
	const assets = assetPage;
	const [markerClusterer, setMarkerClusterer] = useState<Clusterer | null>(null);

	// when the selected asset changes, pan to it
useEffect(() => {
    if (!selectedAsset || !map || typeof selectedAsset.latitude !== 'number' || typeof selectedAsset.longitude !== 'number') {
        return;
    }

    const center = {
        lat: selectedAsset.latitude,
        lng: selectedAsset.longitude,
    };

    // Pan to the location
    map.panTo(center);

    // Listener to set the zoom after the panning is complete
    const idleListener = map.addListener('idle', () => {
        map.setZoom(config.map.zoom.high);

        // Remove the listener after the initial pan and zoom
        google.maps.event.removeListener(idleListener);
    });

    roundware.updateLocation({ latitude: selectedAsset.latitude, longitude: selectedAsset.longitude });
    console.log(selectedAsset);
}, [selectedAsset, map]);

	if (!map) {
		return null;
	}

	const markers = (clusterer: Clusterer) => {
		const childrenRenderer = (oms: OverlappingMarkerSpiderfier | null) => assets.map((asset: IAssetData) => <AssetMarker key={asset.id} asset={asset} clusterer={clusterer} oms={oms!} />);
		return <OverlappingMarkerSpiderfierComponent children={childrenRenderer} />;
	};

	const recluster = () => {
		if (markerClusterer) {
			const markerObjs = markerClusterer.markers.slice();
			markerClusterer.clearMarkers();
			markerClusterer.repaint();
			markerClusterer.addMarkers(markerObjs, false);
		}
	};
	const wait_for_full_page = async () => {
		return new Promise<void>((resolve, reject) => {
			const checkStart = Date.now();
			const checkLength = () => {
				if (markerClusterer && assetPage.length >= markerClusterer.markers.length) {
					resolve();
				} else if (Date.now() > checkStart + 3000) {
					reject('asset page contains a different number of entries than the marker clusterer');
				} else {
					setTimeout(checkLength, 100);
				}
			};
			checkLength();
		});
	};
	useEffect(() => {
		if (!(markerClusterer && markerClusterer.ready)) return;
		wait_for_full_page().then(recluster);
	}, [markerClusterer && markerClusterer.ready, assetPage]);

	const options = {
		styles: [
			{
				url: '../../../assets/NS_Audiozone_XS.png',
				height: 50,
				width: 50
			}// Custom PNG for small clusters
				// { url: './NS_Audiozone_S.png' },
				// { url: './NS_Audiozone_M.png' },  // Custom PNG for large clusters
				// { url: './NS_Audiozone_L.png' },  // Custom PNG for small clusters
				// { url: './NS_Audiozone_XL.png' }, // Custom PNG for medium clusters
				// { url: './NS_Audiozone_XXL.png' },  // Custom PNG for large clusters
			],
	};

	const handleClick = (cluster: any) => {
		updateLocation({ latitude: cluster.center.lat(), longitude: cluster.center.lng() });
		markerClusterer?.repaint();
	};

	return (
		<MarkerClusterer
			maxZoom={config.map.zoom.high - 1} //spiderFier
			onClick={handleClick}
			onLoad={setMarkerClusterer}
			minimumClusterSize={3}
			calculator={(markers, numStyles) => {
				// Most of this implementation is copied from the default calculator for
				// React google maps. Change the `styles` property to configure how
				// clusters look.
				let index = 0;
				const title = '';
				const count = markers.length.toString();
				let dv = parseInt(count);
				while (dv !== 0) {
					dv = parseInt(dv.toString(), 10) / 10;
					index++;
				}

				index = Math.min(index + 1, numStyles);

				// Change style if any contained markers are being played.
				for (const m of markers) {
					for (const a of playingAssets) {
						// @ts-ignore = need to extend marker property to suporrt asset
						if (a && a.id === m.asset.id) {
							// TODO Change this number to match whatever index in the
							// `styles` list is your "currently playing" style.
							index = 0;
							break;
						}
					}
				}

				return {
					text: count,
					index: index,
					title: title,
				};
			}}
			options={options}
			children={markers}
		/>
	);
};

export default AssetLayer;
