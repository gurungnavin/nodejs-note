
const App = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-lvh">
      <h2 className="text-3xl font-bold text-white bg-green-700 px-6 py-1">Jokes</h2>
      <div className="flex flex-col justify-center items-center p-3 w-72 h-60 bg-gray-100 mt-3 rounded-xl">
        <h3 className="text-xl font-bold text-white bg-green-700 px-6 py-1">Joke Title</h3>
        <p className="mt-2">jokes Description</p>
      </div>
    </div>
  )
}

export default App
