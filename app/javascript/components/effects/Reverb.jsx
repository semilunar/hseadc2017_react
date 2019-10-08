import React from 'react'

import PlaySwitch from '../PlaySwitch'
import Slider from '../Slider'
import Knob from '../Knob'
import ToggleSwitch from '../ToggleSwitch'

export default class Reverb extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'reverb'
    const {
      effect,
      on,
      wet,
      toggleEffect,
      changeEffectWetValue,
      changeReverbValue
    } = this.props

    return (
      <div>
        <div className="row">
          <ToggleSwitch
            value="Reverb"
            current={on}
            handleClick={toggleEffect}
          />
          <Slider
            name={name}
            min="0"
            max="1"
            value={wet}
            handleValueChange={changeEffectWetValue}
          />
          <Slider
            name={name}
            min="0.01"
            max="0.05"
            on={on}
            value={effect.preDelay}
            handleValueChange={changeReverbValue}
          />
        </div>
      </div>
    )
  }
}
