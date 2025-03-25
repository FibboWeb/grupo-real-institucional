'use client'

import 'leaflet/dist/leaflet.css';
import '../index.css';
import MarkerClusterGroup from "react-leaflet-markercluster";

import L from 'leaflet';
import dynamic from 'next/dynamic';
const Map = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });

type Representante = {
  latitude: number;
  longitude: number;
  title: string;
}

const myIcon = L.icon({
  iconUrl: 'map-pin.svg',
  iconSize: [38, 95],

});

// usar o react leaflet para exibir o mapa
export default function MapRepresentantes({ representantes }: { representantes: Representante[] }) {
  console.log(representantes)

  return (
    <div className='w-full h-full flex justify-center items-center mx-auto'>
      <Map 
        zoom={3}
        maxZoom={18}
        center={[-16.4677196,-70.9921217]}  
        scrollWheelZoom={true}
        className='w-[calc(100vw-10vw)] h-[calc(100vh-35vh)] md:w-[80vw] md:h-[90vh] z-0'
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup className='bg-black'>
          { representantes.map((representante, index) => (
            representante.latitude && representante.longitude && (
              <Marker key={representante.longitude + index} position={[representante.latitude, representante.longitude]} icon={myIcon}>
                <Popup>
                  <p className='text-center font-bold'>{representante.title.replace("&#038;", "&").replace("&#8211;", ".")}</p>
                </Popup>
              </Marker>
            )
          ))}
        </MarkerClusterGroup>
      </Map>
    </div>
  )
}
