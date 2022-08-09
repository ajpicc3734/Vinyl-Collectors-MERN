import { useState, useCallback } from 'react';
import {useDropzone } from 'react-dropzone';
import { Image } from 'cloudinary-react';
import styles from '../../../src/index.css';

export default function Home() {
    const [uploadedFiles, setUploadedFiles] =useState([
        {

        },
    ]);

    const onDrop = useCallback((acceptedFiles) => {
        const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;

        acceptedFiles.forEach(async (acceptedFile) => {
            const { signature, timestamp } = await getSignature();

            const formData = new FormData();
            formData.append("file", acceptedFile);
            formData.append('signature', signature);
            formData.append('timestamp', timestamp);
            formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_KEY);

            const response = await fetch(url, {
                method: "post",
                body: formData,
            });
            const data = await response.json();

            setUploadedFiles((old) => [...old, data]);
        });
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accepts: "image/*",
        multiple: false,
    });

    return (
        <>
        <div
        {...getRootProps()}
        className={`${styles.dropzone} ${isDragActive ? styles.active : null}`}
        >
            <input {...getInputProps()} />
            Drop Zone
            </div>
            <ul>
                {uploadedFiles.map((file) => (
                    <li key={file.public_id}>
                        <Image
                        cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                        publicId={file.public.id}
                        width="100"
                        crop="scale" 
                        />
                    </li>
                ))}
                </ul>
                </>
    );
}

async function getSignature() {
    const response = await fetch("/api/sign");
    const data = await response.json();
    const { signature, timestamp } = data;
    return ( signature, timestamp );
}