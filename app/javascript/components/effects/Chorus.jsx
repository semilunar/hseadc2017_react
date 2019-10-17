import React from 'react'

import Slider from '../controls/Slider'
import BpmSlider from '../controls/BpmSlider'
import ToggleSwitch from '../controls/ToggleSwitch'
import PlaySwitch from '../controls/PlaySwitch'
import Knob from '../controls/Knob'

export default class Chorus extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'chorus'
    const {
      effect,
      on,
      changeEffectWetValue,
      changeFrequencyChorus,
      toggleEffect
    } = this.props
    return (
      <div className="Effect">
        <h1>Chorus</h1>
        <ToggleSwitch current={on} handleClick={toggleEffect} value="Chorus" />
        Wet Value
        <Slider
          name={name}
          min="0"
          max="1"
          value={effect.wet.value}
          handleValueChange={changeEffectWetValue}
        />
        Change Frequency
        <Knob
          min="-50"
          max="50"
          value={effect.frequency.value}
          handleValueChange={changeFrequencyChorus}
        />
      </div>
    )
  }
}
