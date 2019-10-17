import _ from 'lodash'
import React from 'react'
import Tone from 'tone'

import * as effects from '../tunes/effects'
import * as parts from '../tunes/parts'
import * as synths from '../tunes/synths'
import tune1 from '../tunes/tune1'

import AutoFilter from '../components/effects/AutoFilter'
import AutoPanner from '../components/effects/AutoPanner'
import AutoWah from '../components/effects/AutoWah'
import BitCrusher from '../components/effects/BitCrusher'
import Chebyshev from '../components/effects/Chebyshev'
import Chorus from '../components/effects/Chorus'
import Distortion from '../components/effects/Distortion'
import FeedbackDelay from '../components/effects/FeedbackDelay'
import FeedbackEffect from '../components/effects/FeedbackEffect'
import Freeverb from '../components/effects/Freeverb'
import JcReverb from '../components/effects/JcReverb'
import Phaser from '../components/effects/Phaser'
import PingPongDelay from '../components/effects/PingPongDelay'
import PitchShift from '../components/effects/PitchShift'
import Reverb from '../components/effects/Reverb'
import StereoWidener from '../components/effects/StereoWidener'
import Tremolo from '../components/effects/Tremolo'
import Vibrato from '../components/effects/Vibrato'

import ToneSynth from '../components/synths/ToneSynth'
import NoiseSynth from '../components/synths/NoiseSynth'
import PolySynth from '../components/synths/PolySynth'

