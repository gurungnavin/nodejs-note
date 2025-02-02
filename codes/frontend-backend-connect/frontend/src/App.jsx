import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [jokes, setJokes] = useState([]);

  const fetchData = async () => {
    try {
      const resonse = await axios.get("/api/jokes");
      if (resonse.data) {
        setJokes(resonse.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  });
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <h2 className="text-3xl font-bold text-white bg-green-700 px-6 py-1">
        Jokes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 border p-6 rounded-xl">
        {jokes.map((joke) => (
          <div
            key={joke.id}
            className="flex flex-col justify-center items-center p-3 max-w-72 bg-gray-100 mt-3 rounded-xl"
          >
            <h3 className="text-xl font-bold text-white bg-yellow-700 px-6 py-1">
              {joke.title}
            </h3>
            <p className="mt-2">{joke.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
