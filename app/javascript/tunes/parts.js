import Tone from 'tone'

function partRh() {
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
  )

  return part
}

partRh.loop = true
partRh.loopEnd = '4m'

export { partRh }
