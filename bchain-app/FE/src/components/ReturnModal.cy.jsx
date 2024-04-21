import React from 'react'
import ReturnModal from './ReturnModal'

describe('<ReturnModal />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ReturnModal />)
  })
})