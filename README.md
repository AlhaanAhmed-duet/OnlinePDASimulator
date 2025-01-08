# Online PDA Simulator
OnlinePDASimulator is a project for Theory of Computation course taught in Computer Science and its domains, built with React(Vite) in Typescript.
To develop or contribute with my project you can do the following changes:\
```git clone <this-repository-url>```\
```cd OnlinePDASimulator```\
```npm install```\
or simply\
```yarn add```

# Transitions JSON Format
The data is defined in JSON Format for Transitions and Configuration of PDA:
```json
{
        "currState": "q0, q1, q2 etc..",
        "onInputSymbol": "a or b or c",
        "tos": "a or b or c", 
        "nextState": "q0, q1, q2 etc..",
        "operation": "push, pop or no action",
        "updatedTos": "a or b or c or epsilon or dollarSign" 
}
```
\
The project is under development. There is current working only on basic functionality till 8/1/25
