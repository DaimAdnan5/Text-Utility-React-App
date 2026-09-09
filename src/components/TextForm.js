import React, { useState } from 'react'

export default function TextForm({ onSuccess }) {
  const [text, setText] = useState('')

  const handleChange = (event) => {
    setText(event.target.value)
  }

  const handleCapitalize = () => {
    setText(text.toLowerCase().replace(/\b\w/g, (character) => character.toUpperCase()))
    onSuccess('Text capitalized successfully.')
  }

  const handleUppercase = () => {
    setText(text.toUpperCase())
    onSuccess('Text converted to uppercase successfully.')
  }

  const handleLowercase = () => {
    setText(text.toLowerCase())
    onSuccess('Text converted to lowercase successfully.')
  }

  const handleClear = () => {
    setText('')
    onSuccess('Text cleared successfully.')
  }

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0

  return (
    <section className="text-form" aria-labelledby="text-form-title">
      <h1 id="text-form-title">Enter your text</h1>
      <label htmlFor="text-input">Write something below</label>
      <textarea
        id="text-input"
        value={text}
        onChange={handleChange}
        placeholder="Type your text here..."
        rows="8"
      />
      <div className="text-form-summary" aria-live="polite">
        <span>{text.length} characters</span>
        <span>{wordCount} words</span>
      </div>
      <div className="text-form-actions">
        <button type="button" onClick={handleCapitalize} disabled={!text}>
          Capitalize
        </button>
        <button type="button" onClick={handleUppercase} disabled={!text}>
          UPPERCASE
        </button>
        <button type="button" onClick={handleLowercase} disabled={!text}>
          lowercase
        </button>
        <button type="button" onClick={handleClear} disabled={!text}>
          Clear
        </button>
      </div>
    </section>
  )
}
