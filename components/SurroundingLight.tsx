import React, {
  useEffect,
  useState,
} from 'react';

const SurroundingLight = ({
  setlightingActive,
}: {
  setlightingActive: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}) => {
  const [illuminance, setIlluminance] = useState<
    number | null
  >(null);

  useEffect(() => {
    if ('AmbientLightSensor' in window) {
      try {
        const sensor = new (
          window as any
        ).AmbientLightSensor();
        sensor.addEventListener('reading', () =>
          setIlluminance(sensor.illuminance)
        );
        sensor.start();
        setlightingActive(true);
      } catch (err) {
        console.error(
          'Error accessing ambient light sensor: ',
          err
        );
        setlightingActive(false);
      }
    } else {
      console.log(
        'Ambient Light Sensor is not supported by your browser.'
      );
    }
  }, []);

  return null;
};

export default SurroundingLight;
