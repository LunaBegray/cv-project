import React from "react";

const Display = (props) => {
    const { form } = props;
    return (
        <div>
            {form.map((field) => {
                return <div key={field.id}>{field.text}</div>
            })}
        </div>
    );
}

export default Display;