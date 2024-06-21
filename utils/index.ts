export const checkInternetSpeed =
  async (): Promise<number> => {
    const image = new Image();
    const startTime = new Date().getTime();
    const url =
      'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png?rand=' +
      startTime;

    return new Promise((resolve, reject) => {
      image.onload = () => {
        const endTime = new Date().getTime();
        const duration = endTime - startTime;
        const bitsLoaded = 499537 * 8; // Size of the image in bits
        const speedBps =
          (bitsLoaded / duration) * 1000;
        const speedKbps = speedBps / 1024;
        resolve(speedKbps);
      };

      image.onerror = (err) => reject(err);

      image.src = url;
    });
  };

export const classifySpeed = (
  speedKbps: number
): string => {
  const speedMbps = speedKbps / 1024;
  if (speedMbps < 1) {
    return 'Low';
  } else if (speedMbps >= 1 && speedMbps <= 10) {
    return 'Medium';
  } else {
    return 'High';
  }
};

// capitalize first letter of each word in a sentence
export function titleCase(str:string) {
  var splitStr = str?.toLowerCase()?.split(' ');
  for (var i = 0; i < splitStr?.length; i++) {
    splitStr[i] =
      splitStr[i]?.charAt(0)?.toUpperCase() +
      splitStr[i]?.substring(1);
  }
  return splitStr?.join(' ');
}
