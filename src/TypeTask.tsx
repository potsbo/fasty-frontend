import React, { useState, useEffect } from "react";

interface Props {
    sentence: string
}



const TypeTask = (props: Props) => {
    // TODO: need to check Japanese Romaji Table
    const valid = (typed: string) => {
        return props.sentence.startsWith(typed)
    }
    const [typed, setTyped] = useState("")
    const [missTyped, setMissTyped] = useState("")

    const onKeyDown = (event: KeyboardEvent) => {
        setTyped((current: string) => {
            // TODO: expect backspace
            const challenge = current + event.key
            if (valid(challenge)) {
                setMissTyped("")
                return challenge
            }

            setMissTyped((current: string) => {
                return current + event.key
            })
            return current
        })
    }

    useEffect(() => {
        window.addEventListener("keydown", onKeyDown)
    }, [props])
    return (
        <div>
            <div>
                {props.sentence}
            </div>
            <div>
                <span>
                    {typed}
                </span>
                <span style={{ color: 'red' }}>
                    {missTyped}
                </span>
            </div>
        </div>
    );
};

export default TypeTask;
