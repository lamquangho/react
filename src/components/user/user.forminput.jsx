import { Input } from "antd";
import { Button } from "antd";
import { use, useState } from "react";
import axios from "axios";
const UserFormInput = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    console.log("Full Name:", fullName);
    const handleClick = () => {
        const URL_BACKEND = "http://localhost:8080/api/v1/user";
        const data = {
            fullName: fullName,
            email: email,
            password: password,
            phone: phone
        }
        axios.post(URL_BACKEND, data)
        console.log("Data sent to backend:", data);
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
            </div>

        </div>
    )
}
export default UserFormInput