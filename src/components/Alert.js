import React from 'react'

function Alert({ message, onClose }) {
  return (
    <div className="alert" role="alert">
      <span>{message}</span>
      <button type="button" className="alert-close" onClick={onClose} aria-label="Dismiss alert">
        &times;
      </button>
    </div>
  )
}

export default Alert