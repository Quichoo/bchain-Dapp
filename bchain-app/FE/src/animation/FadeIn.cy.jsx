import React from 'react'
import FadeIn from './FadeIn'

describe('<FadeIn />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FadeIn />)
  })
})