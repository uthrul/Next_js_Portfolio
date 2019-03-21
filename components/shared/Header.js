// import React from 'react';
// import Link from 'next/link';

// import '../../styles/main.scss'

// class Header extends React.Component {
//     render() {

//         const title = this.props.title;
//         return (
//             <React.Fragment>
//                 <Link href="/">
//                     <a style={{'fontSize': '20px'}}> Home </a>
//                 </Link>
//                 ||
//                 <Link href="/about">
//                     <a> About </a>
//                 </Link>
//                 ||
//                 <Link href="/portfolios">
//                     <a> Portfolios </a>
//                 </Link>
//                 ||
//                 <Link href="/blogs">
//                     <a> Blogs </a>
//                 </Link>
//                 ||
//                 <Link href="/cv">
//                     <a> Cv </a>
//                 </Link>
//                 <style jsx>
//                     {
//                         `
//                         a {
//                             font-size: 20px
//                         };
//                         .customClass {
//                             color: pink;
//                         }
//                         `
//                     }
//                 </style>
//             </React.Fragment>
//         )
//     }
// }

// export default Header;

import React from 'react';
import Link from 'next/link';

import '../../styles/main.scss'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const BsNavLink = (props) => {
    const { route, title } = props;

    return (
        <Link href={route}>
            <a className="nav-link">{title}</a>
        </Link>
    )
}

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Saud maruli Sihombing</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <BsNavLink route="/" title="Home" />
                            </NavItem>
                            <NavItem>
                                <BsNavLink route="/about" title="About" />
                            </NavItem>
                            <NavItem>
                                <BsNavLink route="/portfolios" title="Portfolio" />
                            </NavItem>
                            <NavItem>
                                <BsNavLink route="/blogs" title="Blog" />
                            </NavItem>
                            <NavItem>
                                <BsNavLink route="/cv" title="Cv" />
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}