import {useEffect, useState, useCallback} from 'react';
import useDebounce from '../hooks/useDebounce';

export default function SearchBar(props) {
  // Start with empty search value
  const [value, setValue] = useState('');
  // Debounce search for 400 ms before sending a request
  const term = useDebounce(value, 400);
  // Perform the search only if something in the request term changes
  const onSearch = useCallback(props.onSearch, [term]);

  useEffect(() => {
    onSearch(term);
  }, [term, onSearch]);

  return (
    <section className='search'>
      <form className='search_form' onSubmit={e => e.preventDefault()}>
        <input
          className='radius'
          placeholder='Enter a movie title'
          name='search'
          type='text'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    </section>
  )
}