import React from 'react'

import Slider from '../controls/Slider'
import BpmSlider from '../controls/BpmSlider'
import ToggleSwitch from '../controls/ToggleSwitch'
import PlaySwitch from '../controls/PlaySwitch'
import Knob from '../controls/Knob'

export default class Reverb extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'reverb'
    const {
      effect,
      on,
      changeEffectWetValue,
      changeFrequencyChorus,
      toggleEffect,
      changeDecayReverb,
      changePreDelayReverb
    } = this.props
    return (
      <div className="Effect">
        <h1>Reverb</h1>
        <ToggleSwitch current={on} handleClick={toggleEffect} value="Reverb" />
        Wet Value
        <Slider
          name={name}
          min="0"
          max="1"
          value={effect.wet.value}
          handleValueChange={changeEffectWetValue}
        />
        Decay
        <Knob
          min="-2"
          max="2"
          value={effect.decay}
          handleValueChange={changeDecayReverb}
        />
        Pre Delay
        <Knob
          min="-1"
          max="1"
          value={effect.preDelay}
          handleValueChange={changePreDelayReverb}
        />
      </div>
    )
  }
}
