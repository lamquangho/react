//()=>{}
//component = html +css+ js
// sử dụng frlagment để bao bọc các thẻ bên trong
import './style.css';

const MyComponent = function () {
    return (
        <>
            <div>Lam Quang Ho</div>
            <h2 className="child">Day la component sd fragment </h2>
        </>

    );
}

export default MyComponent;