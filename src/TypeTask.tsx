import React from "react";

interface Props {
    sentence: string
}


const TypeTask = (props: Props) => {
    return (
        <div>
            {props.sentence}
        </div>
    );
};

export default TypeTask;
