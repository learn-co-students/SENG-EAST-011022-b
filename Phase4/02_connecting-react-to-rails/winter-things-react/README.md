# State Managment
### Wednesday: Defining State & Adding Events
### Thursday: Lifting State & Inverse Dataflow
### Friday: Controlled Inputs


https://doesitmutate.xyz/

[Our Wireframe & Component Hierarchy](https://miro.com/app/board/uXjVORfXYPE=/?invite_link_id=460000643272)

- .map .filter

## Learning Goals
##### Wednesday
- Understand what state is
- Be able to define state
- Understand how to destructure an Array
- Events in React vs Vanilla JS
##### Thursday 
- Make decisions about where state should live (First Step evererytime we use state)
- get comfortable moving (or "lifting") state 
- Understand what we mean by "inverse data flow"
##### Friday
- Understand controlled inputs in forms

## Coding Objectives
##### Wednesday
- Add a Buy Button - when the button is clicked the tile should say 'SOLD'
##### Thursday 
- Button to delete an item
- Be able to click on an item replace the main display with the clicked item
##### Friday
- Forms and controlled inputs
   - filling out the form should add an item to the list
#### Monday
- Fetch and set state on page load using useEffect (Monday)
#### Tuesday
- POST & DELETE



## Determining State
- State is reserved only for interactivity, that is, data that changes over time.
- First need to think of the MINIMAL set of mutable state that your app needs.
- Ask three questions about each piece of data:
1.) Is it passed in from a parent via props? If so, it probably isn’t state.
2.) Does it remain unchanged over time? If so, it probably isn’t state.
3.) Can you compute it based on any other state or props in your component? If so, it isn’t state.