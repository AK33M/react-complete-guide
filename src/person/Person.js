import React from "react";
import styles from "./Person.scss";

const Person = (props) => {

    return (
        <div className={styles.Person}>
            <p className={styles.display} onClick={props.click}>My name is {props.name}, and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
}

export default Person;