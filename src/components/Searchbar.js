import {useEffect, useState, useCallback} from 'react';
import useDebounce from '../hooks/useDebounce';

export default function SearchBar(props) {
  // Start with empty search value
  const [value, setValue] = useState('');
  // Debounce search for 400 ms before sending a request
  const term = useDebounce(value, 700);

  useEffect(() => {
    props.onSearch(term);
  }, [term, props.onSearch]);

  return (
    <section>
      <form onSubmit={e => e.preventDefault()}>
        <input
          className='search-form'
          placeholder='Enter a movie title'
          name='search'
          type='text'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        {props.loading && props.term ? 
          <i className="fas fa-sync"></i>
          :
          ''
        }
      </form>
    </section>
  )
}