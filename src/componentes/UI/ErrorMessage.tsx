import React from 'react'

interface ErrorMessageProps {
    message?: string
}

const ErrorMessage = ({ message }: ErrorMessageProps) => <p className="error">{message}</p>

export default ErrorMessage
