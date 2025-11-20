import { Radio, Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';
const UserTable = () => {
    const [dataUser, setDataUser] = useState([
        // { _id: 1, fullName: 'John Brown', age: 32, email: 'h1@gmail.com' },
        // { _id: 2, fullName: 'Jim Green', age: 42, email: 'h2@gmail.com' },
    ]);
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',

        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',

        },
        {
            title: 'Email',
            dataIndex: 'email',

        },
    ];
    useEffect(() => {
        console.log("Call use effect 111")
        loadData();
    }, []);

    const loadData = async () => {
        console.log("Call load data 000")
        const res = await fetchAllUserAPI();
        //console.log("Check res:", res);
        setDataUser(res.data);
    }


    return (
        <Table columns={columns}
            dataSource={dataUser}
            rowKey={"_id"}
        />
    )
};
export default UserTable;