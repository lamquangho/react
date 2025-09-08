const TodoNew = (props) => {
    const { addNewTodo } = props;

    //addNewTodo("Linh")
    const handleClick = () => {
        alert('>>> Click me')
    }
    const handleChange = (name) => {
        console.log(name)
    }
    return (
        <>
            <div className="todo-new">
                <input type="text"
                    onChange={() => handleChange(event.target.value)} />
                <button style={{ cursor: "pointer" }} onClick={handleClick}>
                    Add
                </button>
            </div>
        </>
    )
}
export default TodoNew