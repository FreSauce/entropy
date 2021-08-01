// import {Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Sidebar = () => {
    const { currentUser } = useAuth();
    if (currentUser) {
        return (
            <>
                <div className="sidebar">
                    <div className="sidebar-header">ENTROPY</div>
                    <Link className="link btn btn-primary" to="/">HOME</Link>
                    <Link className="link btn btn-primary" to="/profile">{currentUser.displayName ? currentUser.displayName:"MY PROFILE"}</Link>
                    <Link className="link btn btn-primary" to="/user-posts">MY POSTS</Link>
                    <Link className="link btn btn-primary" to="/add-post">CREATE POSTS</Link>
                </div>
            </>
        );
    } else {
        return <></>;
    }
};
export default Sidebar;
