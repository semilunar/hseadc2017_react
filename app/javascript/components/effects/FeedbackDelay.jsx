import React from 'react'

import PlaySwitch from '../PlaySwitch'
import Slider from '../Slider'
import Knob from '../Knob'
import ToggleSwitch from '../ToggleSwitch'

export default class FeedbackDelay extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'feedbackDelay'
    const {
      effect,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeFeedbackDelayValue
    } = this.props
    return (
      <div>
        <div className="row">
          <ToggleSwitch
            value="Feedback Delay"
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
            value={effect.maxDelay}
            handleValueChange={changeFeedbackDelayValue}
          />
        </div>
      </div>
    )
  }
}
