import React, { useState } from "react";
import Lesson from "./Lesson"

const App: React.FC = () => {
  const sentences = [
    'some words',
    'another words',
    'third example',
  ]
  const [index, setIndex] = useState(0)

  const nextLesson = () => {
    setIndex((current: number) => {
      return current + 1
    })
  }

  if (index > 0) {
    return <div>done</div>
  }

  return <Lesson sentences={sentences} keepOrder={true} done={nextLesson} />
};

export default App;
