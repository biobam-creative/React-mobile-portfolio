import PagePadding from "../ui-elements/pagePadding";
import Card from "../ui-elements/card";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: 786px){
      display: grid;
    grid-template-columns: repeat(4, 1fr);
    }
`;

const Portfolio = () => {
    return (
        <PagePadding>
        <Container>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Container>
        </PagePadding>
    );
};
export default Portfolio;
