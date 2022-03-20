import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { Button } from 'react-bootstrap';

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  calllocaljobsapi,
  selectResult,
  addValue 
} from './counterSlice';
import styles from './Counter.module.css';
import { setSourceMapRange } from 'typescript';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export function Counter() {
  const count = useAppSelector(selectCount);
  const result=useAppSelector(selectResult);
  // const firstValueL=useAppSelector(firstValue);
  // const secondValueL=useAppSelector(secondValue);

  const restult1=useSelector((state: RootState) => state.counter.value);

  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

   
  const [valueToAdd, setValueToAdd] = useState({
    firstValue: 0,
    secondValue: 0
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
      const { name, value } = e.target;
      setValueToAdd(prevState => ({
          ...prevState,
          [name]: value
      }));
  };
    
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <input value={valueToAdd.firstValue}  name="firstValue" onChange={handleChange}/>
        <input value={valueToAdd.secondValue} name="secondValue" onChange={handleChange}/>
        <input value={result} readOnly></input>
        <Button variant="primary"
          className={styles.button}
          aria-label="Add Value"
           onClick={() => dispatch(addValue(valueToAdd))}
        >Add 2 numberss</Button>

   <Button variant="success"
          className={styles.button}
          aria-label="Add Value API"
           onClick={() => dispatch(calllocaljobsapi(valueToAdd))}
        >Add Value API</Button>

 
     {/*    <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >   
          -
        </button> 
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>*/}
      </div>
      <div className={styles.row}>
{/*         <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>

        
          Call custom API
       

        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button> */}
      </div>
    </div>
  );
}




