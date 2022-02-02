# State Managment
### Defining State(Wednesday) 
### Lifting State & Inverse Dataflow(Thursday)
### Controlled Inputs(Friday)


## Learning Goals
- Understand what state is
- Be able to define state
- Understand our to destructure an Array
- Events in React vs Vanilla JS 
- Make decisions about where state should live 
- get comfortable moving (or "lifting") state 
- Understand what we mean by "inverse data flow"
- Understand controlled inputs in forms

## Coding Objectives
- Add a Buy Button - when the button is clicked the tile should say 'SOLD'
- Be able to click on an item replace the main display with the clicked item
- Forms and controlled inputs (Friday)
   - filling out the form should add an item to the list
- Fetch and set state on page load using useEffect (Monday) 



## Determining State
- State is reserved only for interactivity, that is, data that changes over time.
- First need to think of the MINIMAL set of mutable state that your app needs.
- Ask three questions about each piece of data:
1.) Is it passed in from a parent via props? If so, it probably isn’t state.
2.) Does it remain unchanged over time? If so, it probably isn’t state.
3.) Can you compute it based on any other state or props in your component? If so, it isn’t state.