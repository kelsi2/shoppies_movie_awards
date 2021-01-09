import {useEffect, useState} from 'react';

// Debounce hook to ensure search requests are not being made with each character typed
export default function useDebounce(input, ms) {
  const [debounced, setDebounced] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => setDebounced(input), ms);
    return () => clearTimeout(timeout);
  }, [input, ms]);

  return debounced;
}