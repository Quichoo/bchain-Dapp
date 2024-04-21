import React from 'react'
import CustomizedSnackbars from './ErrorSnackbar'

describe('<CustomizedSnackbars />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CustomizedSnackbars />)
  })
})