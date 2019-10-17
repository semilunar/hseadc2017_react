import Tone from 'tone'

function toneSynth() {
  return new Tone.Synth({
    oscillator: {
      type: 'triangle'
    },
    envelope: {
      attack: 0.005,
      decay: 0.1,
      sustain: 0.3,
      release: 1
    }
  })
}

function polySynth() {
  return new Tone.PolySynth(1, Tone.Synth, {
    oscillator: {
      type: 'fatsawtooth',
      count: 3,
      spread: 30,
      phase: 10,
      fadeIn: 4
    },
    envelope: {
      attack: 0.3,
      decay: 1,
      sustain: 1,
      release: 5,
      attackCurve: 'exponential'
    }
  })
}

export { toneSynth, polySynth }
