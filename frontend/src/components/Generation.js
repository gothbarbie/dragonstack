import React, { Component } from 'react'

const Generation = ({ expiration, generationId }) => {
  return (
    <div>
      <h3>Generation {generationId}. Expires on:</h3>
      <h4>{new Date(expiration).toString()}</h4>
    </div>
  )
}

export default Generation
