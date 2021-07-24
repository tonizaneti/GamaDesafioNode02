import styled from 'styled-components';


export const StyledButton = styled.button`
    background-color:${(props) => props.backColor};
    width: 15rem;
    padding: 1rem 1rem;
    border: none;
    border-radius: 20px;
    margin-right: 1rem;
    cursor: pointer;
    font-size: 1.5rem;
    color: #858585;


    &:hover {
      filter: brightness(2.5)
    }
`;