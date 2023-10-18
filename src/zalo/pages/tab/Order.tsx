import Dashboard from '@components/dashboard/default'
import React from 'react'
import { Header, Page } from 'zmp-ui'

function Order() {
  return (
    <Page hideScrollbar={true} className=" flex-1 flex flex-col bg-white">
      <Dashboard />
    </Page>
  )
}

export default Order