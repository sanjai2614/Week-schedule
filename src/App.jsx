import React, { useState } from 'react'
import { FiCalendar } from 'react-icons/fi'

const App = () => {

  const [data, setData] = useState(null)

  const week = [
    {
      id: 1,
      day: 'Monday',
      date: 'May 11',
      color: 'text-blue-500',
      border: 'border-blue-500',
      info: 'Team meeting at 10:00 AM'
    },
    {
      id: 2,
      day: 'Tuesday',
      date: 'May 12',
      color: 'text-green-500',
      border: 'border-green-500',
      info: 'Project discussion with developers'
    },
    {
      id: 3,
      day: 'Wednesday',
      date: 'May 13',
      color: 'text-orange-500',
      border: 'border-orange-500',
      info: 'Client presentation and feedback'
    },
    {
      id: 4,
      day: 'Thursday',
      date: 'May 14',
      color: 'text-purple-500',
      border: 'border-purple-500',
      info: 'Code review session'
    },
    {
      id: 5,
      day: 'Friday',
      date: 'May 15',
      color: 'text-red-500',
      border: 'border-red-500',
      info: 'Sprint planning meeting'
    },
    {
      id: 6,
      day: 'Saturday',
      date: 'May 16',
      color: 'text-yellow-600',
      border: 'border-yellow-600',
      info: 'Workshop and learning session'
    },
    {
      id: 7,
      day: 'Sunday',
      date: 'May 17',
      color: 'text-teal-500',
      border: 'border-teal-500',
      info: 'Holiday and family time'
    }
  ]

  return (
    <div className="min-h-screen p-8 flex flex-col items-center bg-gray-100">

      <h1 className="text-4xl font-bold mb-8">
        Weekly Schedule
      </h1>

      {/*Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {week.map((item) => (
          <div
            key={item.id}
            onClick={() => setData(item)}
            className={`border-2 ${item.border} rounded-xl p-5 cursor-pointer hover:shadow-lg transition-all bg-white w-56`}
          >
            <div className="flex gap-4 items-center">
              <FiCalendar className={`text-4xl m-3 ${item.color}`} />

              <div>

                <h2 className={`text-lg font-bold ${item.color}`}>
                  {item.day}
                </h2>

                <p className="text-gray-500 mt-1">
                  {item.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>


      {!data && <h1 className='mt-10 font-semibold'>Click the day to see the schedule</h1>}

      {/* Details Box */}
      {data && (
        <div
          className={`mt-10 border-2 ${data.border} rounded-xl p-6 w-full max-w-md bg-white text-center shadow-md`}
        >
          <h2 className={`text-2xl font-bold ${data.color}`}>
            {data.day}
          </h2>

          <p className={`mt-2 font-semibold ${data.color}`}>
            {data.date}
          </p>

          <p className="mt-4 text-gray-700">
            <strong>Info:</strong> {data.info}
          </p>
        </div>
      )}
    </div>
  )
}

export default App