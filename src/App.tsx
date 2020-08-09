import React, { useState } from "react";
import TypeTask from "./TypeTask"

const App: React.FC = () => {
  const sentences = [
    'some words',
    'another words',
    'third example',
  ]
  const [index, setIndex] = useState(0)
  const nextTask = () => {
    setIndex((current: number) => {
      return current + 1
    })
  }
  if (sentences[index] === undefined) {
    return <div>finished!!!</div>
  }
  return <TypeTask sentence={sentences[index]} done={nextTask} />
};

export default App;
