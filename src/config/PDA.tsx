import { ChangeEvent} from "react"

interface TransitionFunction {
    id: number,
    currState: string,
    input: string | Array<string>,
    tos: string,
    operation: "push" | "pop" | "no push & pop",
    nextState: string   
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

function readGodelFile(event: ChangeEvent<HTMLInputElement>): void {
//  Import Files
    let file = event.target.files?.[0]
    const reader = new FileReader()
    if (file) {
        reader.onload = () => {
            const content = reader.result as string
            console.log(content)
        }
        reader.readAsText(file)
    }
}

function processGodelData(): void {
    const godelData: string = "11101110111101101111"
    let encodingRules = {
        states: {
            q0: "1",
            q1: "11",
            q2: "111",
            q3: "1111"
        },
        inputSymbols: {
            a: "1",
            b: "11"
        },
        stackSymbols: {
            epsilon: "111",
            dollarSign: "1111"
        }
    }
    const splitBySeperator = godelData.split("0", 4)
    const detectcurrentState = (): any => {
        const statesEncoding = Object.values(encodingRules.states);
        const checkStateEncoding = statesEncoding.find((str) => {
            return str === splitBySeperator[0]
        })
        if (checkStateEncoding) {
            const detectStatebyEncoding = Object.entries(encodingRules.states).find(([key, value]) => {
                return value === checkStateEncoding
            })
            return detectStatebyEncoding?.[0]
        }
        else {
            console.error("No state match is found, possibly wrong encoding!!")
        }
    }
    const currState = detectcurrentState()
    console.log(currState)
}
   


export default function FileInputComponent() {
    return (
        <>
            <div>Upload a text file: </div>
            <input type="file" onChange={readGodelFile} />
            <button onClick={processGodelData}>Click Function</button>
        </>
    )
}


