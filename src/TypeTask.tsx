import React, { useState, useEffect } from "react";
import useKeypress from 'react-use-keypress';

interface Props {
    sentence: string
    state: State,
    done: () => void
}

export enum State {
    Inactive = 1,
    Active,
    Done,
}

const getColor = (s: State): string => {
    switch (s) {
        case State.Inactive:
            return "gray"
        case State.Active:
            return "black"
        case State.Done:
            return "green"
    }
}

class UserInput {
    private accepted: string = ""
    private missTyped: string = ""

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
        return this.accepted.replace(/ /gi, "␣")
    }

    getMissTyped = () => {
        return this.missTyped.replace(/ /gi, "␣")
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

const alphabets = Array.from({ length: 26 }, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i));
const space = ' '
const trapKeys = alphabets.concat([space])

const TypeTask = (props: Props) => {
    // TODO: need to check Japanese Romaji Table
    const valid = (typed: string) => {
        return props.sentence.startsWith(typed)
    }
    const [typed, setTyped] = useState(new UserInput())

    useKeypress('Backspace', (_: KeyboardEvent) => {
        if (props.state !== State.Active) { return }
        setTyped((current: UserInput) => {
            current.backspace()
            return current.clone()
        })
    })

    useKeypress(trapKeys, (event: KeyboardEvent) => {
        if (props.state !== State.Active) { return }
        setTyped((current: UserInput) => {
            const challenge = current.concatinated() + event.key
            current.add(event.key, valid(challenge))
            return current.clone()
        })
    })


    useEffect(() => {
        if (typed.getAccepted() === props.sentence.replace(/ /gi, "␣")) {
            if (props.state !== State.Done) {
                props.done();
            }
        }
    })

    useEffect(() => {
        setTyped(new UserInput())
    }, [props])
    return (
        <div>
            <div style={{ color: getColor(props.state) }}>
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
