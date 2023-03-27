import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";

const NavLink = ({ page }) => {
    const { links } = useGlobalContext();

    return (  
        <Wrapper>
            <button className="btn page-btn capitalize">{page}</button>

            <div className="sublinks">
                <div className="sub-cont">
                    {links.map((link, index) => {
                        const { label, url, icon } = link;
                        if(link.page === page) return (
                            <Link to={url} key={index} className="sublink">
                                <span className="lh-0 mr-6">{icon}</span>
                                <span>{label}</span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.li`
    margin: 0 6px;
    padding: 10px 0;
    position: relative;

    .page-btn {
        color: #fff;
        font-size: 18px;
        padding: 10px 32px;
    }
    :hover .page-btn {
        background-color: var(--clr-primary-4);
    }
    :hover .sublinks {
        display: block;
    }
    .sublinks {
        display: none;
        width: 320px;
        padding: 24px;
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 4px;
        background-color: #fff;
    }
    .sublinks::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 100%;
        transform: translateX(-50%);
        border-bottom: 6px solid #fff;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
    }
    .sub-cont {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }
    .sublink {
        flex-basis: 45%;
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        color: var(--clr-grey-4);
        text-transform: capitalize;
        transition: all .2s ease;
    }
    .sublink:hover {
        color: var(--clr-primary-5);
    }
`
export default NavLink;