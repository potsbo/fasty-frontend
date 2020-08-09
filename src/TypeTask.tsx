import React, { useState, useEffect } from "react";

interface Props {
    sentence: string
}



const TypeTask = (props: Props) => {
    const [typed, setTyped] = useState("")

    const onKeyDown = (event: KeyboardEvent) => {
        setTyped((current: string) => {
            return current += event.key
        })
    }

    console.log("hello")

    useEffect(() => {
        console.log("event listener")
        window.addEventListener("keydown", onKeyDown)
    }, [props])
    return (
        <div>
            <div>
                {props.sentence}
            </div>
            <div>
                {typed}
            </div>
        </div>
    );
};

export default TypeTask;
