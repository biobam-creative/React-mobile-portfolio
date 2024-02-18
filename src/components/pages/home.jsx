import styled from "styled-components";
import { Link } from "react-router-dom";
import {
    FaFacebookSquare,
    FaInstagram,
    FaGithubSquare,
    FaTwitterSquare
} from "react-icons/fa";
import heroImage from "../../assets/Image (3).jpg";
import PagePadding from "../ui-elements/pagePadding";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 786px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`;
const Copy = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (min-width: 786px) {
        align-items: flex-start;
        padding-right: 10rem;
        margin-top: 7rem;
    }
`;
const TitleCopy = styled.h1`
    font-size: 24px;
`;
const BodyCopy = styled.p`
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const CtaSection = styled.div`
    margin-top: 1rem;
`;
const ContactButton = styled(Link)`
    background-color: #4d008a;
    border: none;
    border-radius: 25px;
    padding: 1rem;
    color: white;
    :hover {
        color: #4d008a;
        font-size: 30px;
    }
`;
const Socials = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
`;
const SocialIcon = styled.a`
    font-size: 26px;
    color: #4d008a;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    text-decoration: none;
    :hover {
        color: #4d008a;
        font-size: 30px;
    }
`;
const ImageContainer = styled.div`
    display: flex;
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.15);
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    padding: 0;
    @media (min-width: 786px) {
        margin-right: 2rem;
    }
`;

const HeroImage = styled.img`
    width: 300px;
    margin: 0;
`;

const Home = () => {
    return (
      <PagePadding>
        <HomeContainer>
            <Copy>
                <TitleCopy>Hi, I'm Emmanuel</TitleCopy>
                <BodyCopy>
                    I believe the web should be accessible and engaging for
                    everyone. Togther with Mildred and Mirabel we made a team of
                    three. Whether you have a unique business idea or need to
                    revamp your existing site, I'm here to tackle your web
                    development needs head-on.
                </BodyCopy>
                <CtaSection>
                    <ContactButton to="/contact">Contact Me</ContactButton>
                </CtaSection>
                <Socials>
                    <SocialIcon>
                        <FaFacebookSquare />
                    </SocialIcon>
                    <SocialIcon>
                        <FaGithubSquare />
                    </SocialIcon>
                    <SocialIcon>
                        <FaInstagram />
                    </SocialIcon>
                    <SocialIcon>
                        <FaTwitterSquare />
                    </SocialIcon>
                </Socials>
            </Copy>
            <ImageContainer>
                <HeroImage src={heroImage} />
            </ImageContainer>
        </HomeContainer>
        </PagePadding>
    );
};

export default Home;
