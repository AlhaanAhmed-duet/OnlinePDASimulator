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
    const godelData: string = "101110111101101111"
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
    const splitBySeperator = godelData.split("0")
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
    const detectCurrentPrevInputSymbol = function (): any {
        const detectCurrentInputSymbol: any = Object.entries(encodingRules.inputSymbols).find(([key,value]) => {
            return value === splitBySeperator[1]
        })
        const detectCurrentStackSymbol: any = Object.entries(encodingRules.stackSymbols).find(([key , value]) => {
            return value === splitBySeperator[1]
        })
        if (detectCurrentInputSymbol?.[0] == undefined && detectCurrentStackSymbol?.[0] != undefined) {
            return detectCurrentStackSymbol?.[0]
        }
        else {
            return detectCurrentInputSymbol?.[0]
        }
    }
    const detectCurrentNextInputSymbol = function(): any {
        const detectNextInputSymbol: any = Object.entries(encodingRules.inputSymbols).find(([key,value]) => {
            return value === splitBySeperator[2]
        })
        const detectNextStackSymbol: any = Object.entries(encodingRules.stackSymbols).find(([key , value]) => {
            return value === splitBySeperator[2]
        })
        if (detectNextInputSymbol?.[0] == undefined && detectNextStackSymbol?.[0] != undefined) {
            return detectNextStackSymbol?.[0]
        }
        else {
            return detectNextInputSymbol?.[0]
        }
    }
    const detectNextState = function (): any {
        const statesEncoding = Object.values(encodingRules.states);
        const checkNextStateEncoding = statesEncoding.find((str) => {
            return str === splitBySeperator[3]
        })
        if (checkNextStateEncoding) {
            const detectStatebyEncoding = Object.entries(encodingRules.states).find(([key, value]) => {
                return value === checkNextStateEncoding
            })
            return detectStatebyEncoding?.[0]
        }
        else {
            console.error("No state match is found, possibly wrong encoding!!")
        }
    }
    const detectNextInputSymbol = function (): any {
        const detectNextInputIfInputSymbol = Object.entries(encodingRules.inputSymbols).find(([key, value]) => {
            return value === splitBySeperator[4]
        })
        const detectNextInputIfStackSymbol = Object.entries(encodingRules.stackSymbols).find(([key, value]) => {
            return value === splitBySeperator[4]
        })
        if (detectNextInputIfInputSymbol?.[0] === undefined && detectNextInputIfStackSymbol?.[0] !== undefined) {
            return detectNextInputIfStackSymbol?.[0]
        }
        else {
            return detectNextInputIfInputSymbol?.[0]
        }
    }
    const currState = detectcurrentState()
    const currSymbol = detectCurrentPrevInputSymbol()
    const nextCurrSymbol = detectCurrentNextInputSymbol()
    const nextState = detectNextState()
    const nextInputSymbol = detectNextInputSymbol()
    
    console.log("Current State: ",currState)
    console.log("Current Prev Input Symbol: ",currSymbol)
    console.log("Current Next Input Symbol: ", nextCurrSymbol)
    console.log("Next State: ",nextState)
    console.log("Next Input Symbol: ", nextInputSymbol)
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


