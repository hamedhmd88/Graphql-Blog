import React from 'react'
import { TailSpin } from 'react-loader-spinner'

function Loader() {
  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "20px",
      }}
    >
      <TailSpin height="200" width="200" color="grey" ariaLabel="loading" />
    </div>
  )
}

export default Loader
