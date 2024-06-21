// import React, {
//   useEffect,
//   useState,
// } from 'react';

// const SurroundingLight = ({
//   setlightingActive,
// }: {
//   setlightingActive: React.Dispatch<
//     React.SetStateAction<boolean>
//   >;
// }) => {
//   const [illuminance, setIlluminance] = useState<
//     number | null
//   >(null);

//   useEffect(() => {
//     if ('AmbientLightSensor' in window) {
//       try {
//         const sensor = new (
//           window as any
//         ).AmbientLightSensor();
//         sensor.addEventListener('reading', () =>
//           setIlluminance(sensor.illuminance)
//         );
//         sensor.start();
//         setlightingActive(true);
//       } catch (err) {
//         console.error(
//           'Error accessing ambient light sensor: ',
//           err
//         );
//         setlightingActive(false);
//       }
//     } else {
//       console.log(
//         'Ambient Light Sensor is not supported by your browser.'
//       );
//     }
//   }, []);

//   return (
//     <div>
//       {illuminance !== null
//         ? `Illuminance: ${illuminance} lux`
//         : 'Ambient Light Sensor is not supported'}
//     </div>
//   );
// };

// export default SurroundingLight;

import React, { useEffect, useState } from 'react';
import '../utils/ambient-light-sensor.d.ts';

const AmbientLightSensorComponent: React.FC = () => {
  const [illuminance, setIlluminance] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if ('AmbientLightSensor' in window) {
      try {
        const sensor = new AmbientLightSensor();
        
        sensor.onreading = () => {
          setIlluminance(sensor.illuminance);
        };
        
        sensor.onerror = (event) => {
          setError(`Sensor error: ${(event as any).error.name}`);
        };
        
        sensor.start();
      } catch (err) {
        setError(`Sensor initialization error: ${(err as Error).message}`);
      }
    } else {
      setError('Ambient Light Sensor is not supported by your browser.');
    }
  }, []);

  return (
    <div>
      <h1>Ambient Light Sensor</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <p>Illuminance: {illuminance !== null ? `${illuminance} lux` : 'Loading...'}</p>
      )}
    </div>
  );
};

export default AmbientLightSensorComponent;

