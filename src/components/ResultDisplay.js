import { useContext } from 'react'
import '../assets/scss/Result.scss'
import { AppContext } from '../context/appContext'
const ResultDisplay = () => {
    const {state} = useContext(AppContext)
    console.log(state);
  return (
    <div className="Result-main">
        {state && (<><span>{state.years}</span> Years<span> {state.months}</span>months <span>{state.days}</span> days</>) }
    </div>
  )
}

export default ResultDisplay