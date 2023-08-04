import React from 'react'
import MapAPI from '../components/map'

const home = () => {
  return (
    <>
    <div className="content-wrapper">
      <div className="content">
        <div>
          <div className="row">
            <div className="col-lg-12">
              <MapAPI/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default home