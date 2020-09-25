import React from "react";

const List = (props) => {
    // Implement this component to pass the tests in ./__tests/index.spec.js
    const { data, onClick } = props;
    return (
        <ul>
            {data.map((item) => {
                return (
                    <li
                        key={item.key}
                        className={item.selected ? "selected" : ""}
                        onClick={(e) => onClick(item.key)}
                    >
                        {item.name}
                    </li>
                );
            })}
        </ul>
    );
};

export default List;
