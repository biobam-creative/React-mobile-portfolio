import styled from "styled-components";

const InputField = styled.input`
    border-radius: 10px;
`;
const TextField = ({ type }) => {
    return <InputField type={type} height={type === "textarea" ? 4 : 1} />;
};

export default TextField;