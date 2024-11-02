import { Link, useNavigate } from "react-router-dom";
import './Header.css'
import { auth } from "../../firebase-config";
import { useState, useEffect } from "react";

function Header() {
    let [list, setList] = useState(false);
    let [data, setData] = useState({});
    let navigate = useNavigate();



    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setList(true);
                setData(user.email);
                navigate("/");
            } else {
                setList(false);
                setData({});
                navigate("/logIn");
            }
        });
    }, []);

    return (
        <>
            <div className="header">
                <Link to="/">Home</Link>
                <span>
                    {list ?
                        data
                        :
                        <Link to="/logIn">
                            <p>login</p>
                        </Link>
                    }
                </span>
                <Link to="/signUp">Sign Up</Link>
            </div>
        </>
    );
}
export default Header;