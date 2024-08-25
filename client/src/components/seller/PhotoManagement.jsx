import React from 'react'
import DashboardHeader from '../DashboardHeader'
import ImageAdd from '../ImageAdd'

const PhotoManagement = () => {
  return <div className="flex flex-col sm:flex-row">
    <div>
        {/* Dashboard header will be here */}
        <DashboardHeader />
        {/* Image and component will be here */}
        <ImageAdd />
    </div>
  </div>
}

export default PhotoManagement