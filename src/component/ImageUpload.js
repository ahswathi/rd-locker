import React, { useRef, useState } from 'react';
import Styles from '../component/Style.module.css';

const ImageUpload = () => {
    const videoRef = useRef();
    const [isStreaming, setIsStreaming] = useState(false);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = stream;
            videoRef.current.play();
            setIsStreaming(true);
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    };

    const stopCamera = () => {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach(track => track.stop());
        videoRef.current.srcObject = null;
        setIsStreaming(false);
    };

    const captureImage = () => {
        const canvas = document.createElement('canvas');
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        canvas.getContext('2d').drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const imageUrl = canvas.toDataURL('image/jpeg');
        // console.log('Captured image URL:', imageUrl);
        // Do something with the captured image URL, like displaying it in an <img> element
    };

    return (
        <div className={Styles.imageUploadBox}>
            <div>
                <video ref={videoRef} width="400" height="300" />
            </div>
            <div>
                {!isStreaming && <button onClick={startCamera}>Start Camera</button>}
                {isStreaming && <button onClick={stopCamera}>Stop Camera</button>}
                {isStreaming && <button onClick={captureImage}>Capture Image</button>}
            </div>
        </div>
    );
};

export default ImageUpload;
