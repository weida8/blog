import React, {useState} from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse
} from "shards-react";

export default function NavExample(props) {

    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [collapseOpen, setCollapseOpen] = useState(false)


    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen)
    }

    const toggleNavbar = () => {
    setCollapseOpen(!collapseOpen)
    }

    return (
        <>
            <Navbar type="dark" theme="secondary" expand={false}>
                <NavbarBrand tag={Link} to="/trails">Blog</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} />

                <Collapse open={collapseOpen} navbar>
                <Nav navbar fill={true}>
                    <NavItem>
                    <NavLink active tag={Link} to="/trails">
                        Travel Trails
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink tag={Link} to="/my-trails">
                        My Trails
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink tag={Link} to="/trailblazing">
                        Trailblazing!
                    </NavLink>
                    </NavItem>
                    <Dropdown
                    open={dropdownOpen}
                    toggle={toggleDropdown}
                    >
                    <DropdownToggle nav caret>
                        {props.username}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Profile</DropdownItem>
                        <DropdownItem>Settings</DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                </Nav>
                </Collapse>
            </Navbar>
            {props.children}
        </>
    );
}