import {Nav, Navbar, NavLink} from "react-bootstrap";
import {UserContext} from "../utils/userContext";
import {useContext} from "react";


export function Header() {
    // const userContext = useContext(UserContext);
    // console.log(userContext);
    // let userInfo = null;
    // if (userContext.user) {
    //     userInfo = <NavLink href={"/login"}>{userContext.user.username}</NavLink>;
    // }
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href={"/"}>WAL-G Performance Farm</Navbar.Brand>
            <Nav className="ml-auto">
                {/*<NavLink href={"/login"}>Log in</NavLink>*/}
                {/*<NavLink href={"/signup"}>Sign up</NavLink>*/}
            </Nav>
        </Navbar>
    )
}