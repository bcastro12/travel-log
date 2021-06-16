import * as React from "react";
import ReactMapGL, {GeolocateControl, NavigationControl} from "react-map-gl";
import "./App.css";
import axios from 'axios';
import CustomMarker from './components/CustomMarker';
import InfoPopup from './components/InfoPopup';
import RegisterPopup from "./components/RegisterPopup";
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import Geocoder from 'react-map-gl-geocoder';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clickCoordinates: null,
			viewport: {
				width: "100vw",
				height: "100vh",
				latitude: 40.73051359172833,
				longitude: -73.98734857246082,
				zoom: 12,
			},
			selectedIndex: null,
			markers: []
		};
	}

	map = React.createRef();
	geocoderContainerRef = React.createRef();

	getMarkers = async () => {
		const response = await axios.get('http://localhost:3001/log');
		this.setState({markers: response.data});
		console.log('markers',this.state.markers);
	}
	
	setSelectedMarker = (index) => {
		this.setState({ selectedIndex: index })
	}
	
	closePopup = () => {
		this.setSelectedMarker(null)
	};

	closeRegisterPopup = () => {
		this.setState({ clickCoordinates: null })
	};
	
	openPopup = (index) => {
		this.setSelectedMarker(index)
	}

	openRegisterPopup = (e) => {
		this.closePopup();
		const [longitude, latitude] = e.lngLat;
		console.log(latitude,longitude);
		this.setState({
			clickCoordinates: {latitude,longitude}
		});
	}

	componentDidMount(){
		this.getMarkers();
	}

	render(){
		return (
			<div style={{ height: "100vh" }}>
				<div
					ref={this.geocoderContainerRef}
					style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}
				/>
				<ReactMapGL
					{...this.state.viewport}
					onViewportChange={nextViewport => this.setState({viewport:nextViewport})}
					mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN}
					onDblClick={e => this.openRegisterPopup(e)}
					doubleClickZoom={false}
					ref={this.map}
				>
		
				{
					this.state.markers.map((marker,index)=>{
						return(
							<CustomMarker 
								key={`marker-${index}`}
								index={index}
								marker={marker}
								openPopup={this.openPopup}
							/>
						);
					})
				}

				{
					this.state.selectedIndex !== null &&
					<InfoPopup
					index={this.state.selectedIndex}
					marker={this.state.markers[this.state.selectedIndex]}
					closePopup={this.closePopup}
					/>
				}

				{
					this.state.clickCoordinates !== null &&
					<RegisterPopup 
						coordinates={this.state.clickCoordinates}
						closePopup={this.closeRegisterPopup}
						onSubmit={()=>{
									this.closeRegisterPopup()
									this.getMarkers()
								}}
					/>
				}

					<Geocoder 
						mapRef={this.map} 
						containerRef={this.geocoderContainerRef}
						mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN}
						onViewportChange={nextViewport => this.setState({viewport:nextViewport})}
					/>
				</ReactMapGL>
			</div>
		);
	}
}

export default App;


