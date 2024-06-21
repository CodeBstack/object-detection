import React, {
  useEffect,
  // useState,
} from 'react';

const Microphone = ({
  setmicActive,
}: {
  setmicActive: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}) => {
  // const [audioStream, setAudioStream] =
  //   useState<MediaStream | null>(null);

  useEffect(() => {
    const getAudio = async () => {
      try {
        const stream =
          await navigator.mediaDevices.getUserMedia(
            { audio: true }
          );
        // setAudioStream(stream);
        setmicActive(true);
      } catch (err) {
        console.error(
          'Error accessing microphone: ',
          err
        );
        setmicActive(false);
      }
    };

    getAudio();
  }, [setmicActive]);

  return null;
};

export default Microphone;
