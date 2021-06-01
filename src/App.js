import React, { useState, useEffect } from 'react'
import Counter from './Counter'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);
      setLoading(false);
      setTours(tours);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }

  }
  useEffect(() => {
    fetchTours();
  }, [])
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return <main>
      <div className="title">
        <h2>NO tours left</h2>
        <button className="btn" onClick={fetchTours}>refresh</button>
      </div>
    </main>
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
      <Counter />
    </main>
  )

}

export default App
