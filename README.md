# Online PDA Simulator
OnlinePDASimulator is a project for Theory of Computation course taught in Computer Science and its domains, built with React(Vite) in Typescript.
To develop or contribute with my project you can do the following changes:\
```git clone <this-repository-url>```\
```cd OnlinePDASimulator```\
```npm install```\
or simply\
```yarn add```\

# Encoding Rules for Godel Encoding
The encoding Rules for Godel Encoding must be done according to the data defined in JSON Format. Else your wrong encoding can create problems:
```js
encodingRules = {
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
```
\
Use 0 as seperator in the string, 00 for transition and 000 for begin and end of the string
