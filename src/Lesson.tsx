import React, { useState, useEffect } from "react";
import TypeTask, { State } from "./TypeTask";
import { LessonData } from "./courses"

interface Props {
    data: LessonData
    done: () => void
}

const Lesson = (props: Props) => {
    const [index, setIndex] = useState(0)
    const [doneIdx, setDoneIdx] = useState(new Set<number>())

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

    const tasks = props.data.sentences.map((s, idx) => {
        if (doneIdx.has(idx)) {
            return <TypeTask sentence={s} done={nextTask(idx)} key={idx} state={State.Done} />
        }

        const state: State = idx === index ? State.Active : State.Inactive
        return <TypeTask sentence={s} done={nextTask(idx)} key={idx} state={state} />
    })

    useEffect(() => {
        if (props.data.sentences[index] === undefined) {
            props.done()
        }
    })

    return (
        <div>
            <div>
                <h3>{props.data.title}</h3>
            </div>
            <div>
                {tasks}
            </div>
        </div>
    )
}

export default Lesson