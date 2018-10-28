import React, { Component } from 'react'
import styled from 'styled-components'

import Button from './Button'
import DragonAvatar from './DragonAvatar'

const DragonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: center;
  align-items: start;
  grid-gap: 1rem;
`

const DEFAULT_DRAGON = {
  dragonId: '',
  generationId: '',
  nickname: '',
  birthdate: '',
  traits: [],
}

class Dragon extends Component {
  state = { dragon: DEFAULT_DRAGON }

  componentDidMount() {
    this.fetchDragon()
  }

  fetchDragon = () => {
    const API_URL = 'http://localhost:3000/dragon/new'
    fetch(API_URL)
      .then(response => response.json())
      .then(({ dragon }) => this.setState({ dragon }))
      .catch(error => console.error(error))
  }

  render() {
    const { dragon } = this.state

    return (
      <DragonWrapper>
        <Button onClick={this.fetchDragon}>New Dragon</Button>
        <DragonAvatar dragon={dragon} />
      </DragonWrapper>
    )
  }
}

export default Dragon
