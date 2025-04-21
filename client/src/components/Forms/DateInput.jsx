import React from 'react'

const DateInput = ({ label, name, value, onChange, placeholder, required = false }) => {
    return (
        <div className="mb-6">
            <label htmlFor={name} className="block text-sm font-medium text-gray-800 mb-2">
                {label}
            </label>
            <input
                type="date"
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className="w-full px-5 py-3 bg-white border border-gray-200 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all text-gray-700 placeholder:text-gray-400"
            />
        </div>
    )
}

export default DateInput
