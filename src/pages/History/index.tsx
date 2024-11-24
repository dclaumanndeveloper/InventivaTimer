/* eslint-disable react/react-in-jsx-scope */
import { HistoryContainer, HistoryList, Status } from "./styles";

export function History(){
    return <HistoryContainer>
        <h1>Histórico</h1>
        <HistoryList>
            <table>
                <thead>
                  <tr>
                    <th>Tarefa</th>
                    <th>Duração</th>
                    <th>Início</th>
                    <th>Status</th>
                    </tr>  
                </thead>
                <tbody>
                    <tr>
                        <td>Tarefa</td>
                        <td> 20 minutos</td>
                        <td> Há dois meses</td>
                        <Status  statusColor="green">Concluido</Status>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td> 20 minutos</td>
                        <td> Há dois meses</td>
                        <Status statusColor="green">Concluido</Status>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td> 20 minutos</td>
                        <td> Há dois meses</td>
                        <Status  statusColor="green">Concluido</Status>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td> 20 minutos</td>
                        <td> Há dois meses</td>
                        <Status  statusColor="green">Concluido</Status>
                    </tr>
                </tbody>
            </table>
        </HistoryList>
    </HistoryContainer>
}