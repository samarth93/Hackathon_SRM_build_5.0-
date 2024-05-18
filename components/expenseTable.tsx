import React from 'react'

const expenseTable = () => {
  return (
    <>
      <div className='max-w-screen flex pl-10 pr-10 gap-5'>
        <div className="bg-black border-3 border-gray-400 p-4 rounded-lg shadow-md w-1/3 hover:shadow-glow transition duration-300 ease-in-out">
          <div className='text-4xl font-bold'>
            Wallet:
          </div>
          <div className='text-green-700'>122%</div>
          <div className="text-7xl text-right">$10000</div>
        </div>
        <div className="bg-black border-3 border-gray-400 p-4 rounded-lg shadow-md w-1/3 hover:shadow-glow transition duration-300 ease-in-out">
          <div className='text-4xl font-bold'>
            Spent:
          </div>
          <div className='text-green-700'>122%</div>
          <div className="text-7xl text-right">$1</div>
        </div>
        <div className="bg-black border-3 border-gray-400 p-4 rounded-lg shadow-md w-1/3 hover:shadow-glow transition duration-300 ease-in-out">
          <div className='text-4xl font-bold'>
            Budget:
          </div>
          <div className='text-red-700'>122%</div>
          <div className="text-7xl text-right">$-10000</div>
        </div>
      </div>
      <div className='p-10'></div>
    </>
  )
}

export default expenseTable