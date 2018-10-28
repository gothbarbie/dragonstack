import React, { Component } from 'react'

const DEFAULT_GENERATION = { generationId: '', expiration: '' }
const MINIMUM_DELAY = 3000

class Generation extends Component {
  state = {
    generation: DEFAULT_GENERATION,
  }

  timer = null

  componentDidMount() {
    this.fetchNextGeneration()
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  fetchGeneration = () => {
    const API_URL = 'http://localhost:3000/generation'
    fetch(API_URL)
      .then(response =>
        response
          .json()
          .then(({ generation }) => this.setState({ generation }))
          .catch(error => console.error(error))
      )
      .catch(error => console.error(error))
  }

  fetchNextGeneration = () => {
    this.fetchGeneration()

    const {
      generation: { expiration },
    } = this.state

    // Delay by Expiration - Now
    let delay = new Date(expiration).getTime() - new Date().getTime()

    // Make sure delay is never too small
    if (delay < MINIMUM_DELAY) {
      delay = MINIMUM_DELAY
    }

    this.timer = setTimeout(() => this.fetchNextGeneration(), delay)
  }

  render() {
    const { generation } = this.state
    return (
      <div>
        <h3>Generation {generation.generationId}. Expires on:</h3>
        <h4>{new Date(generation.expiration).toString()}</h4>
      </div>
    )
  }
}

export default Generation
