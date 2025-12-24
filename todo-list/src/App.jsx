
import Create from './components/Create'
import Read from './components/Read'


const App = () => {
  
  return (
    <div className='h-screen w-screen bg-gray-800 text-white flex items-center p-10 gap-3'>
      <Create />
      <Read />
    </div>
  )
}

export default App