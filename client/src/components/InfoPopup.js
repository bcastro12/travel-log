import {Popup} from 'react-map-gl';

const InfoPopup = ({marker, closePopup}) => {
  return (
    <Popup
      latitude={parseFloat(marker.latitude)}
      longitude={parseFloat(marker.longitude)}
      onClose={closePopup}
      closeButton={true}
      closeOnClick={false}
      offsetTop={-30}
     >
      <div style={{maxWidth:410, display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center'}}>
        <p><strong>{marker.title}</strong></p>
        {marker.imageUrl && <a href={marker.imageUrl} target="_blank"><img src={marker.imageUrl} style={{maxHeight: 200,maxWidth:400}} alt="Trip" /></a>}
        <p>{marker.description}</p>
        <p style={{color:'gray'}}><small>Date visited: {new Date(marker.dateVisited).toLocaleDateString()}</small></p>
      </div>
    </Popup>
  )
};
export default InfoPopup;