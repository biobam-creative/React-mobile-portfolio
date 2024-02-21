import { useState } from "react";
import PagePadding from "../ui-elements/pagePadding";
import styled from "styled-components";
const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 786px) {
        flex-direction: row;
    }
`;
const Contact = () => {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");

    let [message, setMessage] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log("my message");
    };
    return (
        <PagePadding>
            <h1>Contact</h1>
        </PagePadding>
    );
};

export default Contact;
