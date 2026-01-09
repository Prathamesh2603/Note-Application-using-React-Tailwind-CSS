import { NotebookText, Trash2 } from 'lucide-react';

function App() {
  return (
    <>
      <div className="bg-blue-100 h-screen w-full">
        <div className="px-14 py-8">
            <form className="bg-blue-50 flex flex-col items-start p-7 rounded-md shadow-md">
              <h1 className="text-blue-950 font-semibold text-3xl">Add a Notes</h1>
              <input
                className="text-blue-950 w-[99%] font-medium text-xl border-none outline-none mt-3 mb-5 px-1 py-1" 
                type="text" 
                placeholder="Title"
                id="note-title"
              />
              <textarea 
                className="text-blue-950 w-[99%] border-none outline-none resize-none px-1 py-1"
                placeholder="Take a note..." 
                id="note-details"
              />
              <button className="bg-blue-950 shadow-md text-white font-medium px-9 py-3 rounded-md cursor-pointer ml-auto mt-2">Add</button>
            </form>
        </div>
        <div className='px-14 h-1/2'>
          <div className='flex items-center gap-3.5'>
            <NotebookText color='#172554'/>
            <h2 className='text-blue-950 font-medium text-xl'>My Notes</h2>
          </div>
          <div className='h-[80%] flex items-center gap-6'>
            <div className='bg-white h-[80%] w-[22%] rounded-md p-3 shadow-lg'>
              <div className='flex justify-between items-center mb-2'>
                <p className='text-blue-950 font-semibold text-2xl'>Feedback</p>
                <Trash2 color='#172554'/>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus asperiores, incidunt dolor perspiciatis reiciendis debitis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
