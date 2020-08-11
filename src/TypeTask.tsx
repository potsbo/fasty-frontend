import React, { useEffect, useState } from "react";
import useKeypress from "react-use-keypress";
import styled, { keyframes } from "styled-components/macro";

interface Props {
  sentence: string;
  state: State;
  index?: number;
  total?: number;
  done: () => void;
}

export enum State {
  Inactive = 1,
  Active,
  Done,
}

const getColor = (s: State): string => {
  switch (s) {
    case State.Inactive:
      return "gray";
    case State.Active:
      return "black";
    case State.Done:
      return "green";
  }
};

const getOpacity = (s: State): number => {
  switch (s) {
    case State.Inactive:
      return 50;
    case State.Active:
      return 100;
    case State.Done:
      return 0;
  }
};

class UserInput {
  private accepted = "";
  private missTyped = "";

  public concatinated = (): string => {
    return this.accepted + this.missTyped;
  };

  public backspace = (): void => {
    if (this.missTyped.length > 0) {
      this.missTyped = this.missTyped.slice(0, -1);
      return;
    }

    if (this.accepted.length > 0) {
      this.accepted = this.accepted.slice(0, -1);
      return;
    }
  };

  // TODO: check char size
  public add = (char: string, valid: boolean): void => {
    if (valid) {
      this.accepted += char;
      return;
    }

    this.missTyped += char;
    return;
  };

  public getAccepted = () => {
    return this.accepted.replace(/ /gi, "␣");
  };

  public getMissTyped = () => {
    return this.missTyped.replace(/ /gi, "␣");
  };

  public isEmpty = () => {
    return this.accepted.length === 0 && this.missTyped.length === 0;
  };

  // TODO: I don't know a way to tell react that this object is actually changed
  //       Creating another object can mitigate this problem but there should be simpler inexpensive way to do this
  public clone = (): UserInput => {
    const u = new UserInput();
    u.accepted = this.accepted;
    u.missTyped = this.missTyped;
    return u;
  };
}

const lowers = Array.from({ length: 26 }, (_, i) => String.fromCharCode("a".charCodeAt(0) + i));
const uppers = Array.from({ length: 26 }, (_, i) => String.fromCharCode("A".charCodeAt(0) + i));
const space = " ";
const trapKeys = lowers.concat(uppers, [space]);

const TypeTask = (props: Props) => {
  // TODO: need to check Japanese Romaji Table
  const valid = (typed: string) => {
    return props.sentence.startsWith(typed);
  };
  const [typed, setTyped] = useState(new UserInput());

  useKeypress("Backspace", (_: KeyboardEvent) => {
    if (props.state !== State.Active) {
      return;
    }
    setTyped((current: UserInput) => {
      current.backspace();
      return current.clone();
    });
  });

  useKeypress(trapKeys, (event: KeyboardEvent) => {
    if (props.state !== State.Active) {
      return;
    }
    if (event.metaKey) {
      return;
    }
    if (event.ctrlKey) {
      return;
    }

    setTyped((current: UserInput) => {
      const challenge = current.concatinated() + event.key;
      current.add(event.key, valid(challenge));
      return current.clone();
    });
  });

  useEffect(() => {
    if (typed.getAccepted() === props.sentence.replace(/ /gi, "␣")) {
      if (props.state !== State.Done) {
        props.done();
      }
    }
  });

  useEffect(() => {
    setTyped(new UserInput());
  }, [props]);

  return (
    <TaskCard theme={{ state: props.state }}>
      {props.total && props.index && (
        <div>
          {props.index}/{props.total}
        </div>
      )}
      <div style={{ color: getColor(props.state) }}>
        <TaskSpan>{props.sentence.replace(/ /gi, "␣")}</TaskSpan>
      </div>
      <div>
        <TaskSpan>{typed.getAccepted()}</TaskSpan>
        <TaskSpan style={{ color: "red" }}>{typed.getMissTyped()}</TaskSpan>
        {props.state === State.Active && typed.isEmpty() && (
          <TaskSpan>
            <Cursor />
            <Placeholder>Please enter characters as above.</Placeholder>
          </TaskSpan>
        )}
      </div>
    </TaskCard>
  );
};

export default TypeTask;

const TaskSpan = styled.span`
  position: relative;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 2px;
`;

const TaskCard = styled.div`
  border-radius: 18px;
  box-shadow: 0px 0px 10px 4px #dddddd;
  height: ${(props) => (props.theme.state === State.Done ? 0 : 150)}px;
  padding: ${(props) => (props.theme.state === State.Done ? 0 : 36)}px;
  padding-left: 36px;
  padding-right: 36px;
  margin: ${(props) => (props.theme.state === State.Done ? 0 : 36)}px;
  margin-left: 36px;
  margin-right: 36px;
  opacity: ${(props) => getOpacity(props.theme.state)}%;
  transition: 0.1s;
`;

const flashing = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;

const Cursor = styled.span`
  position: absolute;
  top: 2px;
  left: 0;
  bottom: 0;
  display: block;
  width: 2px;
  height: 18px;
  background-color: red;
  animation: ${flashing} 0.5s linear infinite;
  animation-direction: alternate;
`;

const Placeholder = styled.p`
  margin: 0;
  margin-left: 8px;
  font-size: 18px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
`;
