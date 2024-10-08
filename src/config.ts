import configJSON from 'config.json';
import { IConfig } from 'configTypes';
import { merge } from 'lodash';

// this config object can be overridden by config.json
// Refer the type object below for info and comments on each config option
let config: IConfig = {
	debugMode: false,

	project: {
		apiUrl: 'https://prod.roundware.com/api/2',
		serverUrl: 'https://prod.roundware.com/',
		id: 44,
		initialLocation: {
			latitude: 40,
			longitude: 23,
		},
	},

	listen: {
		availableListenModes: 'device',
		keepPausedAssets: true,
		geoListenMode: 'device',
		autoplay: false,
		speaker: {
			sync: false,
			prefetch: false,
			loop: true,
			acceptableDelayMs: 50,
			syncCheckInterval: 2500,
		},
	},

	speak: {
		allowPhotos: true,
		allowText: true,
		allowSpeakTags: true,
		defaultSpeakTags: [],
	},

	map: {
		infoWindowItems: {
			available: ['tags', 'description', 'audio', 'photo', 'text', 'actions'], //removed 'date', added 'author'
			actionItems: ['show'],
		},

		zoom: {
			high: 17,
			low: 15,
			walking: 22,
		},
		speakerDisplay: 'polygons',
		speakerPolygonColors: ['#00435F'],
		useListenMapBounds: true,
		showBoundsMarkers: false,
		bounds: 'none',
		boundsPoints: {
			swLat: 3,
			swLng: 5,
			neLat: 5,
			neLng: 43,
		},
	},

	ui: {
		navLogoHeight: 50, //top bar logo, simple logo
		listenSidebar: {
			defaultOpen: false,
			active: true,
			filter: {
				active: false,
				available: ['date', 'tags', 'description'],
			},
			history: {
				active: true,
				available: {
					available: ['tags', 'description', 'photo', 'text', 'audio', 'actions'],
					actionItems: ['show'],
				},
				infoCardDefaultCollapsed: false,
			},
		},
	},

	features: {
		autoConcludeDuration: 992,
		concludeDuration: 2,
		surveyLink: 'https://forms.gle/nMfJNPozSW1KFddu7',
		autoResetTimeSeconds: 0,
	},
};

// override the default config
// with values from a config.json file
let finalConfig: IConfig;
if (configJSON) {
	finalConfig = merge(config, configJSON);
} else finalConfig = config;

export default finalConfig;
