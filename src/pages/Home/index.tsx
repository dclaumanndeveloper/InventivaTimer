/* eslint-disable react/jsx-no-undef */
import { Play } from "phosphor-react";
import { HomeContainer,FormContainer, CountdownContainer, Separator, StartCountdownButton, TaskInput, MinutesAmountInput } from "./styles";

/* eslint-disable react/react-in-jsx-scope */
export function Home (){
    return (
        <HomeContainer>
         <form action="">
            <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput id="task" list="task-suggestions" placeholder="De um nome para o seu projeto"/>
            <datalist id="task-suggestions">
                <option value="Projeto 1"/>
                <option value="Projeto 2"/>
            </datalist>
            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput type="number" id="minutesAmount" placeholder="00" step={5} min={5} max={60}/>
            <span> minutos.</span>
            </FormContainer>
         <CountdownContainer>
            <span>0</span>
            <span>0</span>
            <Separator>:</Separator>
            <span>0</span>
            <span>0</span>
         </CountdownContainer>


         <StartCountdownButton> <Play size={24}/>Começar</StartCountdownButton>
         </form>
        </HomeContainer>
    );
}