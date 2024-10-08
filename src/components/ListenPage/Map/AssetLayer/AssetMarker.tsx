import { Marker } from '@react-google-maps/api';
import { Clusterer } from '@react-google-maps/marker-clusterer';
import React, { useEffect, useMemo } from 'react';
import { IAssetData } from 'roundware-web-framework/dist/types/asset';
import { OverlappingMarkerSpiderfier } from 'ts-overlapping-marker-spiderfier';
import marker2 from '../../../../assets/placemark_singlegradient_selected.svg';
import marker from '../../../../assets/placemark_singlegradient.svg';
import { useRoundware } from '../../../../hooks';
import { AssetInfoWindowInner } from './AssetInfoWindow';
const AssetInfoWindow = ({ asset }: { asset: IAssetData }) => {
	const { selectedAsset, selectAsset, roundware } = useRoundware();

	if (!selectedAsset) return null;
	if (selectedAsset.id !== asset.id) {
		return null;
	}
	return <AssetInfoWindowInner asset={selectedAsset} selectAsset={selectAsset} roundware={roundware} />;
};

interface AssetMarkerProps {
	asset: IAssetData;
	clusterer: Clusterer;
	oms: OverlappingMarkerSpiderfier;
}
const AssetMarker = ({ asset, clusterer, oms }: AssetMarkerProps) => {
	const { roundware, selectAsset, playingAssets } = useRoundware();

	const isPlaying: boolean = useMemo(() => roundware?.mixer?.playing && Array.from(roundware?.mixer?.playlist?.trackMap?.values() || []).some((a) => a?.id == asset.id), [playingAssets, roundware.mixer.playing]);

	const iconPin = {
		url: isPlaying ? marker2 : marker,
		scaledSize: new google.maps.Size(isPlaying ? 30 : 28, isPlaying ? 30 : 28),
		fillOpacity: 1,
	};
	const zIndex = isPlaying ? 101 : 100;
	const position = { lat: asset.latitude!, lng: asset.longitude! };

	const onLoad = (m: google.maps.Marker) => {
		// @ts-ignore
		m.asset = asset;
		oms.addMarker(m, () => selectAsset(asset));
	};
	return (
		<Marker position={position} icon={iconPin} zIndex={zIndex} clusterer={clusterer} onLoad={onLoad} noClustererRedraw={true}>
			<AssetInfoWindow asset={asset} />
		</Marker>
	);
};

export default React.memo(AssetMarker);
