import React from 'react';

const FileInput = ({ label, name, onChange, required = false, accept, multiple = false }) => {
    return (
        <div className="mb-6">
            {label && (
                <label htmlFor={name} className="block text-sm font-medium text-gray-800 mb-2">
                    {label}
                </label>
            )}
            <input
                type="file"
                name={name}
                id={name}
                onChange={onChange}
                required={required}
                accept={accept}
                multiple={multiple}
                className="block w-full text-sm text-gray-700 bg-white border border-gray-200 rounded-2xl shadow-md file:px-4 file:py-2 file:mr-4 file:border-0 file:bg-blue-100 file:text-blue-700 file:rounded-xl hover:file:bg-blue-200 transition-all cursor-pointer"
            />
        </div>
    );
};

export default FileInput;
