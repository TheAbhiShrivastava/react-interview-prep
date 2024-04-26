import React, { useCallback, useState } from 'react'

const ChildComponent = ({ onClickHandler}) => {
    console.log(`ChildComponent re-rendered`);
    return (
        <></>
    )
}
const MemoizedChildComponent = React.memo(ChildComponent);

const AnotherChildComponent = ({ onClickHandler }) => {
    console.log(`AnotherChildComponent re-rendered`);
    return (
        <></>
    )
}
const MemoizedAnotherChildComponent = React.memo(AnotherChildComponent);

const UseCallbackDemo = () => {
    console.log(`UseCallbackDemo component re-rendered`);

    const [count, setCount] = useState(0);

    const memoizedOnClickHandler = useCallback(() => {
    }, []);

  return (
    <div className="flex flex-col pt-12 items-center">
      <div className='text-4xl font-medium'>UseCallbackDemo</div>
      <div className='pt-6'>
        <button className="bg-sky-600 px-4 text-white rounded" onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      </div>
      <MemoizedChildComponent onClickHandler={() => {}} />
      <MemoizedAnotherChildComponent onClickHandler={memoizedOnClickHandler} />
      <p className='text-2xl pt-2 italic'>Check console log!</p>
    </div>
  );
}

export default UseCallbackDemo