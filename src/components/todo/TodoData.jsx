const TodoData = (props) => {
    //console.log('>>> check props: ', props)
    const { todoList } = props
    //const name = name.props

    return (
        <>
            <div className='todo-data'>
                {todoList.map((item, index) => {
                    console.log('>>> check item: ', index, item)
                    return (
                        <div className="todo-item">
                            <div  >{item.name} </div>

                            <button>Delete</button>
                        </div>
                    )
                })}

                <div>
                    {JSON.stringify(todoList)}
                </div>
            </div>
        </>
    )
}
export default TodoData