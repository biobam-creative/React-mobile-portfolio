import PagePadding from "../ui-elements/pagePadding";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Contact = () => {
    return (
        <PagePadding>
            <Wrapper>
                <div>
                    <h1>Contact</h1>
                </div>
            </Wrapper>
            <FormWrapper>
            <div>
            <label for="name">Name</label>
            <input id="name" type="text" />
            </div>
            
            </FormWrapper>
        </PagePadding>
    );
};

export default Contact;
