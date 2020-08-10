import React, { useState } from "react";
import Lesson from "./Lesson"
import abcd from "./courses"

const App: React.FC = () => {
  const course = abcd
  const [index, setIndex] = useState(0)

  const nextLesson = () => {
    setIndex((current: number) => {
      return current + 1
    })
  }

  if (index > 0) {
    return <div>done</div>
  }

  return (
    <div>
      <div>
        <h2>{course.title}</h2>
      </div>
      <Lesson data={course.lessons[index]} done={nextLesson} />
    </div>
  )
};

export default App;
