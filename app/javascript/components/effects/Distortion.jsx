import React from 'react'

import PlaySwitch from '../PlaySwitch'
import Slider from '../Slider'
import Knob from '../Knob'
import ToggleSwitch from '../ToggleSwitch'

export default class Distortion extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'distortion'
    const {
      effect,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeDistortionValue
    } = this.props
    return (
      <div>
        <div className="row">
          <ToggleSwitch
            value="Distortion"
            current={on}
            handleClick={toggleEffect}
          />
          <Slider
            name={name}
            min="0"
            max="1"
            value={effect.wet.value}
            handleValueChange={changeEffectWetValue}
          />
          <Slider
            name={name}
            min="0"
            max="100"
            value={effect.distortion}
            handleValueChange={changeDistortionValue}
          />
        </div>
      </div>
    )
  }
}
