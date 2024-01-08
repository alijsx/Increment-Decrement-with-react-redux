import React from 'react'
import './App.css'
import { useSelector , useDispatch } from 'react-redux'
import { incNumber , decNumber } from './actions'


function App() {

  const myState = useSelector ((state) => state.changeTheNumber) 

  const dispatch = useDispatch();

  return (
    <>
      <div className='flex justify-center items-center h-screen'>


        <div>

          <div className='text-center'>
            <h1 className='text-4xl font-medium text-purple-600'>
              Increment/Decrement Counter
            </h1>
            <h4 className='text-xl mt-2'>
              Using React and Redux
            </h4>
          </div>
          <div className='grid col-span-12  text-center mt-2'>

            <div className='col-span-12 flex justify-center items-center'>
              <div className='flex space-x-2'>
                <button className='px-2 py-2 bg-purple-600 rounded-lg text-white' title='Decrement'   onClick={() => dispatch(decNumber())}  >
                  
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                </svg>
                </button>
                <input type="text" value={myState}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-16    p-2.5" placeholder="" required></input>
                <button className='px-2 py-2 bg-purple-600 rounded-lg text-white' title='Increment'   onClick={() => dispatch(incNumber())}>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                </button>
              </div>




            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default App
