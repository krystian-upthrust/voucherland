import React from 'react'

export default function CountdownElement({count_number, count_name}) {
  return (
    <div className="countdown_element">
        <div className="count_number">{count_number}</div>
        <p className="count_name">{count_name}</p>
    </div>
  )
}