import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase-config";
import './SignUp.css'
function SignUp() {

    const [registerData, setRegisterData] = useState({});

    let handleChange = ((e) => {
        let { name, value } = e.target;
        setRegisterData({ ...registerData, [name]: value });
    })

    let submitData = (e) => {
        e.preventDefault();
        if (registerData.password == registerData.confirmPassword) {
            createUserWithEmailAndPassword(auth, registerData.email, registerData.password)
                .then((response) => {
                    console.log(response.user);
                })
                .catch((err) => {
                    console.log(err.message);
                })
        }
    }

    return (
        <>
            <form method="post" onSubmit={(e) => submitData(e)} className="signUp">
                <table border={0} align="center" cellPadding={10}>
                    <thead>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input type="email" name="email" placeholder="example@gmail.com" onChange={(e) => handleChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td> Password</td>
                            <td>
                                <input type="password" name="password" placeholder="123456789" onChange={(e) => handleChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Confirm Password</td>
                            <td>
                                <input type="password" name="confirmPassword" placeholder="123456789" onChange={(e) => handleChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type="submit" className="register-btn" >SIGN UP</button>
                            </td>
                        </tr>
                    </thead>
                </table>
            </form>
        </>
    )
}

export default SignUp