import React from 'react'
import DashboardSidebar from '../components/DashboardSidebar';
import PhotoManagement from '../components/seller/PhotoManagement';

const SellerDashboard = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <DashboardSidebar />
      <div>
        {/* We will change the pages through switch case here */}
        <PhotoManagement />
      </div>
    </div>
  );
};

export default SellerDashboard;