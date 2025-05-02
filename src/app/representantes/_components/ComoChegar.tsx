import BtnCallToAction from '@/components/Layout/Buttons/BtnCallToAction/BtnCallToAction';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

// Importando componentes do react-leaflet de forma dinâmica
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });

type Props = {
  endereco: string,
  cidade: string,
  estado: string,
  latitude: string,
  longitude: string,
  iframe: string
}

export default function ComoChegar({ endereco, cidade, estado, latitude, longitude, iframe }: Props) {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setShowModal(false);
    }
  }, []);

  useEffect(() => {
    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal, handleClickOutside]);

  const [dimensions, setDimensions] = useState({
    width: "90vw",
    height: 'calc(100vh - 20vh)' // Compensa espaço do header
  });


  return (
    <div className=''>
      <BtnCallToAction 
        content='Como chegar'
        classCssForBTN='p-2 text-sm'
        showIcon={false}
        onClick={() => setShowModal(!showModal)}
      />
      {showModal && (
        <div className="fixed inset-0 pt-14 bottom-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div ref={modalRef} className="flex flex-col gap-2 bg-white w-fit rounded-md p-4" style={{
        width: dimensions.width,
        height: dimensions.height
      }}>
            <h2 className="text-2xl font-semibold">Como chegar</h2>
            <p className="text-base">{cidade} - {estado}</p>
            <p className="text-base">{endereco}</p>
            <Link href={`https://www.google.com/maps/place/${encodeURIComponent(endereco)},+${encodeURIComponent(cidade)}+-+${encodeURIComponent(estado)}/@${latitude},${longitude},17z`} 
              target="_blank" rel="noopener noreferrer" 
              className="text-blue-500 underline">
              Ver no Google Maps
            </Link>
            { iframe ? (
              <div 
                className="min-h-[21rem] h-full"
                dangerouslySetInnerHTML={{ __html: iframe }} />
            ) : (
              <p>Não localizamos o endereço desse representante</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
