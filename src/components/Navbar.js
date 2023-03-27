import React from "react";
import NavLink from "./NavLink";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import { Link } from "gatsby";
import { AiOutlineMenu } from 'react-icons/ai';
import { useGlobalContext } from "../context/context";

const Navbar = () => {
    const { sidebar, toggleSide, links } = useGlobalContext();
    const uniquePages = [...new Set(links.map(link => link.page))];

    return (  
        <Wrapper>
            <section className="containerBoot m-auto">
                <Link to="/" className="logo">
                    <img src={logo} alt="Design" />
                </Link>
                
                <ul className="no-style list">
                    {uniquePages.map((page,index) => <NavLink key={index} page={page} />)}
                </ul>

                {!sidebar && <button type="button" onClick={toggleSide} className="btn burger-btn"><AiOutlineMenu /></button>}
            </section>
        </Wrapper>
    );
}
 
const Wrapper = styled.nav`
    height: 5rem;
    z-index: 10;
    position: relative;
    background-color: transparent;

    section {
        height: 100%;
        display: flex;
        align-items: center;
    }

    .logo {
        display: flex;
        margin-right: 32px;
    }
    .burger-btn {
        display: none;
        color: #fff;
        padding: 4px;
        font-size: 24px;
        background-color: var(--clr-primary-3);
    }
    .burger-btn:hover {
        background-color: var(--clr-primary-1);
    }

    .list {
        display: flex;
        align-items: center;
    }

    @media (max-width: 767px){
        section { justify-content: space-between; }
        .list { display: none; }
        .burger-btn { display: flex; }
    }
    @media (max-width: 575px){

    }
`
export default Navbar;