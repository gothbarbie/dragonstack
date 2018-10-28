import React, { Component } from 'react'
import styled from 'styled-components'

import {
  skinny,
  slender,
  sporty,
  stocky,
  patchy,
  plain,
  spotted,
  striped,
} from '../assets'

const DragonStyle = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem;
  display: grid;
  grid-template-rows: 1fr 2fr;
  min-height: 400px;
`

const Traits = styled.div`
  margin-top: 2rem;
`

const DragonWrapper = styled.div`
  width: 100%;
  height: 100%;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  display: flex;
  align-items: center;
  justify-content: center;
`

const DragonBackground = styled.img`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  position: absolute;
  background-color: ${({ backgroundColor }) => backgroundColor};
`

const DragonPattern = styled.img`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  position: absolute;
`

const DragonImage = styled.img`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  position: absolute;
  z-index: 0;
`

const propertyMap = {
  backgroundColor: {
    black: '#263238',
    white: '#cfd8dc',
    green: '#a5d6a7',
    blue: '#0277bd',
  },
  build: { slender, stocky, sporty, skinny },
  pattern: { plain, striped, spotted, patchy },
  size: { small: 100, medium: 130, large: 180, enormous: 240 },
}

class DragonAvatar extends Component {
  get DragonImage() {
    const {
      dragon: { traits },
    } = this.props

    const dragonPropertyMap = {}

    traits.forEach(trait => {
      const { traitType, traitValue } = trait
      dragonPropertyMap[traitType] = propertyMap[traitType][traitValue]
    })

    const { backgroundColor, build, pattern, size } = dragonPropertyMap

    return (
      <DragonWrapper width={size} height={size}>
        <DragonBackground
          width={size}
          height={size}
          backgroundColor={propertyMap.backgroundColor.blue}
        />
        <DragonPattern
          width={size}
          height={size}
          src={propertyMap.pattern.spotted}
        />
        <DragonImage
          width={size}
          height={size}
          src={propertyMap.build.sporty}
        />
      </DragonWrapper>
    )
  }

  render() {
    const {
      dragon: { generationId, dragonId, traits },
    } = this.props

    if (!dragonId) return null

    return (
      <DragonStyle>
        <header>
          <div>Generation: {generationId}</div>
          <div>Dragon: {dragonId}</div>

          <Traits>
            Traits: {traits.map(trait => trait.traitValue).join(', ')}
          </Traits>
        </header>
        <main>{this.DragonImage}</main>
      </DragonStyle>
    )
  }
}

export default DragonAvatar
