import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'
import ButtonSet from '../controls/ButtonSet'

export default class Chorus extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'chorus'
    const {
      effect,
      on,
      wet,
      toggleEffect,
      changeEffectWetValue,
      changeChorusValue
    } = this.props

    return (
      <div>
        <div className="row">
          <ToggleSwitch
            value="Chorus"
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
            min="2"
            max="20"
            on={on}
            value={effect.delayTime}
            handleValueChange={changeChorusValue}
          />
        </div>
      </div>
    )
  }
}
