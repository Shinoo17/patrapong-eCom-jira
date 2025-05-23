import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Add Items <span>remove Item</span></h1>
      <h1>E-com System 4.1.0 (Automate deploy)</h1>
      <h2>
        <a href="/login">Login</a>
      </h2>
      <div>Fix bug: API call not working @2.0.0</div>
      <div>Hotfix: something</div>
      <div>Some product page</div>
      <div>Some automate JIRA ticket</div>
      <div>Awesome feature: auto deploy</div>
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
