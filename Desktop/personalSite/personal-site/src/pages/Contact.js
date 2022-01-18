import { ExternalLink } from 'react-external-link';
import {Page, Container, TagLine, Title, A1} from "./Styled"
import styled from 'styled-components';
import {BsLinkedin, BsInstagram, BsGithub} from 'react-icons/bs'
import { Message } from '../components/Message';

const Extlink = styled(ExternalLink)`
color: ${props => props.theme.pageBackground};
text-align: center;
justify-content: center;
align-items: center;
justify-items: center;
text-decoration: none;
`

const NContents = styled.nav`
    font-size: 20px;
    padding: 0 90px;
    display: flex;
    align-items: center;
    align:center;
    justify-content: space-between;
    color: ${props => props.theme.pageBackground};
`;

function Contact(props) {
    return(
        <Container>
        <Title>Contact Me</Title>
        <TagLine>Get in touch with me or just leave a comment!</TagLine>
        <Message/>
        <NContents>
        <A1>
                    <Extlink href="https://www.linkedin.com/in/mirayna-mckinney-905026213" style={{ textDecoration: 'none'  }}>
                        <BsLinkedin size={30} />
                    </Extlink>
        </A1>
        <A1>
                    <Extlink href="https://www.linkedin.com/in/mirayna-mckinney-905026213" style={{ textDecoration: 'none' }}>
                        <BsInstagram size={30} />
                    </Extlink>
        </A1>
        <A1>
                    <Extlink href="https://github.com/MiraynaMckinney" style={{ textDecoration: 'none' }}>
                        <BsGithub size = {30} />
                    </Extlink>
        </A1>
        </NContents>
        </Container>
    )
}
export default Contact;