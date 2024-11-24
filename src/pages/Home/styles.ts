import styled from "styled-components";
export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;

  }

`;

export const FormContainer = styled.div`
 width: 100%;
 display: flex;
 align-items: center;
 justify-content:center;
 gap: 0.2rem;
 color: #f0f0f0;
 font-size: 1.125rem;
 font-weight: bold;
 flex-wrap: wrap;




`;

export const CountdownContainer = styled.div`
   font-family: 'Roboto Mono, monospace;
   font-size: 10rem;
   line-height: 8rem;
   color: #f5f5fe;

   display: flex;
   gap: 1rem;

   span {
    background: blue;
    padding: 2rem 1rem;
    border-radius: 8px;
    
   }

`;

export const Separator = styled.span`
 padding: 2rem 0;
 color: #00FF00;
 background: green;
 width: 4rem;
 overflow:hidden;
 display:flex;
 justify-content: center;
`;

const BaseInput = styled.input`
 background: transparent;
 height: 2.5rem;
 border: 0;
 border-bottom 2px solid #fff;
 font-weight: bold;
 font-size: inherit;
 padding: 0;
 color: #000;

`;

export const TaskInput = styled(BaseInput)`
  flex:1;
`;

export const MinutesAmountInput = styled(BaseInput)`
width: 4rem;
`;

export const StartCountdownButton = styled.button`
 width: 100%;
 border: 0;
 padding: 0.5rem;
 border-radius: 8px;

 display:flex;

 align-items: center;
 justify-content:center;

 gap: 0.5rem;
 font-weight:bold;

 cursor:pointer;

 background: blue;
 color: #cecece;
 &:hover{
  background: red;
 }

`;