import React, { useState } from "react";
import TypeTask, { State } from "./TypeTask";
import { Course } from "./courses"
import {
    useParams,
} from "react-router-dom";

interface Props {
    course: Course
}

const Lesson = (props: Props) => {
    const { lessonId } = useParams();
    const id = parseInt(lessonId)
    const lessonData = props.course.lessons[id - 1]

    const [index, setIndex] = useState(0)
    const [doneIdx, setDoneIdx] = useState(new Set<number>())

    if (lessonData === undefined) {
        // TODO: better 404
        return <div>404</div>
    }

    const nextTask = (idx: number) => {
        return () => {
            setDoneIdx((current) => {
                current.add(idx)
                return current
            })
            setIndex((_: number) => {
                return idx + 1
            })
        }
    }

    const tasks = lessonData.sentences.map((s, idx) => {
        if (doneIdx.has(idx)) {
            return <TypeTask sentence={s} done={nextTask(idx)} key={idx} state={State.Done} />
        }

        const state: State = idx === index ? State.Active : State.Inactive
        return <TypeTask sentence={s} done={nextTask(idx)} key={idx} state={state} index={idx + 1} total={lessonData.sentences.length} />
    })

    return (
        <div>
            <div>
                <h3>{lessonData.title}</h3>
            </div>
            <div>
                {tasks}
            </div>
        </div>
    )
}

export default Lesson