import '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';

import Image from 'next/image';
import React, {
  useRef,
  useEffect,
  useState,
} from 'react';
import { titleCase } from '@components/utils';
import Modal from './Modal';
interface Props {
  setWebcamActive: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

const WebcamCapture = ({
  setWebcamActive,
}: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef =
    useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const [openProceedModal, setOpenProceedModal] =
    useState(false);

  const [isCaptured, setIsCaptured] =
    useState<boolean>(false);
  const [photo, setPhoto] = useState<
    string | null
  >(null);
  const [predictions, setPredictions] = useState<
    cocoSsd.DetectedObject[]
  >([]);
  const [isLoading, setLoading] = useState(false);

  // check if there are predictions
  const isEmptyPredictions =
    !predictions || predictions.length === 0;

  useEffect(() => {
    // starting the webcam
    const getVideo = async () => {
      try {
        const stream =
          await navigator.mediaDevices.getUserMedia(
            { video: true }
          );
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setWebcamActive(true);
        }
      } catch (err) {
        console.error(
          'Error accessing webcam: ',
          err
        );
        setWebcamActive(false);
      }
    };

    getVideo();
  }, [isCaptured, setWebcamActive]);

  // func to detect capture image with tensorflow and cocossd
  const detectObjectsOnImage = async (
    imageElement: HTMLImageElement
  ) => {
    const model = await cocoSsd.load({});
    const detectedPredictions =
      await model.detect(imageElement, 6);

    setPredictions(detectedPredictions);
    setLoading(false);
    setOpenProceedModal(false);
  };

  // func to take picture
  const capturePhoto = () => {
    // check if the canvas and video elements are not null
    if (canvasRef.current && videoRef.current) {
      const context =
        canvasRef.current.getContext('2d');
      if (context) {
        context.drawImage(
          videoRef.current,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        const image =
          canvasRef.current.toDataURL(
            'image/png'
          );
        setPhoto(image);
        setOpenProceedModal(true);
        setPredictions([]);
        setIsCaptured(true);
      }
    }
  };

  // func to retake photo
  const retakePhoto = () => {
    setPredictions([]);
    setIsCaptured(false);
    setPhoto(null);
  };

  // manipulating the predictions in string values
  const detectedObjects = predictions?.map((el) =>
    titleCase(el?.class)
  );

  return (
    <>
      {isLoading ? (
        <div
          className={`flex justify-center items-center italic font-medium text-sm w-[275px] h-[168px] border border-[#755AE2] rounded-[10px]`}
        >
          <Image
            ref={imageRef}
            src={photo || ''}
            alt="Captured"
            width="275"
            height="168"
            className="w-full h-full rounded-[10px]"
          />
        </div>
      ) : !isCaptured ? (
        <div>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            width="275"
            height="168"
            className="border bg-white border-[#755AE2] rounded-[10px]"
          />
          <button
            type="button"
            className="rounded-lg mt-5 md:mt-10 bg-[#755AE2] hover:bg-[#755AE2]/80 px-4 py-3 text-white font-medium text-sm"
            onClick={capturePhoto}
          >
            Take picture and continue
          </button>
          <canvas
            ref={canvasRef}
            width="275"
            height="168"
            style={{ display: 'none' }}
          />
        </div>
      ) : (
        <div>
          <canvas
            ref={canvasRef}
            width="275"
            height="168"
            style={{ display: 'none' }}
          />
          {photo && (
            <div
              className={`w-[275px] h-[168px]  ${
                (predictions?.length > 0 ||
                  isEmptyPredictions) &&
                !openProceedModal
                  ? 'border-[#FF0000] border-[3px]'
                  : 'border border-[#755AE2]'
              } rounded-[13px] relative`}
            >
              {(predictions?.length > 0 ||
                isEmptyPredictions) &&
                !openProceedModal && (
                  <span className="absolute top-1 left-[6px] px-2.5 py-1.5 font-medium text-[10px] rounded-md bg-[#FF0000]/40 text-white">
                    {isEmptyPredictions &&
                    !isLoading
                      ? 'No object detected'
                      : `${detectedObjects?.join(
                          ' and '
                        )} detected`}
                  </span>
                )}
              <Image
                ref={imageRef}
                src={photo}
                alt="Captured"
                width="275"
                height="168"
                className="w-full h-full rounded-[10px]"
              />
            </div>
          )}
          <button
            type="button"
            className="rounded-lg mt-5 md:mt-10 bg-[#755AE2] hover:bg-[#755AE2]/80 px-4 py-3 text-white font-medium text-sm"
            onClick={retakePhoto}
          >
            Retake picture
          </button>
        </div>
      )}

      <Modal
        title="Start assessment"
        isOpen={openProceedModal}
        close={() => setOpenProceedModal(false)}
      >
        <div className="p-4 flex flex-col md:py-8 bg-[#F5F3FF] items-center justify-center text-center">
          <p className="font-medium text-lg md:text-xl text-[#755AE2]">
            Proceed to start assessment
          </p>
          <p className="text-sm text-[#675E8B] mt-1.5">
            Kindly keep to the rules of the
            assessment and sit up, stay in front
            of your camera/webcam and start your
            assessment.
          </p>
        </div>

        <div className="rounded-b-[18px] flex justify-end p-5 bg-white">
          <button
            type="button"
            className="px-10 py-3 rounded-md text-base font-semibold text-white bg-[#755AE2] hover:bg-[#755AE2]/70"
            onClick={async () => {
              setLoading(true);

              // if we have the photo string, create a new image element
              if (photo) {
                const imageElement =
                  document.createElement('img');
                imageElement.src = photo;

                // once the image element loads, it calls the func to detect the image.
                imageElement.onload =
                  async () => {
                    await detectObjectsOnImage(
                      imageElement
                    );
                  };
              }
            }}
          >
            {isLoading ? 'Loading...' : 'Proceed'}
          </button>
        </div>
      </Modal>
    </>
  );
};

export default WebcamCapture;
