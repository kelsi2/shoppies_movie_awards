import {useEffect, useCallback} from 'react';
import useDebounce from '../hooks/useDebounce';

export default function SearchBar(props) {
  // Debounce search for 400 ms before sending a request
  const term = useDebounce(props.value, 700);
  // Perform the search only if something in the request term changes
  const onSearch = useCallback(props.onSearch, [term]);

  useEffect(() => {
    onSearch(term);
  }, [term, onSearch]);

  return (
    <section>
      <form onSubmit={e => e.preventDefault()}>
        <input
          className='search-form'
          placeholder='Enter a movie title'
          name='search'
          type='text'
          value={props.value}
          onChange={e => props.setValue(e.target.value)}
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