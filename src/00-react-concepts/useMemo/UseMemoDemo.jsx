import React from 'react'

const ExpensiveComponent = ({ params }) => {
    console.log(`ExpensiveComponent re-rendered`);
    return (
        <>
            <div>ExpensiveComponent</div>
            <div style={{width: 75, height: 75, background: params.color}}></div>
        </>
    )
}
const MemoizedExpensiveComponent = React.memo(ExpensiveComponent);

const AnotherExpensiveComponent = ({ params }) => {
  console.log(`AnotherExpensiveComponent re-rendered`);
  return (
    <>
      <div>AnotherExpensiveComponent</div>
      <div style={{ width: 75, height: 75, background: params.color }}></div>
    </>
  );
};
const MemoizedAnotherExpensiveComponent = React.memo(AnotherExpensiveComponent);

const UseMemoDemo = () => {
    const [color, setColor] = React.useState('red');

    const [count, setCount] = React.useState(0);

    const memoizedParams = React.useMemo(() => {
       return {color}
    }, [color])

    console.log(`useMemoDemo component re-rendered`);

  return (
    <>
      <div>useMemoDemo</div>
      <div>
        {/* <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Re-render
        </button> */}
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Re-render
        </button>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => setColor((prev) => (prev === "red" ? "blue" : "red"))}
        >
          Change color
        </button>
        <MemoizedExpensiveComponent params={memoizedParams} />
        <MemoizedAnotherExpensiveComponent params={{ color }} />
      </div>
    </>
  );
}

export default UseMemoDemo;