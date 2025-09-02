import 'leaflet/dist/leaflet.css';

import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { HeaderComponent } from '../components/Header'

export default function Maps() {
  return (
    <div>
      <HeaderComponent />
      <div className="flex flex-col p-8 items-center justify-center">
        <div className="text-4xl font-bold text-[#EC6726] my-8">
          <h1>Mapa de distribuição dos chamados</h1>
        </div>
        
        <div className="flex justify-center items-center w-full">
          <div className="w-full max-w-7xl aspect-video md:aspect-[6/3] bg-gray-200 rounded-xl shadow-lg">
            <MapContainer
              center={[-22.903791, -47.06817]}
              zoom={13}
              className="w-full h-full rounded-xl shadow-2xl "
              scrollWheelZoom={true}>

              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[-22.903791, -47.06817]} />
              <Marker position={[-22.909791, -47.06817]} />
              <Marker position={[-22.903791, -47.05817]} />
              <Marker position={[-22.913791, -47.07817]} />
              <Marker position={[-22.923791, -47.06817]} />
              <Marker position={[-22.903791, -47.08817]} />
            </MapContainer>

          </div>
        </div>

      </div>
    </div>
  )
}