export default class Synth extends React.Component {
  constructor(props) {
    super(props)

    console.log(props.wet)

    const defaultWetValue = 0.8

    let rhSynth = synths.polySynth()
    let rhDistortion = effects.distortion()
    let rhFeedbackEffect = effects.feedbackEffect()
    let rhReverb = effects.reverb()
    let rhStereoWidener = effects.stereoWidener()
    let rhTremolo = effects.tremolo()
    let rhVibrato = effects.vibrato()

    let ambientSynth = synths.toneSynth()
    let ambientAutoFilter = effects.autoFilter()
    let ambientChorus = effects.chorus()
    let ambientDistortion = effects.distortion()
    let ambientFeedbackDelay = effects.feedbackDelay()
    let ambientFreeverb = effects.freeverb()
    let ambientPhaser = effects.phaser()
    let ambientPingPongDelay = effects.pingPongDelay()

    let leadSynth = synths.polySynth()
    let leadAutoPanner = effects.autoPanner()
    let leadAutoWah = effects.autoWah()
    let leadBitCrusher = effects.bitCrusher()
    let leadChebyshev = effects.chebyshev()
    let leadDistortion = effects.distortion()
    let leadFeedbackEffect = effects.feedbackEffect()
    let leadJcReverb = effects.jcReverb()
    let leadPitchShift = effects.pitchShift()
    let leadReverb = effects.reverb()
    let leadStereoWidener = effects.stereoWidener()
    let leadTremolo = effects.tremolo()
    let leadVibrato = effects.vibrato()

    // let rhLoop = new Tone.Loop(function(time) {
    //   rhSynth.triggerAttackRelease('C2', '8n', time)
    // }, '4n')
    // я делаю луп в парте!

    let loop1 = new Tone.Loop(function(time) {
      ambientSynth.triggerAttackRelease('C2', '8n', time)
    }, '4n')

    let loop3 = new Tone.Loop(function(time) {
      leadSynth.triggerAttackRelease('C4', '1m', time)
    }, '1m')

    // rh synth chain

    rhSynth.chain(
      rhDistortion,
      rhFeedbackEffect,
      rhReverb,
      rhStereoWidener,
      rhTremolo,
      rhVibrato,
      Tone.Master
    )

    // other synths' chains

    ambientSynth.chain(
      ambientAutoFilter,
      ambientChorus,
      ambientDistortion,
      ambientFeedbackDelay,
      ambientFreeverb,
      ambientPhaser,
      ambientPingPongDelay,
      Tone.Master
    )
    ambientPingPongDelay.toMaster()

    leadSynth.chain(
      leadAutoPanner,
      leadAutoWah,
      leadBitCrusher,
      leadChebyshev,
      leadDistortion,
      leadFeedbackEffect,
      leadJcReverb,
      leadPitchShift,
      leadReverb,
      leadStereoWidener,
      leadTremolo,
      leadVibrato,
      Tone.Master
    )

    this.state = {
      rhSynth,
      rhDistortion: {
        name: 'rhDistortion',
        effect: rhDistortion,
        wet: defaultWetValue,
        on: false
      },
      rhFeedbackEffect: {
        name: 'rhFeedbackEffect',
        effect: rhFeedbackEffect,
        wet: defaultWetValue,
        on: false
      },
      rhReverb: {
        name: 'rhReverb',
        effect: rhReverb,
        wet: defaultWetValue,
        on: false
      },
      rhStereoWidener: {
        name: 'rhStereoWidener',
        effect: rhStereoWidener,
        wet: defaultWetValue,
        on: false
      },
      rhTremolo: {
        name: 'rhTremolo',
        effect: rhTremolo,
        wet: defaultWetValue,
        on: false
      },
      rhVibrato: {
        name: 'rhVibrato',
        effect: rhVibrato,
        wet: defaultWetValue,
        on: false
      },
      ambientSynth,
      ambientAutoFilter: {
        name: 'ambientAutoFilter',
        effect: ambientAutoFilter,
        wet: defaultWetValue,
        on: false
      },
      ambientChorus: {
        name: 'ambientChorus',
        effect: ambientChorus,
        wet: defaultWetValue,
        on: false
      },
      ambientDistortion: {
        name: 'ambientDistortion',
        effect: ambientDistortion,
        wet: defaultWetValue,
        on: false
      },
      ambientFeedbackDelay: {
        name: 'ambientFeedbackDelay',
        effect: ambientFeedbackDelay,
        wet: defaultWetValue,
        on: false
      },
      ambientFreeverb: {
        name: 'ambientFreeverb',
        effect: ambientFreeverb,
        wet: defaultWetValue,
        on: false
      },
      ambientPhaser: {
        name: 'ambientPhaser',
        effect: ambientPhaser,
        wet: defaultWetValue,
        on: false
      },
      ambientPingPongDelay: {
        name: 'ambientPingPongDelay',
        effect: ambientPingPongDelay,
        wet: defaultWetValue,
        on: false
      },
      leadSynth,
      leadAutoPanner: {
        name: 'leadAutoPanner',
        effect: leadAutoPanner,
        wet: defaultWetValue,
        on: false
      },
      leadAutoWah: {
        name: 'leadAutoWah',
        effect: leadAutoWah,
        wet: defaultWetValue,
        on: false
      },
      leadBitCrusher: {
        name: 'leadBitCrusher',
        effect: leadBitCrusher,
        wet: defaultWetValue,
        on: false
      },
      leadChebyshev: {
        name: 'leadChebyshev',
        effect: leadChebyshev,
        wet: defaultWetValue,
        on: false
      },
      leadDistortion: {
        name: 'leadDistortion',
        effect: leadDistortion,
        wet: defaultWetValue,
        on: false
      },
      leadFeedbackEffect: {
        name: 'leadFeedbackEffect',
        effect: leadFeedbackEffect,
        wet: defaultWetValue,
        on: false
      },
      leadJcReverb: {
        name: 'leadJcReverb',
        effect: leadJcReverb,
        wet: defaultWetValue,
        on: false
      },
      leadPitchShift: {
        name: 'leadPitchShift',
        effect: leadPitchShift,
        wet: defaultWetValue,
        on: false
      },
      leadReverb: {
        name: 'leadReverb',
        effect: leadReverb,
        wet: defaultWetValue,
        on: false
      },
      leadStereoWidener: {
        name: 'leadStereoWidener',
        effect: leadStereoWidener,
        wet: defaultWetValue,
        on: false
      },
      leadTremolo: {
        name: 'leadTremolo',
        effect: leadTremolo,
        wet: defaultWetValue,
        on: false
      },
      leadVibrato: {
        name: 'leadVibrato',
        effect: leadVibrato,
        wet: defaultWetValue,
        on: false
      },
      loop1: {
        loop: loop1,
        on: false
      },
      loop3: {
        loop: loop3,
        on: false
      },
      partRh: {
        part: parts.partRh(rhSynth),
        on: false
      },
      lastChange: Date.now(),
      timeout: 100
    }

    _.bindAll(
      this,
      // 'getRandomArbitrary',
      // 'generateRandom',
      'toggleLoop',
      'togglePart',
      'changeSynthValue',
      'toggleEffect',
      'changeEffectWetValue',
      'changeEffectValue',
      'loadPreset',
      'savePreset'
    )

    Tone.Transport.bpm.value = 100
    Tone.Transport.start()
  }

