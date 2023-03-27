import axios from "axios";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Title } from "./index";
import { BsCheckSquareFill } from "react-icons/bs";

const url = "http://localhost:8888/.netlify/functions/survey";

const Survey = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [surveyItems, setSurveyItems] = useState([]);
    const [err, setErr] = useState({show: false, msg: ""});


    const getSurveyItems = async () => {
        setIsLoading(true);
        setErr({show: false, msg: ""});

        const response = await axios(url)
        .catch(error => setErr({...err, show: true, msg: "problem getting the survey information..."}));
        
        if(response) setSurveyItems(response.data);

        setIsLoading(false);
    }

    const sendVote = async (id, name, votes) => {
        setIsLoading(true);
        setErr({show: false, msg: ""});

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                id,
                fields: {
                    name,
                    votes: votes + 1
                }
            })
        })
        .then (resp => resp.json())
        .then(res => res)
        .catch(error => setErr({...err, show: true, msg: "voting failed, try again."}));

        if(response){
            const updatedItem = response;
            setSurveyItems(surveyItems.map(item => {
                if(item.id === updatedItem.id) return updatedItem
                else return item
            }))
        }

        setIsLoading(false);
    }

    useEffect(() => {
        getSurveyItems()
    } ,[]);

    return (  
        <Wrapper className="mini-section">
            <section className="containerBoot m-auto">
                <Title title="survey" />
                <h4 className="light-grey capitalize ta-center mb-48">most important room in the house?</h4>

                    {isLoading ? 
                        <div className="loading"></div>
                    :
                        surveyItems.length < 1 ?
                            <div className="empty-msg">
                                <button className="btn btn-m btn-prim capitalize" onClick={getSurveyItems}>try again</button>
                                {err.show && <p className="error">{err.msg}</p>}
                            </div>
                        :
                        <article>
                            <div className="survey-cont">
                                {surveyItems.map(item => {
                                    const { id, fields: { name, votes } } = item;
                                    return (
                                        <div className="survey-card" key={id}>
                                            <div className="d-flex align-center">
                                                <span className="short-name">{name.slice(0,2)}</span>
                                                <div>
                                                    <p className="mb-8 capitalize">{name}</p>
                                                    <p className="light-grey">{votes} votes</p>
                                                </div>
                                            </div>
                                            <button type="button" className="btn submit-btn" onClick={() => sendVote(id, name, votes)}><BsCheckSquareFill /></button>
                                        </div>
                                    )
                                })}
                            </div>

                            {err.show && <p className="error empty-msg">{err.msg}</p>}
                        </article>
                    }
            </section>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    background-color: #fff;

    .empty-msg {
        font-size: 18px;
        text-align: center;
        text-transform: capitalize;
    }

    .survey-cont {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .survey-card {
        flex-basis: 32%;
        padding: 16px;
        display: flex;
        border-radius: 4px;
        align-items: center;
        justify-content: space-between;
        background-color: var(--clr-grey-10);
    }
    .short-name {
        display: block;
        color: #fff;
        font-size: 24px;
        padding: 8px 16px;
        margin-right: 24px;
        border-radius: 4px;
        text-transform: uppercase;
        background-color: var(--clr-primary-5);
    }

    .submit-btn {
        line-height: 0;
        font-size: 24px;
    }
    .submit-btn:hover {
        color: var(--clr-primary-5);
    }

    .error {
        margin-top: 12px;
        color: var(--clr-red-dark);
    }

    @media (max-width: 991px){
        .survey-card {
            flex-basis: 48%;
            margin-bottom: 32px;
        }
    }
    @media (max-width: 767px){
        .survey-card { flex-basis: 100%; }
    }

`
export default Survey;