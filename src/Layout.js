import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
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
  Collapse
} from "shards-react";

export default function NavExample(props) {
    const location = useLocation();
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
            <Navbar type="dark" theme="secondary" expand={true}>
                <NavbarBrand tag={Link} to="/trails">Trailblazer Blog</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} />

                <Collapse open={collapseOpen} navbar>
                <Nav navbar className="ml-auto">
                    <NavItem>
                        <NavLink active={location.pathname === '/trails'} tag={Link} to="/trails">
                            Travel Trails
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink active={location.pathname === '/my-trails'} tag={Link} to="/my-trails">
                            My Trails
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink active={location.pathname === '/trailblazing'} tag={Link} to="/trailblazing">
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
                    <DropdownMenu right>
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