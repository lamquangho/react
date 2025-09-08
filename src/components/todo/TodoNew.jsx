import { useState } from "react";
const TodoNew = (props) => {
    //useState hook

    const [inputValue, setInputValue] = useState("Ho");
    const { addNewTodo } = props;

    //addNewTodo("Linh")
    const handleClick = () => {

        addNewTodo(inputValue)
        setInputValue("")
    }
    const handleChange = (name) => {
        console.log(name)
        setInputValue(name)
    }
    return (
        <>
            <div className="todo-new">
                <input type="text"
                    onChange={() => handleChange(event.target.value)} value={inputValue} />
                <button style={{ cursor: "pointer" }} onClick={handleClick} >
                    Add
                </button>

            </div>
            <div>My name is {inputValue}</div>
        </>
    )
}
export default TodoNew