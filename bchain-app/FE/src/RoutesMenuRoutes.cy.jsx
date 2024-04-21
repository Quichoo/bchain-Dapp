import React from 'react'
import MenuRoutes from './Routes'

describe('<MenuRoutes />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MenuRoutes />)
  })
})