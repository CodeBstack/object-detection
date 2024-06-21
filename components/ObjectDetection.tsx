'use client';
import React, {
  useEffect,
  useState,
} from 'react';
import MonitorIcon, {
  MonitorIconSmall,
} from './Vectors/MonitorIcon';
import MicIcon, {
  MicIconSmall,
} from './Vectors/MicIcon';
import WifiIcon, {
  WifiIconSmall,
} from './Vectors/WifiIcon';
import LampIcon, {
  LampIconSmall,
} from './Vectors/LampIcon';
import {
  checkInternetSpeed,
  classifySpeed,
} from '@components/utils';
import Microphone from './MicrophoneDetector';
import WebcamCapture from './WebcamCapture';
import CircularProgressBar from './CircularProgressBar';
import TickCircleIcon from './Vectors/TickCircleIcon';
import DangerIcon from './Vectors/DangerIcon';

const ObjectDetection = () => {
  const [internetSpeed, setInternetSpeed] =
    useState<number | null>(null);
  const [speedCategory, setSpeedCategory] =
    useState<string>('Checking...');

  const [webcamActive, setWebcamActive] =
    useState<boolean>(false);
  const [micActive, setmicActive] =
    useState<boolean>(false);
  const [lightingActive, setlightingActive] =
    useState<boolean>(false);

  useEffect(() => {
    const getSpeed = async () => {
      try {
        const speed = await checkInternetSpeed();
        setInternetSpeed(speed);
        setSpeedCategory(classifySpeed(speed));
      } catch (err) {
        console.error(
          'Error checking internet speed: ',
          err
        );
        setSpeedCategory('Error');
      }
    };

    getSpeed();
  }, []);

  const detections = [
    {
      icon: <MonitorIcon />,
      iconSmall: <MonitorIconSmall />,
      text: 'Webcam',
      isActive: webcamActive ? true : false,
      progress: 100,
    },
    {
      icon: <WifiIcon />,
      iconSmall: <WifiIconSmall />,
      text: 'Speed',
      isActive: internetSpeed ? true : false,
      progress:
        speedCategory === 'Low'
          ? 20
          : speedCategory === 'Medium'
          ? 50
          : 100,
    },
    {
      icon: <MicIcon />,
      iconSmall: <MicIconSmall />,
      text: 'Gadget mic',
      isActive: micActive ? true : false,
      progress: 100,
    },
    {
      icon: <LampIcon />,
      iconSmall: <LampIconSmall />,
      text: 'Lighting',
      isActive: true,
      progress: lightingActive ? 100 : 50,
    },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-[2rem] items-center md:items-start">
        <WebcamCapture
          setWebcamActive={setWebcamActive}
        />

        <div className="grid grid-cols-2 gap-4">
          {detections?.map((el, i) => (
            <div
              key={i}
              className="flex flex-col items-center w-full rounded-[10px] bg-[#F5F3FF] relative p-[9px] px-6"
            >
              <span
                className={`absolute top-[2px] right-[3px] flex rounded-full ${
                  el?.progress <= 30
                    ? 'bg-[#D92D20]'
                    : el?.progress > 30 &&
                      el?.progress < 70
                    ? 'bg-[#FF5F56]'
                    : 'bg-[#755AE2]'
                } w-4 h-4 justify-center items-center`}
              >
                {el?.isActive && el.iconSmall}
              </span>
              <CircularProgressBar
                size={35}
                progress={el?.progress || 0}
                strokeWidth={2.5}
                color={
                  el?.progress <= 30
                    ? '#D92D20'
                    : el?.progress > 30 &&
                      el?.progress < 70
                    ? '#FF5F56 '
                    : '#755AE2'
                }
              >
                {el?.isActive ? (
                  <div
                    className={`flex justify-center items-center w-7 h-7  ${
                      el?.progress <= 30
                        ? 'bg-[#D92D20]/10'
                        : el?.progress > 30 &&
                          el?.progress < 70
                        ? 'bg-[#FF5F56]/10'
                        : 'bg-[#755AE2]'
                    } rounded-full`}
                  >
                    {el.progress < 70 ? (
                      <DangerIcon />
                    ) : (
                      <TickCircleIcon />
                    )}
                  </div>
                ) : (
                  <div className="rounded-full flex justify-center items-center w-[35px] h-[35px] bg-[#E6E0FF]">
                    {el.icon}
                  </div>
                )}
              </CircularProgressBar>
              <p className="mt-1 text-[10px] text-[#4A4A68]">
                {el.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Microphone setmicActive={setmicActive} />

      
    </div>
  );
};

export default ObjectDetection;
