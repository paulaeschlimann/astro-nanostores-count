import { useEffect, useState } from 'react';
import { useStore } from '@nanostores/react'
import { counterStore } from '../stores/count'

const ReactCounter = () => {
  const [count, setCount] = useState(0);

  const $count = useStore(counterStore)
  //const count = 5

  useEffect(() => {
    // Subscribe to store updates
    //count = useStore(counterStore)
    //setCount($count)
    counterStore.subscribe((value, oldValue) => {
        //console.log(`counter value changed from ${oldValue} to ${value}`)
        setCount(value)
    })
  }, []);

  const increment = () => {
    counterStore.set(count + 1);
  };

  return (
    <div className="counter">
      <p>Count: {count} (React)</p>
      <button onClick={increment}>+ 1</button>
    </div>
  );
};

export default ReactCounter;
