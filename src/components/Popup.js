import styled from 'styled-components';
import FeaturedImage from '../images/featured-image.png';

import { FaGoogle, FaFacebookF, FaTwitter, FaGithub, FaTimes } from 'react-icons/fa';

const Popup = ({handleToggled}) => {
    return (
        <StyledPopup className="animate__animated animate__fadeIn">
            <Col>
                <ToggleClose onClick={handleToggled}/>
                <Heading>Create Your Account</Heading>
                <SocialIcons>
                    <Icon className="animate__animated animate__fadeInLeft animate__delay-0s"><FaGoogle/></Icon>
                    <Icon className="animate__animated animate__fadeInDown animate__delay-1s"><FaFacebookF/></Icon>
                    <Icon className="animate__animated animate__fadeInRight animate__delay-2s"><FaTwitter/></Icon>
                    <Icon className="animate__animated animate__fadeInUp animate__delay-3s"><FaGithub/></Icon>
                </SocialIcons>
                <br/>
                <Text>You can also create your account with email</Text>
                <Form>
                    <Input type="text" placeholder="Name" />
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Password" />
                </Form>
                <Terms>
                    <input type="checkbox"/>
                    <p>I agree to the <span>Terms</span> and Privacy Policy</p>
                </Terms>
                <ButtonsGroup>
                    <Button primary>Sign Up</Button>
                    <Button>Sign in</Button>
                </ButtonsGroup>
            </Col>
            <Col secondary>
                <img src={"https://images.pexels.com/photos/5603660/pexels-photo-5603660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} />
            </Col>
        </StyledPopup>
    )
}

export default Popup

const StyledPopup = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    background: #fff;
    position: sticky;

    display: grid;
    grid-template-columns: 1fr;
    @media screen and (min-width: 960px) {
        grid-template-columns: 2fr 1fr;
    }
    justify-content: flex-start;
`;

const Col = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;

    @media screen and (max-width: 960px) {
        margin-top: ${props => props.secondary ? "4rem" : "0" };
    }

    img {
        max-width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Heading = styled.h2`
    margin-top: 4rem;
    @media screen and (min-width: 960px) {
        margin-top: 0;
    }
    font-size: clamp(2rem, 3vw, 4vw);
    color: #f55557;
`

const SocialIcons = styled.div`
    min-width: 300px;  
    display: flex;
    justify-content: center;
    justify-content: space-around;
`;

const Icon = styled.div`
    padding: .5rem;
    border: 1px solid #222; 
    display: flex;
    place-items: center;
    border-radius: 50%;
    cursor: pointer;  
    transition: .2s all ease-in-out;

    &:hover {
        transition: .2s all ease-in-out;
        color: #f55557;
        border: 1px solid #f55557;
    }
`;

const Text = styled.h4`
    color: #000;
    font-weight: 300;
    font-size: 1.15rem;
`

const Form = styled.form`
    max-width: 100%;
    min-width: 400px;
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    margin: .45rem 0;
    max-width: 100%;
    padding: .6rem;
    border-radius: 7px;
    outline: none;
    border: 1px solid #D6E3E7;
    color: #333;
    font-size: 1.15rem;

    ::placeholder {
        color: #D6E3E7;
    }
`;

const Terms = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: .5rem;
    margin-bottom: 1.5rem;

    input {
        margin-right: 1rem;
        background: #f55557;
        cursor: pointer;
    }
`;

const ButtonsGroup = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 0 1rem;
    min-width: 400px;
`;

const Button = styled.button`
    padding: .5rem;
    min-width: 150px;
    outline: none;
    border: none;
    font-size: 1.1rem;
    border-radius: 7px;
    cursor: pointer;

    background: ${props => props.primary ? "#f55557" : "transparent"};
    border: ${props => props.primary ? "2px inset inset" : "2px inset #f55557"};
    color: ${props => props.primary ? "#fff" : "#f55557"};
`;

const ToggleClose = styled(FaTimes)`
    position: absolute;
    top: 3%;
    right: 3%;
    font-size: 1.25rem;
    cursor: pointer;
`;