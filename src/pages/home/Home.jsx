import React from 'react'
import ManagementSystem from '../../components/management_system/ManagementSystem'
import Organizations from '../../components/organizations/Organizations'
import HowUsing from '../../components/howUsing/HowUsing'

function Home() {
  return (
    <div>
      <ManagementSystem />
      <Organizations />
      <HowUsing />
    </div>
  )
}

export default Home