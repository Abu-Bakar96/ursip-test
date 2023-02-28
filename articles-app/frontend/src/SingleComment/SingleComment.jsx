import React from 'react'

function SingleComment({text, user}) {
  return (
    <div>
      <div className="card card-body mb-5" style={{ width: '1000px' }}>
        <p style={{ fontSize: '25px', fontWeight: '500' }}>{user}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default SingleComment
