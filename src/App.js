import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('#f15025');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      setError(false);
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form>
          <input
            type='color'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={error ? 'error' : ''}
          />
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit' onClick={handleSubmit}>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return <SingleColor key={index} color={color} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
