import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import "../styles/Import.css"

export function ImportBox({ open, onClose }) {
    const onDrop = useCallback((imported) => {
        console.log(imported)
    }, []);

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
                    <div className="drop" {...getRootProps()}>
                        <input {...getInputProps()} />
                        {isDragActive ? (
                            <p>Drop the video files here ...</p>
                        ) : (
                            <p>Drag 'n' drop some video files here, or click to select files</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    ) : (
        null
    )
}