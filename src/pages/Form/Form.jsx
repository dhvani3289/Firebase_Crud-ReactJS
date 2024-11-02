
import { useEffect, useState } from "react";
import { db } from '../../firebase-config';
import { addDoc, collection, doc, getDoc, } from "firebase/firestore"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";

function Form() {
    const getUserData = collection(db, "user");
    const [newUser, setNewUser] = useState({});

    let userId = useParams()
    console.log(userId);

    let updateData = async (userId) => {
        if (userId) {
            let up = await getDoc(doc(getUserData, userId));
            console.log(up.data());
        } else {
            console.error("No user ID found");
        }
    }
    updateData();



    let handleChange = ((e) => {
        let { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    })

    let submitData = async (e) => {
        e.preventDefault();
        if (newUser.name && newUser.email) {
            await addDoc(getUserData, newUser)
            window.location = "./"
        }
        else {
            toast.error("Please Fill All The Fields")
        }
    }

    return (
        <>
            <form method="post" onSubmit={(e) => submitData(e)}>
                <table border={1} align="center" cellPadding={10}>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" name="name" placeholder="Name" onChange={(e) => handleChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td> Email</td>
                            <td>
                                <input type="email" name="email" placeholder="Email" onChange={(e) => handleChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <input type="submit" value="Add Data" style={{ width: "100%" }} />
                            </td>
                        </tr>
                    </thead>
                </table>
            </form>
            <ToastContainer />
        </>
    )
}

export default Form;
