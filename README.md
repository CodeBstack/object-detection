# Client-Side Object Detector

## Overview

This application is a client-side object detector built using TensorFlow, Next.js, and TypeScript. It leverages modern web technologies to provide real-time detection of various objects through the user's webcam. Additionally, it checks for microphone availability, internet speed, and surrounding light conditions to ensure optimal performance.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [License](#license)

## Features

- **Real-time Object Detection**: Utilizes TensorFlow.js to perform object detection directly in the browser.
- **Webcam Availability Check**: Ensures the user has a working webcam before proceeding.
- **Microphone Check**: Verifies if a microphone is available for audio input.
- **Internet Speed Test**: Measures the user's internet speed to ensure the application runs smoothly.
- **Ambient Light Check**: Analyzes the surrounding light conditions to adjust the detection settings accordingly.
- **Responsive Design**: Fully responsive and works across various devices and screen sizes.

## Installation

### Prerequisites

- Node.js (>=14.x)
- npm or yarn

### Steps

1. **Clone the repository:**
    ```bash
    git clone [https://github.com/CodeBstack/object-detection.git](https://github.com/CodeBstack/object-detection.git)
    cd object-detection
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. **Open your browser and navigate to:**
    ```
    http://localhost:3000
    ```

## Usage

### Starting the Application

- Once the application is running, it will prompt you to grant access to your webcam and microphone.
- After granting permissions, the application will perform an internet speed test and check the ambient light conditions.
- If all checks are passed, the object detection will start automatically.

### Object Detection

- The application will display a live feed from your webcam.
- Detected objects will be highlighted and labeled in real-time.

### Configuration

- Configuration settings can be adjusted in the `config.ts` file.
- You can modify parameters such as detection sensitivity, minimum internet speed requirement, and more.


## Dependencies

- **TensorFlow.js**: For running the object detection model in the browser.
- **Next.js**: For server-side rendering and static site generation.
- **TypeScript**: For type safety and better development experience.
- **React**: For building the user interface.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---



