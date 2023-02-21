import React, { useMemo } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import classes from './Map.module.scss'

export const Map: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyA0FlK9kS-V67eb9SEj1kH3JeYw12GY2tw',
  })

  const center = useMemo(() => ({ lat: 40.6530696, lng: -73.8708574 }), [])

  return (
    <div className={classes.map}>
      <div className={classes.mapWrapper}>
        {isLoaded ? (
          <GoogleMap
            zoom={16}
            center={center}
            mapContainerClassName={classes.map}
          >
            <Marker position={center} />
          </GoogleMap>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
