import {Nav} from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext"

const Sidebar = () => {
    const {currentUser} = useAuth();
    if(currentUser) {
        console.log(currentUser);
    return (
        <>
            <Nav
                id="status"
                className="col-md-12 d-none d-md-block bg-light sidebar"
                activeKey="/"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
                <Nav.Item>
                    <Nav.Link href="/" >Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/add-post">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/user-posts">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    );
} else {
    return (<></>);
}
};
export default Sidebar;
