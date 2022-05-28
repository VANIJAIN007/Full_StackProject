//import {useState} from 'react';
//import ReactMapGl from 'react-map-gl';
    // import * as React from 'react';
    // import Map from 'react-map-gl';
    import React from 'react';
    import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
    mapboxgl.accessToken = 'pk.eyJ1IjoidmFuaWphaW4wMDciLCJhIjoiY2wycTB5cjQzMXZyYTNsbnEyN3NnaGMzMCJ9.5-KnGEnEKcKZZFJnOGc9fg';
// function App() {
//   const[viewport,setviewport]=useState({
//     width: 1100,
//     height:800,
//     longitude:-122.436,
//     latitde: 37.7577,
//     zoom:8

//   });
//   return (
//     <div className="App">
//       <ReactMapGl
//       {...viewport}
//      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
//       onViewportChange={nextViewport => setviewport(nextViewport)}
//       />
//     </div>
//   );
// function App(){
//   return (
//     <Map
//       initialViewState={{
//         longitude: -122.4,
//         latitude: 37.8,
//         zoom: 14
//       }}
//       style={{width: 600, height: 400}}
//       mapStyle="mapbox://styles/mapbox/streets-v9"
//       // mapStyle="mapbox://styles/vanijain007/cl3krmdoq000815msoz9mi1it"
//     />
//   );
  
// }






export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    lng: -70.9,
    lat: 42.35,
    zoom: 9
    };
    this.mapContainer = React.createRef();
    }
    componentDidMount() {
      const { lng, lat, zoom } = this.state;
      const map = new mapboxgl.Map({
        container: this.mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
      });
    }
    render() {
      return (
      <div>
      <div ref={this.mapContainer} className="map-container" />
      </div>
      );
      }
}
