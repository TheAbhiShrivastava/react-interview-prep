import React, {useState, useEffect} from 'react'
import { useDebounce } from 'use-debounce';

const Debouncing = () => {
    const [typedText, setTypedText] = useState('');
    const [debouncedText, setDebouncedText] = useState('');
    
    // custom hook to debounce input using library use-debounce
    const [debouncedTextUsingLib] = useDebounce(typedText, 1000);

    const handleSearchInputChange = (e) => {
        setTypedText(e.target.value);
    }

    // debouncing input logic
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedText(typedText);
        }, 1000);

        /* Cleanup function in case component gets unmounted,
        *  before the timeout is completed, to avoid memory leaks
        */
        return () => {
            clearTimeout(timeout);
        }
    }, [typedText])

  return (
    <div className="flex flex-col pt-12 debouncing-container">
        <h1 className='text-5xl'>Debouncing Demo</h1>
        <div>
            <label className="pt-12 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search course</label>
            <input type="text" value={typedText} onChange={handleSearchInputChange} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
            <p className='pt-4'>Actual typed text: <span>{typedText}</span></p>
            <p className='pt-4'>Debounced text: <span>{debouncedText}</span></p>
            <p className='pt-4'>Debounced text using lib: <span>{debouncedTextUsingLib}</span></p>
        </div>
    </div>
  )
}

export default Debouncing