import {Nav} from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext"

const Header = () => {
    const {currentUser} = useAuth();
    if(!currentUser) {
    return (
        <>
            <header>Entropy</header>
        </>
    );
} else {
    return (<></>);
}
};
export default Header;
