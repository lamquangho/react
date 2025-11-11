import { Input, notification } from "antd";
import { Button } from "antd";
import { use, useState } from "react";
import axios from "../../services/axios.customize";
import { createUserAPI, updateUserAPI } from "../../services/api.service";
const UserFormInput = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    // console.log("Full Name:", fullName);
    const handleClick = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: 'User Created Successfully',
                description: `User ${res.data.fullName} has been created.`,
            });
        }
        console.log("check res:", res.data);

    }
    const handleUpdateCLick = () => {
        updateUserAPI(fullName, email, password, phone);
        //console.log("Update user clicked");
    }

    return (
        <div>
            <div>
                <span>Full Name</span>
                <Input placeholder="Enter your full name" onChange={(e) => setFullName(e.target.value)} />

            </div>
            <div>
                <span>Email</span>
                <Input placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <span>Password</span>
                <Input.Password placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <span>Phone Number</span>
                <Input placeholder="Enter your Phone Number" onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <Button type="primary" onClick={handleClick}>Create User</Button>
                <Button type="default" onClick={handleUpdateCLick}>Update User</Button>
            </div>

        </div>
    )
}
export default UserFormInput