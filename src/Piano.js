import React, { Fragment } from "react";
import Instrument from "./Instrument";

const Piano = () => {
  const accidentalKey = ({ isPlaying, text, eventHandlers }) => {
    return (
      <div className="piano-accidental-key-wrapper">
        <button
          className={`piano-accidental-key ${
            isPlaying ? "piano-accidental-key-playing" : ""
          } `}
          {...eventHandlers}
        >
          <div className="piano-text">{text}</div>
        </button>
      </div>
    );
  };

  const naturalKey = ({ isPlaying, text, eventHandlers }) => {
    return (
      <button
        className={`piano-natural-key ${
          isPlaying ? "piano-natural-key-playing" : ""
        } `}
        {...eventHandlers}
      >
        <div className="piano-text">{text}</div>
      </button>
    );
  };

  const renderPianoKey = ({
    isAccidentalNote,
    isNotePlaying,
    startPlayingNote,
    stopPlayingNote,
    keyboardShortcut
  }) => {
    const KeyComponent = isAccidentalNote ? accidentalKey : naturalKey;

    const eventHandlers = {
      onMouseDown: startPlayingNote,
      onMouseUp: stopPlayingNote,
      onTouchStart: startPlayingNote,
      onMouseOut: stopPlayingNote,
      onTouchEnd: stopPlayingNote
    };

    return (
      <KeyComponent
        isPlaying={isNotePlaying}
        text={keyboardShortcut.join("/")}
        eventHandlers={eventHandlers}
      />
    );
  };

  return (
    <div className="piano-container">
      <Instrument
        instrumentName={"acoustic_grand_piano"}
        startNote={"C3"}
        endNote={"C6"}
        renderPianoKey={renderPianoKey}
        keyboardMap={{
          Z: "C3",
          S: "C#3",
          X: "D3",
          D: "D#3",
          C: "E3",
          V: "F3",
          G: "F#3",
          B: "G3",
          H: "G#3",
          N: "A3",
          J: "A#3",
          M: "B3",
          ",": "C4",
          L: "C#4",
          ".": "D4",
          ";": "D#4",
          "/": "E4",
          Q: "F4",
          2: "F#4",
          W: "G4",
          3: "G#4",
          E: "A4",
          4: "A#4",
          R: "B4",
          T: "C5",
          6: "C#5",
          Y: "D5",
          7: "D#5",
          U: "E5",
          I: "F5",
          9: "F#5",
          O: "G5",
          0: "G#5",
          P: "A5",
          "-": "A#5",
          "[": "B5",
          "]": "C6"
        }}
      />
    </div>
  );
};

export default Piano;
