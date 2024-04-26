import React, { useState } from 'react'
/*
    React.memo is a higher order component that memoizes the component, 
    meaning it will only re-render if the props change
    React.memo is a shallow comparison, meaning it compares the references of the props
    if the references are different, it will re-render, if the references are the same, it will not re-render
    React.memo takes two arguments, the component and the comparison function, comparison function is optional
    comparison function takes two arguments, the previous props and the next props, and returns a boolean
    comparison function when you want to do a deep comparison of the props, with custom logic
*/

const SwatchComponent = ({color}) => {
    console.log(`swatch re-rendered`)
    return (
        <div className="swatch-component" style={{width:40, height:40, background: color}}></div>
    )
}
const MemoizedSwatchComponent = React.memo(SwatchComponent);


const AnotherSwatchComponent = ({obj}) => {
    console.log(`another swatch re-rendered`)
    return (
        <div className="swatch-component" style={{width:40, height:40, background: obj.color}}></div>
    )
}
const MemoizedAnotherSwatchComponent = React.memo(AnotherSwatchComponent);


const JustAnotherSwatchComponent = ({obj}) => {
    console.log(`just another swatch re-rendered`)
    return (
        <div className="swatch-component" style={{width:40, height:40, background: obj.color}}></div>
    )
}
const MemoizedJustAnotherSwatchComponent = React.memo(JustAnotherSwatchComponent, (prevProps, nextProps) => {
    return prevProps.obj.color === nextProps.obj.color
});



const ReactMemo = () => {

    const [btnClickCount, setBtnClickCount] = useState(0);
    const [swatchColorToggle, setSwatchColorToggle] = useState(true);

    /*
        this does not gets re-render if parent re-renders, as with React.memo, we are just custom
        comparison function, which compares the previous props and the next props, and returns a boolean
        and does a deep comparison of the props, with custom logic
    */
    console.log(`ReactMemo component re-rendered: ${btnClickCount}`)

  return (
    <>
        <div>ReactMemo</div>
        <div>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
             onClick={() => setBtnClickCount(prev => prev+1)}>Re-render</button>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
             onClick={() => setSwatchColorToggle(prev => !prev)}>Toggle color </button>
        </div>
        <div>
            <MemoizedSwatchComponent color={swatchColorToggle ? "red" : "blue"}/>
            <MemoizedAnotherSwatchComponent obj={swatchColorToggle ? {"color": "blue"} : {"color": "red"}}/>
            <MemoizedJustAnotherSwatchComponent obj={swatchColorToggle ? {"color": "red"} : {"color": "blue"}}/>
        </div>
    </>
  )
}

export default ReactMemo