import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useDebounce } from 'use-debounce';

const AbortControllerDemo = () => {

    const [typedText, setTypedText] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [todos, setTodos] = useState([]);
    
    // custom hook to debounce input using library use-debounce
    const [debouncedTextUsingLib] = useDebounce(typedText, 1000);

    const handleSearchInputChange = (e) => {
        setTypedText(e.target.value);
    }

    useEffect(() => {
        if(!debouncedTextUsingLib) return;

        const abortController = new AbortController();

        console.log('fetching data');
        setLoading(true);
        setError(null);

        /*
        instead of signal: abortController.signal, we can also use AbortSignal.timeout(5000) -> for 5sec
        */

        axios.get(`/api/todos?term=${debouncedTextUsingLib}`, { signal: abortController.signal })
            .then(res => {
                setTodos(res.data.todos);
            })
            .catch(err => {
                if(err.name === 'AbortError') {
                    console.log('Request was aborted', err);
                    return;
                }
                setError(err.message);
            }) 
            .finally(() => {
                setLoading(false);
            });

        return () => {
            abortController.abort();
        }

    }, [debouncedTextUsingLib])

    console.log('todos', todos);

    return (
        <div className="flex flex-col pt-12 debouncing-container">
            <h1 className='text-5xl'>Abort Controller Demo</h1>
            <div>
                <label className="pt-12 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search course</label>
                <input type="text" value={typedText} onChange={handleSearchInputChange} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                <p className='pt-4'>Actual typed text: <span>{typedText}</span></p>
                <p className='pt-4'>Debounced text using lib: <span>{debouncedTextUsingLib}</span></p>
            </div>
            <div className='pt-6'>
                <h2 className='text-3xl'>Todos</h2>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                <ul>
                    {todos?.map(todo => (
                        <li key={todo.id}>{todo.text}</li>
                    ))}
                </ul>
            </div>
        </div>
      )
}

export default AbortControllerDemo