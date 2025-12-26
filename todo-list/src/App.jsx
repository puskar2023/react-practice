
import Create from './components/Create'
import Read from './components/Read'


const App = () => {
  
  return (
    <div className='h-screen w-screen bg-gray-800 text-white flex flex-col items-center px-2 py-4 gap-3 lg:flex-row px-5 justify-center'>
      <Create />
      <Read />
    </div>
  )
}

export default App