  componentDidMount() {
    // this.generateRandom()

    let { name, effect, wet, on } = this.state.ambientDistortion

    effect.wet.value = on == true ? this.props.wet : 0
    effect.distorion = this.props.distorion
    effect.oversample = this.props.oversample

    this.setState({
      ambientDistortion: {
        name,
        effect,
        on,
        wet: this.props.wet
      }
    })
  }

  // getRandomArbitrary(min, max) {
  //   return Math.floor(Math.random() * (max - min)) + min
  // }

  // generateRandom() {
  //   const { lastChange, timeout } = this.state
  //
  //   if (Date.now() - lastChange >= timeout) {
  //     const random = this.getRandomArbitrary(100, 3000)
  //
  //     this.setState({
  //       lastChange: Date.now(),
  //       timeout: random
  //     })
  //
  //     this.changeDistortionValue('distortion', random / 30)
  //   }
  //
  //   setTimeout(() => this.generateRandom(), timeout)
  // }

  toggleLoop(loopName) {
    let { loop, on } = this.state[loopName]

    on == true ? loop.stop() : loop.start('0m')

    this.setState({
      [`${loopName}`]: {
        loop: loop,
        on: !on
      }
    })
  }

  togglePart(partName) {
    let { part, on } = this.state[partName]

    if (on == true) {
      part.stop()
    } else {
      console.log('yo')
      part.at('1m')
      part.start(0)
      part.loop = true
      part.loopEnd = '4m'
    }

    this.setState({
      [`${partName}`]: {
        part: part,
        on: !on
      }
    })
  }

  changeSynthValue(synthName, effectName, value) {
    let synth = this.state[synthName]
    let envelope = synth.instrument.envelope
    envelope[effectName] = value

    this.setState({
      [`${effectName}`]: {
        oscillator: synth.instrument.oscillator,
        envelope: envelope
      }
    })
  }

  toggleEffect(effectName) {
    let { name, effect, wet, on } = this.state[effectName]

    effect.wet.value = on == true ? 0 : wet
    on = !on

    this.setState({
      [`${effectName}`]: {
        name,
        effect,
        wet,
        on
      }
    })
  }

  changeEffectWetValue(effectName, effectProperty, value) {
    let { name, effect, wet, on } = this.state[effectName]

    effect[effectProperty].value = on == true ? value : 0
    wet = value

    this.setState({
      [`${effectName}`]: {
        name,
        effect,
        wet,
        on
      }
    })
  }

  changeEffectValue(effectName, effectProperty, value) {
    let { name, effect, wet, on } = this.state[effectName]

    if (effectProperty == 'order') {
      value = Math.round(value)
    }

    effect[effectProperty] = value

    this.setState({
      [`${effectName}`]: {
        name,
        effect,
        wet,
        on
      }
    })
  }

  loadPreset(presetNumber) {}

  savePreset(presetNumber) {}

  tune1() {
    let rhSynth = new Tone.PolySynth(4, Tone.Synth, {
      oscillator: {
        type: 'triangle',
        count: 2,
        spread: 5,
        phase: 6
      },
      envelope: {
        attack: 3,
        decay: 3,
        sustain: 4,
        release: 3,
        attackCurve: 'exponential'
      }
    }).toMaster()

    let part = new Tone.Part(
      function(time, event) {
        rhSynth.triggerAttackRelease(event.note, event.dur, time)
      },
      [
        {
          time: '0:0:0',
          note: 'G#4',
          velocity: 1,
          dur: '4n'
        },
        {
          time: '0:1:0',
          note: 'B3',
          velocity: 1,
          dur: '4n'
        },
        {
          time: '0:2:0',
          note: 'E4',
          velocity: 1,
          dur: '4n'
        },
        {
          time: '0:3:0',
          note: 'B3',
          velocity: 0.1,
          dur: '4n'
        },
        {
          time: '1:0:0',
          note: 'G#4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '1:1:0',
          note: 'B3',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '1:2:0',
          note: 'E4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '1:3:0',
          note: 'B3',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:0:0',
          note: 'G#4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:1:0',
          note: 'B3',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:2:0',
          note: 'E4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:3:0',
          note: 'B3',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:0:0',
          note: 'C4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:1:0',
          note: 'D4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:2:0',
          note: 'E4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:3:0',
          note: 'F#4',
          velocity: 0.3,
          dur: '4n'
        }
      ]
    ).start(0)

    part.loop = true
    part.loopEnd = '4m'

    Tone.Transport.bpm.value = 100
    Tone.Transport.start()

    this.setState({
      rhSynth
    })
  }

