import {useContext} from "react";
import {MyContext} from "../../App";

export const TestR = () => {

    const {text} = useContext(MyContext)

    return (
        <div>{text}</div>
    )
}