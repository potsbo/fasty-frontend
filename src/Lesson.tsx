import React, { useState } from "react";
import TypeTask from "./TypeTask";

interface Props {
    sentences: string[]
    keepOrder: boolean
    done: () => void
}

const Lesson = (props: Props) => {
    const [index, setIndex] = useState(0)

    const nextTask = () => {
        setIndex((current: number) => {
            return current + 1
        })
    }

    const tasks = props.sentences.map((s, idx) => {
        return <TypeTask sentence={s} done={nextTask} key={idx} />
    })

    if (props.sentences[index] === undefined) {
        props.done()
    }

    return (
        <div>
            {tasks}
        </div>
    )
}

export default Lesson