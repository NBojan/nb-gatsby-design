import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context/context";

const Sidebar = () => {
    const { sidebar, toggleSide, links } = useGlobalContext();

    return (  
        <Wrapper className={sidebar ? "sideopen side" : "side"}>
            <section className="sidebar-cont">
                <button type="button" className="btn close-btn" onClick={toggleSide}><FaTimes /></button>

                <div>
                    {links.map((link, index) => {
                        const { url, label, icon } = link;
                        return (
                            <Link to={url} key={index} onClick={toggleSide} className="sublink">
                                <span className="lh-0 mr-8">{icon}</span>
                                <span>{label}</span>
                            </Link>
                        )
                    })}
                </div>
            </section>
        </Wrapper>
    );
}

const Wrapper = styled.aside`
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: rgba(0,0,0,0.6);
    transition: all .2s ease;

    .sidebar-cont {
        width: 85%;
        height: 85%;
        padding: 32px;
        margin: 0 auto;
        border-radius: 4px;
        background-color: #fff;
        position: relative;
    }

    .close-btn {
        position: absolute;
        top: 24px;
        right: 24px;
        font-size: 24px;
        line-height: 0;
        color: var(--clr-red-dark);
    }
    .close-btn:hover { 
        color: var(--clr-red-light);
    }

    .sublink {
        display: flex;
        align-items: center;
        font-size: 18px;
        margin-bottom: 16px;
        color: var(--clr-grey-4);
        text-transform: capitalize;
        transition: all .2s ease;
    }
    .sublink:hover {
        color: var(--clr-primary-5);
    }
`
export default Sidebar;