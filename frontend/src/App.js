// import {useState} from 'react';
// import ReactMapGl from 'react-map-gl';
import * as React from 'react';
import Map from 'react-map-gl';
function App() {
  // const[viewport,setviewport]=useState({
  //   longitude:-122.436,
  //   latitde: 37.7577,
  //   width: 400,
  //   height:400,
  //   zoom:8

  // });
  // return (
  //   <div className="App">
  //     <h1>hello</h1>
  //     <ReactMapGl
  //     {...viewport}
  //     mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
  //     onViewportChange={nextViewport => setviewport(nextViewport)}
  //     />
  //   </div>
  //);
  return (
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
  
}

export default App;
