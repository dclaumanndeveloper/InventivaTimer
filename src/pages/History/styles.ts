/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";


export const HistoryContainer = styled.main`
 flex:1;
 padding: 3.5rem;

 display:flex;
 flex-direction:column;

 h1 {
  font-size:1.5rem;
  color: white;
 }
`;

export const HistoryList = styled.div`
flex:1;
overflow: auto;
margin-top: 2rem;

    table { 
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

        th{
        background-color: blue;
        padding: 1rem;
        text-align: left;
        color: green;
        font-size: 0.875rem;
        line-height:1.6;

                &:first-child {
                border-top-left-radius: 8px;
                padding-right: 1.5rem;

            }
        }
        td{
        background-color: gray;
        border-top: 4px solid blue;
        padding: 1rem;
        font-size: 0.875rem;

        }

    }
`;

const STATUS_COLORS = {
    yellow: 'yellow',
    red: '#FF0000',
    green: '#00FF00',
} as const;
interface StatusProps {
    statusColor: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<StatusProps>`
 display: flex;
 align-items: center;
 gap:0.5rem;

   &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background-color: ${(props) => props.statusColor};
   }
`;
