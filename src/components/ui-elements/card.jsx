import styled from "styled-components";
import cert from "../../assets/certificate.png";
import {
    FaFacebookSquare,
    FaInstagram,
    FaGithubSquare,
    FaTwitterSquare
} from "react-icons/fa";

const CardOutline = styled.div`
    diplay: flex;
    fkex-direction: column;
    height: 220px;
    width: 330px;
    border: solid 1px #7f7f7f;
    margin-top: 1rem;
    border-radius: 5px;
    @media (min-width: 768px) {
        margin-right: 1rem;
        width: 300;
    }
`;

const CardImage = styled.div`
    height: 150px;
    background-image: url("/src/assets/cerificate.png");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    border-bottom: solid 1px #7f7f7f;
`;

const CardDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.span`
    font-weight: 500;
    font-size: 20px;
`;
const CardIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
`;
const Card = () => {
    return (
        <CardOutline>
            <CardImage />
            <CardDetails>
                <Title>Title</Title>
                <CardIcons>
                    <FaInstagram />
                </CardIcons>
            </CardDetails>
        </CardOutline>
    );
};

export default Card;
