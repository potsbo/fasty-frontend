import React from "react";
import CourseView from "./CourseView"
import abcd from "./courses"

const App: React.FC = () => {
  return <CourseView course={abcd} />
};

export default App;
