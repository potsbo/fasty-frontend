import React, { useState, useEffect } from "react";
import { Course } from "./courses"
import Lesson from "./Lesson"

interface Props {
    course: Course
}

const CourseView = (props: Props) => {
    const [index, setIndex] = useState(0)

    const nextLesson = () => {
        setIndex((current: number) => {
            return current + 1
        })
    }

    const lesson = props.course.lessons[index]
    if (lesson === undefined) {
        return <div>done</div>
    }

    return (
        <div>
            <div>
                <h2>{props.course.title}</h2>
            </div>
            <Lesson data={lesson} done={nextLesson} />
        </div>
    )
}

export default CourseView