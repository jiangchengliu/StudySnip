import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import "../styles/Import.css"

export function ImportBox() {
    const onDrop = useCallback((imported) => {
        console.log(imported)
    }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone(
        {onDrop,
        accept:'video/*'
        })

    return (
        <div className='drop' {...getRootProps()}>
            <input {...getInputProps()}/>
            {isDragActive ? (
            <p>Drop the video files here ...</p>
          ) : (
            <p>Drag 'n' drop some video files here, or click to select files</p>
      )}
        </div>
    )
}