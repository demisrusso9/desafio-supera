import React from 'react'
import { Header } from './styles'

const MainHeader = ({ title, children }) => (
   <Header>
      {children}
      <h1>{title}</h1>
   </Header>
)

export default MainHeader
