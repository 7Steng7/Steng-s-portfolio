import React, { useRef } from 'react';

export default function TimonVideo() {
  const videoRef = useRef();

  return (
    <div className="w-60 h-60 max-w-3xl h-auto rounded-lg shadow-md mb-6 mt-6 md:w-96 md:h-96 lg:w-100 lg:h-100">
        <video
            className="w-full h-auto rounded-lg"
            ref={videoRef}
            autoPlay
            muted
            loop={true}
          >
        <source src="/assets/timon.mp4" type="video/mp4" />
        Tu navegador no admite la etiqueta de video.
        </video>
    </div>
  );
}
