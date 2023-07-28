import React from 'react'
import { Header } from 'semantic-ui-react'

function MainHeader({title,htype="h1"}) {
  return (
    <Header as={htype} textAlign='center'>{title}</Header>
  )
}

export default MainHeader