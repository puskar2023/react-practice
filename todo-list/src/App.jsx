
import Create from './components/Create'
import Read from './components/Read'


const App = () => {
  
  return (
    <div className='h-screen w-screen bg-gray-800 text-white flex flex-col items-center px-2 py-4 gap-3 md:flex-row md:justify-center lg:px-5'>
      <Create />
      <Read />
    </div>
  )
}

export default App