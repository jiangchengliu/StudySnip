import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import "../styles/Import.css"

export function ImportBox({ open, onClose }) {
    const onDrop = useCallback((imported) => {
        imported.forEach((file) => {
            const reader = new FileReader()

            reader.onabort = () => console.log("reading files aborted")
            reader.onerror = () => console.log("Error occured while reading files")
            reader.onload = () => {
                // for now just print out contents
                const contents = reader.result
                console.log(contents)
            }
            reader.readAsArrayBuffer(file)
            const preview = URL.createObjectURL(file)
            setPreview(preview)
        })
    }, []);

    const [preview, setPreview] = useState(null)

    const {getRootProps, getInputProps, isDragActive} = useDropzone(
        {onDrop,
        accept:'video/*'
        })
    
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('dialog-overlay')) {
            onClose();
        }
    }

    return open ? (
        <div className="dialog-overlay" onClick={handleOverlayClick}>
            <div className="dialog">
                <div className="dialog-header">
                    <h2>Import Videos</h2>
                    <button className="close-button" onClick={onClose}>X</button>
                </div>
                <div className="dialog-content">
                    {preview ? (
                        <video width={400} controls>
                            <source src={preview} type='video/mp4' />
                        </video>
                    ) : (
                        <div className="drop" {...getRootProps()}>
                            <input {...getInputProps()} />
                            {isDragActive ? (
                                <p>Drop the video files here ...</p>
                            ) : (
                                <p>Drag 'n' drop some video files here, or click to select files</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    ) : (
        null
    )
}