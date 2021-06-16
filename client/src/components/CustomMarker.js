import {Marker} from 'react-map-gl';
import CityPin from './CityPin';

const CustomMarker = ({index, marker, openPopup}) => {
	return (
	  <Marker
		longitude={parseFloat(marker.longitude)}
		latitude={parseFloat(marker.latitude)}>
		<CityPin  onClick={() => openPopup(index)} />
	  </Marker>
  	)
};

export default CustomMarker;