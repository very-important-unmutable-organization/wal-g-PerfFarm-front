import {Navbar} from "react-bootstrap";

export function Header() {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href={"/"}>WAL-G Performance Farm</Navbar.Brand>
            {/*<Nav className="ml-auto">*/}
            {/*    <Nav.Link href={"/login"}>Log in</Nav.Link>*/}
            {/*    <Nav.Link href={"/signup"}>Sign up</Nav.Link>*/}
            {/*</Nav>*/}
        </Navbar>
    )
}