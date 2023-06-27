import './OnOff.css'
import { useState } from 'react'

type PropsType = {
  isOn: boolean
}

export const OnOff = (props: PropsType) => {
  const [status, setStatus] = useState<boolean>(props.isOn)

  return (
    <div className="wrapper">
      <button
        className={`status ${status ? 'green' : ''}`}
        onClick={() => setStatus(true)}
      >
        ON
      </button>
      <button
        className={`status ${!status ? 'red' : ''}`}
        onClick={() => setStatus(false)}
      >
        OFF
      </button>
      <div className={`indicator ${status ? 'green' : 'red'}`}></div>
    </div>
  )
}
