import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

import { MapContainer, Popup, TileLayer, useMap } from 'react-leaflet';
import { HeaderComponent } from '../components/Header';
import { useContext, useEffect } from 'react';
import { MapContext } from '../context/MapContext';
import L from 'leaflet';
import 'leaflet.markercluster';
import useAuth from '../hooks/useAuth';

function MarkerCluster({ coordinates }) {
  const map = useMap();
  
  useAuth();

  useEffect(() => {
    if (!coordinates || coordinates.length === 0) return;

    const markers = L.markerClusterGroup();

    coordinates.forEach((coord) => {
      const marker = L.marker([Number(coord.nr_latitude), Number(coord.nr_longitude)]);
      marker.bindPopup(coord.nm_hospital);
      markers.addLayer(marker);
    });

    map.addLayer(markers);

    return () => {
      map.removeLayer(markers);
    };
  }, [coordinates, map]);

  return null;
}

export default function Maps() {
  const { coordinates } = useContext(MapContext);

  return (
    <div>
      <HeaderComponent />
      <div className="flex flex-col p-8 items-center justify-center">
        <div className="text-2xl font-bold text-primary my-8 text-center">
          <div className='md:text-4xl'>
            <h1 className='text-primary'>Mapa de distribuição dos chamados</h1>
          </div>
        </div>

        <div className="flex justify-center items-center w-full">
          <div className="w-full max-w-7xl aspect-video md:aspect-[6/3] bg-gray-200 rounded-xl shadow-lg z-10">
            <MapContainer
              center={[-22.903791, -47.06817]}
              zoom={13}
              className="w-full h-full rounded-xl shadow-2xl"
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <MarkerCluster coordinates={coordinates} >
                <Popup>{coordinates}</Popup>
              </MarkerCluster>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
