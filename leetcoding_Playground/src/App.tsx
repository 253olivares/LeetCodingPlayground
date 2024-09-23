import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { practice3 } from './leetCode_jsPlaygrounds/practice3'
import { practice1768 } from './leetCode_jsPlaygrounds/leetCode1768'
// import { practice1 } from './leetCode_jsPlaygrounds/practice1'
// import { practice2 } from './leetCode_jsPlaygrounds/practice2'

function App() {
  const [count, setCount] = useState(0)

  // let nums1 = [1,2,3,0,0,0]; 
  // let m = 3;
  // let nums2 = [2,5,6];
  // let n = 3;

  // let nums1 = [1]; 
  // let m = 1;
  // let nums2:number[] = [];
  // let n = 0;

  // let nums1 = [0]; 
  // let m = 0;
  // let nums2:number[] = [1];
  // let n = 1;

  // console.log('test');

  // practice1(nums1,m,nums2,n);

  // console.log(practice2([3,2,2,3],3));

  // let nums1 = ["1","v","as"];
  // let nums2 = ["1vas"];

  // console.log(practice3(nums1,nums2));
  console.log(practice1768("abc","pqr"));

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
