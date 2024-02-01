import React from 'react'

import ManagementSystem from '../../components/management_system/ManagementSystem'
import Organizations from '../../components/organizations/Organizations'
import HowUsing from '../../components/howUsing/HowUsing'
import EducationalManagement from '../../components/educationalManagement/EducationalManagement'
import Commentaries from '../../components/commentaries/Commentaries'
import LMSIntegration from '../../components/LMSIntegration/LMSIntegration'

function Home() {
  return (
    <div>
      <ManagementSystem />
      <Organizations />
      <HowUsing />
      <EducationalManagement/>
      <Commentaries/>
      <LMSIntegration/>
    </div>
  )
}

export default Home