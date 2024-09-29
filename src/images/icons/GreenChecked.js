import React from 'react'

const GreenChecked = ({className}) => {
    return (
        <svg className={className} width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6.5" r="6" fill="#28A820" />
            <path d="M3.66675 7.16602L4.83341 8.33268L8.33341 4.66602" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default GreenChecked;