  render() {
    let {
      rhSynth,
      rhDistortion,
      rhFeedbackEffect,
      rhReverb,
      rhStereoWidener,
      rhTremolo,
      rhVibrato,
      ambientSynth,
      ambientAutoFilter,
      ambientChorus,
      ambientDistortion,
      ambientFeedbackDelay,
      ambientFreeverb,
      ambientPhaser,
      ambientPingPongDelay,
      leadSynth,
      leadAutoPanner,
      leadAutoWah,
      leadBitCrusher,
      leadChebyshev,
      leadDistortion,
      leadFeedbackEffect,
      leadJcReverb,
      leadPitchShift,
      leadReverb,
      leadStereoWidener,
      leadTremolo,
      leadVibrato,
      loop1,
      partRh
    } = this.state

    let {
      toggleEffect,
      toggleLoop,
      togglePart,
      changeSynthValue,
      changeEffectWetValue,
      changeEffectValue,
      changeEffectFilterValue
    } = this

    return (
      <div>
        <h3>Radiohead Loop</h3>
        <div className="loopBoard">
          <div onClick={tune1}>Rh loop</div>
        </div>

        <div className="PresetButton" onClick={() => loadPreset(1)}>
          Load 1
        </div>
        <div className="PresetButton" onClick={() => savePreset(1)}>
          Save 1
        </div>
        <div className="PresetButton" onClick={() => loadPreset(2)}>
          Load 2
        </div>
        <div className="PresetButton" onClick={() => savePreset(2)}>
          Save 2
        </div>

        <div className="pedalBoard">
          <h3>Radiohead Part</h3>
          <PolySynth
            synth="rhSynth"
            instrument={rhSynth}
            on={partRh.on}
            togglePlay={() => togglePart('partRh')}
            changeSynthValue={changeSynthValue}
          />
        </div>

        <div className="pedalBoard">
          <ToneSynth
            synth="ambientSynth"
            instrument={ambientSynth}
            on={loop1.on}
            togglePlay={() => toggleLoop('loop1')}
            changeSynthValue={this.changeSynthValue}
          />
          <Distortion
            {...ambientDistortion}
            toggleEffect={() => toggleEffect('ambientDistortion')}
            changeEffectWetValue={changeEffectWetValue}
            changeEffectValue={changeEffectValue}
          />
        </div>

        <div className="pedalBoard">
          <AutoPanner
            {...leadAutoPanner}
            toggleEffect={() => toggleEffect('leadAutoPanner')}
            changeEffectWetValue={changeEffectWetValue}
            changeEffectValue={changeEffectValue}
          />
          <AutoWah
            {...leadAutoWah}
            toggleEffect={() => toggleEffect('leadAutoWah')}
            changeEffectWetValue={changeEffectWetValue}
            changeEffectValue={changeEffectValue}
          />
          <BitCrusher
            {...leadBitCrusher}
            toggleEffect={() => toggleEffect('leadBitCrusher')}
            changeEffectWetValue={changeEffectWetValue}
            changeEffectValue={changeEffectValue}
          />
          <Chebyshev
            {...leadChebyshev}
            toggleEffect={() => toggleEffect('leadChebyshev')}
            changeEffectWetValue={changeEffectWetValue}
            changeEffectValue={changeEffectValue}
          />
          <Vibrato
            {...leadVibrato}
            toggleEffect={() => toggleEffect('leadVibrato')}
            changeEffectWetValue={changeEffectWetValue}
            changeEffectValue={changeEffectValue}
          />
        </div>
      </div>
    )
  }
}
