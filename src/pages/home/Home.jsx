import React from 'react'
import ManagementSystem from '../../components/management_system/ManagementSystem'
import Organizations from '../../components/organizations/Organizations'
import HowUsing from '../../components/howUsing/HowUsing'
import EducationalManagement from '../../components/educationalManagement/EducationalManagement'

function Home() {
  return (
    <div>
      <ManagementSystem />
      <Organizations />
      <HowUsing />
      <EducationalManagement/>
    </div>
  )
}

export default Home