import {useEffect, useCallback} from 'react';
import useDebounce from '../hooks/useDebounce';
import '../styles/Search.css';

export default function SearchBar(props) {
  // Debounce search for 1000 ms before sending a request
  const term = useDebounce(props.value, 1000);
  // Perform the search only if something in the request term changes
  const onSearch = useCallback(props.onSearch, [term]);

  useEffect(() => {
    onSearch(term);
  }, [term, onSearch]);

  return (
    <section>
      <form onSubmit={e => e.preventDefault()}>
        <div className="input-container">
          <input
            className='search-form'
            placeholder='Movie title...'
            name='search'
            type='text'
            value={props.value}
            onChange={e => props.setValue(e.target.value)}
          />
          <i className="fas fa-search"></i>
        {/* Display loading icon when searching */}
        {props.loading && props.term ? 
          <i className="fas fa-sync"></i>
          :
          ''
        }
        </div>
      </form>
    </section>
  )
}