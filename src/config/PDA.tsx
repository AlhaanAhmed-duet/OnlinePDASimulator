import { useState } from "react"
interface TransitionFunction {
    id: number,
    currState: string,
    onInputSymbol: string,
    tos: string,
    nextState: string,
    operation: "push" | "pop" | "no action",
    updatedTos: string
}
export class PushDownAutomata {
    private states: Array<string>
    private stackSymbols: Array<string>
    private initialStates: Array<string>
    private finalState: string
    private inputAlphabets: Array<string>
    private initialStackSymbol: string
    private transitions: Array<TransitionFunction>
    private stack: Array<string> = ["e"]

    public constructor(states: Array<string>, stackSymbols: Array<string>, initialStates: Array<string>, finalState: string, inputAlphabets: Array<string>, transitions: Array<TransitionFunction>) {
        this.states = states
        this.stackSymbols = stackSymbols
        this.initialStates = initialStates
        this.finalState = finalState
        this.inputAlphabets = inputAlphabets
        this.initialStackSymbol = stackSymbols[0]
        this.transitions = transitions
        this.stack.push("$")
    }

    public push(item: string): void {
        this.stack.push(item)
    }
    // Take a look at the top of the stack
    public peek(): string {
        let top: number = this.stack.length - 1
        return this.stack[top]
    }
    public pop(): void {
        this.stack.pop()
    }

}

export default function FileInputComponent() {
    const emptyTransition: TransitionFunction = {
        id: 0,
        currState: "",
        onInputSymbol: "",
        tos: "",
        nextState: "",
        operation: "no action",
        updatedTos: ""
    }
    const [newTransition, setNewTransition] = useState(emptyTransition)
    
    function createTransitions(): void {
   
    }
    
    return (
        <>
            <form>
                <input type="text" placeholder="Enter current state: " />
                <input type="text" placeholder="Enter input symbol: " />
                <label>Enter operation on your input symbol: </label>
                <input type="radio" name="operation"></input><label>Push</label>
                <input type="radio" name="operation"></input><label>Pop</label>
                <input type="radio" name="operation"></input><label>No action</label>
                <input type="text" placeholder="Enter next state" />
            </form>
            <button>Generate PDA Machine</button>
        </>
    )
}


