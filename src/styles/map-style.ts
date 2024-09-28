export const RoundwareMapStyle: google.maps.MapTypeStyle[] = [
	// {
	// 	featureType: 'administrative',
	// 	elementType: 'labels.text.fill',
	// 	stylers: [
	// 		{
	// 			color: '#444444',
	// 		},
	// 	],
	// },
	// {
	// 	featureType: 'landscape',
	// 	elementType: 'all',
	// 	stylers: [
	// 		{
	// 			color: '#1F7D3E',
	// 		},
	// 	],
	// },
	// {
	// 	featureType: 'poi',
	// 	elementType: 'all',
	// 	stylers: [
	// 		{
	// 			visibility: 'off',
	// 		},
	// 	],
	// },
	// {
	// 	featureType: 'poi',
	// 	elementType: 'labels.text',
	// 	stylers: [
	// 		{
	// 			visibility: 'off',
	// 		},
	// 	],
	// },
	// {
	// 	featureType: 'road',
	// 	elementType: 'all',
	// 	stylers: [
	// 		{
	// 			saturation: -100,
	// 			color: '##57c17b',
	// 			lightness: 45,
	// 		},
	// 	],
	// },
	// {
	// 	featureType: 'road.highway',
	// 	elementType: 'all',
	// 	stylers: [
	// 		{
	// 			visibility: 'simplified',
	// 		},
	// 	],
	// },
	// {
	// 	featureType: 'road.arterial',
	// 	elementType: 'labels.icon',
	// 	stylers: [
	// 		{
	// 			visibility: 'off',
	// 		},
	// 	],
	// },
	// {
	// 	featureType: 'transit',
	// 	elementType: 'all',
	// 	stylers: [
	// 		{
	// 			visibility: 'off',
	// 		},
	// 	],
	// },
	// {
	// 	featureType: 'water',
	// 	elementType: 'all',
	// 	stylers: [
	// 		{
	// 			color: '#2E7CA8',
	// 		},
	// 		{
	// 			visibility: 'on',
	// 		},
// 	],
  { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [{ color: "#c9b2a6" }],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "geometry.stroke",
    stylers: [{ color: "#dcd2be" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "transit.line",
    elementType: "labels.geometry",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.stroke",
    stylers: [{ visibility: "off" }],
  },  
  {
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ visibility: "off" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ visibility: "off" }],
  },  
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [{ color: "#ae9e90" }],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [{ color: "#dfd2ae" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#dfd2ae" }],
  },
  {
    featureType: "poi",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#93817c" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [{ color: "#a5b076" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#447530" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#f5f1e6" }],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [{ color: "#fdfcf8" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    //stylers: [{ color: "#f8c967" }],
    stylers: [
      		{
      			visibility: 'off',
      		}],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    //stylers: [{ color: "#e9bc62" }],
    stylers: [
      {
        visibility: 'off',
      }],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    //stylers: [{ color: "#e98d58" }],
    stylers: [
      {
        visibility: 'off',
      }],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry.stroke",
    //stylers: [{ color: "#db8555" }],
    stylers: [
      {
        visibility: 'off',
      }],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [{ color: "#806b63" }],
  },
  {
    featureType: "transit",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [{ color: "#a4c7db" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#7dbee3" }],
  },
]
