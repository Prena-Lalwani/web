import "./ContactForm.css"
import React from 'react'

export default function () {
  return (
    <div className="form-container">
        <h1>Send a message to US!</h1>
        <form >
            <input placeholder="Name" />
            <input placeholder="Email" />
            <input placeholder="Subject" />
            <textarea placeholder="Message" rows="4"></textarea>
            <button>Send Message</button>
        </form>
    </div>
  )
}
