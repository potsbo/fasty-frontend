import React, { useState } from "react";
import Lesson from "./Lesson"

const App: React.FC = () => {
  const sentences = [
    'some words',

  ]
  const [index, setIndex] = useState(0)
  console.log(index)
  const nextLesson = () => {
    setIndex((current: number) => {
      return current + 1
    })
  }

  return <Lesson sentences={sentences} keepOrder={true} done={nextLesson} />
};

export default App;
