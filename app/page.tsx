import ObjectDetection from '@components/components/ObjectDetection';

export default function Home() {
  return (
    <main className="p-4 md:p-6">
      <div className="rounded-xl md:rounded-[20px] bg-white p-4 md:px-12 md:py-9 max-w-[832px] mx-auto">
        <p className="font-medium text-lg md:text-xl text-black mb-2">
          System check
        </p>

        <p className="text-sm text-[#4A4A68] mb-[30px]">
          We utilize your camera image to ensure
          fairness for all participants, and we
          also employ both your camera and
          microphone for a video questions where
          you will be prompted to record a
          response using your camera or webcam, so
          it&apos;s essential to verify that your
          camera and microphone are functioning
          correctly and that you have a stable
          internet connection. To do this, please
          position yourself in front of your
          camera, ensuring that your entire face
          is clearly visible on the screen. This
          includes your forehead, eyes, ears,
          nose, and lips. You can initiate a
          5-second recording of yourself by
          clicking the button below.
        </p>

        <ObjectDetection />


      </div>
    </main>
  );
}
