import { ChangeEvent, MouseEvent, useState } from "react"
import { Transitions, PushDownAutomata } from "../config/PDA"
export default function CreatePDA() {
    const emptyTransition: Transitions = {
        currState: "",
        onInputSymbol: "",
        nextState: "",
        operation: "no action",
        updateTos: ""
    }
    const [newTransition, setNewTransition] = useState(emptyTransition)
    const [displayTransitions, setDisplayTransitions] = useState<Transitions[]>([])
    
    function onChangeHandler(event: ChangeEvent<HTMLInputElement>): void {
        setNewTransition((prev) => {
            return {...prev, [event.target.name] : event.target.value}
        })
    }

    function onChangeOptionHandler(event: ChangeEvent<HTMLInputElement>): void {
        const triggeredAction = event.target.value;
        if (triggeredAction === "push") {
            setNewTransition((prev) => {
                return {...prev, operation: "push"}
            })
        }
        else if (triggeredAction === "pop") {
            setNewTransition((prev) => {
                return {...prev, operation: "pop"}
            })
        }
        else {
            setNewTransition((prev) => {
                return {...prev, operation: "no action"}
            })
        }
    }
    function displayTransition(event: MouseEvent): void {
        event.preventDefault();
        let transitionId = 0;
        setNewTransition((prev) => {
            return {...prev, id: transitionId++}
        })
        setDisplayTransitions((prev) => {
            return [...prev, newTransition]
        })
        console.log(displayTransitions)
    }
    
    return (
        <>
            <form style={{display: "flex", alignItems: "left", justifyContent: "center", flexDirection: "column"}}>
                <label>Enter current state:  </label>
                <input type="text" name="currState" onChange={(e) => onChangeHandler(e)} placeholder="Enter current state: " />
                <label>Enter Input Symbol:  </label>
                <input type="text" name="onInputSymbol" onChange={(e) => onChangeHandler(e)} placeholder="Enter input symbol: " />
                <label>Enter operation on your input symbol: </label>
                <label>Push</label>
                <input type="radio" name="operation" value="push" onChange={(e) => onChangeOptionHandler(e)}></input>
                <label>Pop</label>
                <input type="radio" name="operation" value="pop" onChange={(e) => onChangeOptionHandler(e)}></input>
                <label>No action</label>
                <input type="radio" name="operation" value="no action" onChange={(e) => onChangeOptionHandler(e)}></input>
                <label>Enter next state to transition: </label>
                <input type="text" placeholder="Enter next state" name="nextState" onChange={(e) => onChangeHandler(e)}/>
                <label>Update Top of the stack:  </label>
                <input type="text" placeholder="Enter next state" name="updateTos" onChange={(e) => onChangeHandler(e)}/>
                <button onClick={displayTransition}>Generate PDA Machine</button>
            </form>
            
        </>
    )
}