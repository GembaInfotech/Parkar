

import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const MapScreen = ({ data, selected }) => {
  const mapContainerRef = useRef(null);
  const [selectedParking, setSelectedParking] = useState(null);

  useEffect(() => {
    const loader = new Loader({
        apiKey: 'AIzaSyCMUg_czDN7SYaq3YD-U5YXP8p4fpTkuyw',
        version: 'weekly',
    });

    loader.load().then(async () => {
      const google = window.google;
      const map = new google.maps.Map(mapContainerRef.current, {
        center: { lat: data[0].location.coordinates[0], lng: data[0].location.coordinates[1] },
        zoom: 16,
      });

      let infoWindow;

      if (selected) {
        const { location, name } = selected;
        const lat = location.coordinates[0];
        const lng = location.coordinates[1];
        const coordinates = { lat, lng };
        const marker = new google.maps.Marker({
          position: coordinates,
          map: map,
          title: selected.name,
        });

        const content = `<div class="bg-white rounded-lg shadow-lg p-1 w-48">
          <h1 class="text-lg font-bold">${selected.name}</h1>
          <h3 class="text-sm font-semibold">${selected.address_line1},</h3>
          <h3 class="text-sm font-semibold">${selected.city},</h3>
          <h3 class="text-sm font-semibold">${selected.pincode}</h3>
        </div>`;
        
        infoWindow = new google.maps.InfoWindow({ content });
        infoWindow.open(map, marker);

        marker.addListener('mouseover', () => {
          infoWindow.open(map, marker);
          setSelectedParking(selected);
        });
      }

      data.forEach(markerInfo => {
        const lat = markerInfo.location.coordinates[0];
        const lng = markerInfo.location.coordinates[1];
        const coordinates = { lat, lng };
        const marker = new google.maps.Marker({
          position: coordinates,
          map: map,
          title: markerInfo.name,
        });

        marker.addListener('mouseover', () => {
          const content = `<div class="bg-white rounded-lg shadow-lg p-1 w-64">
            <h1 class="text-lg font-bold">${markerInfo.name}</h1>
            <h3 class="text-sm font-semibold">${markerInfo.address_line1},</h3>
            <h3 class="text-sm font-semibold">${markerInfo.city},</h3>
            <h3 class="text-sm font-semibold">${markerInfo.pincode}</h3>
          </div>`;
          
          infoWindow = new google.maps.InfoWindow({ content });
          infoWindow.open(map, marker);
          setSelectedParking(markerInfo);
        });

        marker.addListener('mouseout', () => {
          infoWindow.close();
        });
      });
    });
  }, [data, selected]);

  return <div ref={mapContainerRef} className='w-full h-full' />;
};

export default MapScreen;
