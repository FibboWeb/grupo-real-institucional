'use client';

import BtnCallToAction from '@/components/Layout/Buttons/BtnCallToAction/BtnCallToAction';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

type Props = {
  endereco: string,
  cidade: string,
  estado: string,
  latitude: string,
  longitude: string,
  iframe: string
}

function hasValue(value?: string) {
  return Boolean(value && String(value).trim());
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

  const query = [endereco, cidade, estado].filter(hasValue).join(', ');
  const mapsPlaceUrl = hasValue(latitude) && hasValue(longitude)
    ? `https://www.google.com/maps/place/${encodeURIComponent(query)}/@${latitude},${longitude},17z`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  const mapsEmbedUrl = hasValue(latitude) && hasValue(longitude)
    ? `https://maps.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`
    : `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=16&output=embed`;

  return (
    <div className="">
      <BtnCallToAction
        content="Como chegar"
        classCssForBTN="p-2 text-sm"
        showIcon={false}
        onClick={() => setShowModal(!showModal)}
      />
      {showModal && (
        <div className="fixed inset-0 pt-14 bottom-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            ref={modalRef}
            className="flex flex-col gap-2 bg-white w-fit rounded-md p-4"
            style={{
              width: '90vw',
              height: 'calc(100vh - 20vh)',
            }}
          >
            <h2 className="text-2xl font-semibold">Como chegar</h2>
            <p className="text-base">{cidade} - {estado}</p>
            <p className="text-base">{endereco}</p>
            <Link
              href={mapsPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Ver no Google Maps
            </Link>
            {hasValue(iframe) ? (
              <div
                className="min-h-[21rem] h-full [&_iframe]:h-full [&_iframe]:w-full"
                dangerouslySetInnerHTML={{ __html: iframe }}
              />
            ) : query ? (
              <iframe
                title={`Mapa de ${query}`}
                src={mapsEmbedUrl}
                className="min-h-[21rem] h-full w-full border-0 rounded-md"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <p>Não localizamos o endereço desse representante</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
