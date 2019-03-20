import React from 'react';
import Link from 'next/link';

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Link href="/">
                    <a> Home </a>
                </Link>
                <br />
                <Link href="/about">
                    <a> About </a>
                </Link>
                <br />
                <Link href="/portfolios">
                    <a> Portfolios </a>
                </Link>
                <br />
                <Link href="/blogs">
                    <a> Blogs </a>
                </Link>
                <br />
                <Link href="/cv">
                    <a> Cv </a>
                </Link>
            </React.Fragment>
        )
    }
}

export default Header;