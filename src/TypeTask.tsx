import React, { useState, useEffect } from "react";

interface Props {
    sentence: string
}

class UserInput {
    public accepted: string = ""
    public missTyped: string = ""

    concatinated = (): string => {
        return this.accepted + this.missTyped
    }

    backspace = (): void => {
        if (this.missTyped.length > 0) {
            this.missTyped = this.missTyped.slice(0, -1)
            return
        }

        if (this.accepted.length > 0) {
            this.accepted = this.accepted.slice(0, -1)
            return
        }
    }

    // TODO: check char size
    add = (char: string, valid: boolean): void => {
        if (valid) {
            this.accepted += char
            return
        }

        this.missTyped += char
        return
    }

    getAccepted = () => {
        return this.accepted
    }

    getMissTyped = () => {
        return this.missTyped
    }

    // TODO: I don't know a way to tell react that this object is actually changed
    //       Creating another object can mitigate this problem but there should be simpler inexpensive way to do this
    clone = (): UserInput => {
        const u = new UserInput()
        u.accepted = this.accepted
        u.missTyped = this.missTyped
        return u
    }
}

const backspaceKeyCode = 8

const TypeTask = (props: Props) => {
    // TODO: need to check Japanese Romaji Table
    const valid = (typed: string) => {
        return props.sentence.startsWith(typed)
    }
    const [typed, setTyped] = useState(new UserInput())
    console.log(typed)

    const onKeyDown = (event: KeyboardEvent) => {
        if (event.keyCode === backspaceKeyCode) {
            setTyped((current: UserInput) => {
                current.backspace()
                return current.clone()
            })
            return
        }

        setTyped((current: UserInput) => {
            const challenge = current.concatinated() + event.key
            current.add(event.key, valid(challenge))
            return current.clone()
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
                    {typed.getAccepted()}
                </span>
                <span style={{ color: 'red' }}>
                    {typed.getMissTyped()}
                </span>
            </div>
        </div>
    );
};

export default TypeTask;
