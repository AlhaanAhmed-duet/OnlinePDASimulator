import { Link } from "react-router-dom"
import { Transitions } from "../config/PDA"
export default function PDASimulation() {
    const transitions :Array<Transitions> = [{
       currState: "q0", 
       onInputSymbol: "a",
       nextState: "q0",
       operation: "push", 
       updateTos: "a"
    },
    {
        currState: "q0", 
        onInputSymbol: "b",
        nextState: "q1",
        operation: "pop", 
        updateTos: "epsilon"
    },
    {
        currState: "q1", 
        onInputSymbol: "b",
        nextState: "q1",
        operation: "pop", 
        updateTos: "epsilon"
    },
    {
        currState: "q1", 
        onInputSymbol: "epsilon",
        nextState: "q2",
        operation: "pop", 
        updateTos: "epsilon"
    }]
    let initialState = transitions[0].currState
    let finalState = transitions[3].nextState
// Remaining work will start from here
    return (
        <>
            
            <div>Simulation Page.. In development progress 1%</div>
            <Link to={"/createPDA"}>Create your own PDA</Link>
        </>
    )
}