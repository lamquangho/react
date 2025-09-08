const TodoData = (props) => {
    //console.log('>>> check props: ', props)
    const { name, data, todoList } = props
    //const name = name.props

    return (
        <>
            <div className='todo-data'>

                <div>My name is {name}</div>
                <div>My age is {data.age}</div>
                <div>Learning React</div>
                <div>
                    {JSON.stringify(todoList)}
                </div>
            </div>
        </>
    )
}
export default TodoData