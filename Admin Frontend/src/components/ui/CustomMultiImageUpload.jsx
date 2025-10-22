import React, { useState, useRef, useEffect } from "react";
import { PhotoIcon, XMarkIcon } from "@heroicons/react/24/solid";

const CustomMultiImageUpload = ({ label }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Clean up the object URLs to avoid memory leaks
    return () => {
      previewUrls.forEach(url => {
        URL.revokeObjectURL(url);
      });
    };
  }, [previewUrls]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      const newImages = [...selectedImages, ...files];
      setSelectedImages(newImages);
      
      // Create preview URLs for new files
      const newPreviewUrls = files.map(file => URL.createObjectURL(file));
      setPreviewUrls(prev => [...prev, ...newPreviewUrls]);
    }
  };

  const handleRemoveImage = (indexToRemove) => {
    // Revoke the object URL for the removed image
    URL.revokeObjectURL(previewUrls[indexToRemove]);
    
    setSelectedImages(prev => prev.filter((_, index) => index !== indexToRemove));
    setPreviewUrls(prev => prev.filter((_, index) => index !== indexToRemove));
    
    // Reset file input to allow selecting same files again
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);

    const files = Array.from(event.dataTransfer.files).filter(file => 
      file.type.startsWith('image/')
    );
    
    if (files.length > 0) {
      const newImages = [...selectedImages, ...files];
      setSelectedImages(newImages);
      
      const newPreviewUrls = files.map(file => URL.createObjectURL(file));
      setPreviewUrls(prev => [...prev, ...newPreviewUrls]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const Dropzone = ({ isVisible }) => {
    if (!isVisible) return null;

    return (
      <div 
        className={`mt-4 flex justify-center rounded-lg border border-dashed px-6 py-10 dark:border-white/25 cursor-pointer ${
          dragActive ? "border-indigo-600 dark:border-indigo-400" : "border-gray-900/25"
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="text-center">
          <PhotoIcon
            aria-hidden="true"
            className="mx-auto size-12 text-gray-300 dark:text-gray-500"
          />
          <div className="mt-4 flex text-sm/6 text-gray-600 dark:text-gray-400">
            <label
              htmlFor="file-upload-multi"
              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600 hover:text-indigo-500 dark:bg-transparent dark:text-indigo-400 dark:focus-within:outline-indigo-500 dark:hover:text-indigo-400"
            >
              <span>{previewUrls.length > 0 ? "Add more files" : "Upload files"}</span>
              <input
                ref={fileInputRef}
                id="file-upload-multi"
                name="file-upload-multi"
                type="file"
                className="sr-only"
                onChange={handleFileChange}
                accept="image/png, image/jpeg, image/gif"
                multiple
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs/5 text-gray-600 dark:text-gray-400">
            PNG, JPG, GIF up to 10MB each
          </p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <label className="block text-sm/6 font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      
      
      <div className="mt-2">
        {previewUrls.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {previewUrls.map((url, index) => (
              <div key={index} className="relative rounded-lg border border-gray-300 dark:border-gray-600 p-3">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-medium text-gray-900 dark:text-white truncate">
                    {selectedImages[index]?.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="rounded-full p-1 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors shrink-0 ml-2"
                  >
                    <XMarkIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
                <div className="flex justify-center">
                  <img
                    src={url}
                    alt={`Preview ${index + 1}`}
                    className="h-32 w-full rounded-md object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
        
        <Dropzone isVisible={true} />
      </div>
    </div>
  );
};

export default CustomMultiImageUpload;