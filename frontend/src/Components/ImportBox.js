import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export function ImportBox() {
    const onDrop = useCallback((imported) => {
        console.log(imported)
    }, []);

    
    return;
}