import styled from 'styled-components';

const Register = ({handleToggled}) => {
    return (
        <StyledButton className="animate__animated animate__fadeInDown" onClick={handleToggled}>Register Now!</StyledButton>
    )
}

export default Register

const StyledButton = styled.button`
    padding: .75rem;
    font-size: 1.15rem;
    color: #222;
    cursor: pointer;
    border-radius: 5px;
    outline: none;
    border: none;
`;
