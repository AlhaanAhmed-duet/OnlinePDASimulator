export interface Transitions {
    currState: string,
    onInputSymbol: string,
    nextState: string,
    operation: "push" | "pop" | "no action",
    updateTos: string
}
export class PushDownAutomata {
    private states: Array<string>
    private initialStates: Array<string>
    private finalState: string
    private inputAlphabets: Array<string>
    private initialStackSymbol: string
    private transitions: Array<Transitions>
    public stack: Array<string> = []

    public constructor(states: Array<string>, initialStates: Array<string>, finalState: string, inputAlphabets: Array<string>, transitions: Array<Transitions>) {
        this.states = states
        this.initialStates = initialStates
        this.finalState = finalState
        this.inputAlphabets = inputAlphabets
        this.initialStackSymbol = "$"
        this.transitions = transitions
        this.stack.push(this.initialStackSymbol)
    }
//  Some stack operations defined here for ease
    private push(item: string): void {
        this.stack.push(item)
    }

    private pop(): void {
        this.stack.pop()
    }

//  Returns state of the stack
    public showStackForPushDownAutomataVisualization(): void {
        console.log(this.stack)
    }

//  Returns nextState progression by a number

    public progressNextState(): number {
        let progressCounter = 0;
        for (let i = 0; i < this.transitions.length; i++) {
            if (this.transitions[i].currState !== this.transitions[i].nextState) {
                progressCounter++
            }
        }
        return progressCounter
    }

//  Return true if accepted and if false then reject

    public checkAcceptanceForPDA(inputStr: string): boolean {
        const input = Array.from(inputStr);
        let currentState = this.initialStates[0]
        for (let i = 0; i < input.length; i++) {
            
            const currentSymbol = input[i];
            const currentTransition = this.transitions.find((each) => {
                return each.currState === currentState && each.onInputSymbol === currentSymbol
            })
            if (!currentTransition) {
                console.log("Not a valid transition")
                return false
            }

            if (currentTransition.operation === "push") {
                this.push(currentTransition.updateTos)
                showStackForPushDownAutomataVisualization()
            } else if (currentTransition.operation === "pop" && currentTransition.updateTos == "epsilon") {
                if (this.stack.length < 0) {
                    console.log("Stack Underflow")
                    return false
                }
                this.pop()
                                
            }
            currentState = currentTransition.nextState
        }
        return currentState === this.finalState && this.stack.length > 0
    }
}




