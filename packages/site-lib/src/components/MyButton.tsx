import styled from 'styled-components';
import add from '../calculations/add';

const MyButton = () => {
    return (<Button onClick={() => alert("You get: " + add(2,2))}>Add 2 + 2</Button>)
}

const Button = styled.button`
    border: none;
    border-radius: 0.5rem;
    background-color: #186faf;
    color: hsl(0deg, 0%, 98%);
    padding: 0.75rem;
    cursor: pointer;
    &:hover {
        background-color: #0a558c;
    }
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #62b0e8;
        background-color: #0a558c;
    }
`;

export default MyButton;