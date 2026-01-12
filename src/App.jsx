import { NotebookText, Trash2 } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [inputVal, setInputVal] = useState("");
  const [textAVal, setTextAVal] = useState("");
  const [task, setTask] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({title: inputVal, note: textAVal});
    
    setTask(copyTask)
    
    setInputVal("");
    setTextAVal("");
  }

  return (
    <>
      <div className="bg-blue-100 h-screen w-full">
        <div className="px-14 py-8">
          <form
            onSubmit={handleSubmit}
            className="bg-blue-50 flex flex-col items-start p-7 rounded-md shadow-md"
          >
            <h1 className="text-blue-950 font-semibold text-3xl">
              Add a Notes
            </h1>
            <input
              className="text-blue-950 w-[99%] font-medium text-xl border-none outline-none mt-3 mb-5 px-1 py-1"
              type="text"
              placeholder="Title"
              id="note-title"
              onChange={(e) => {
                setInputVal(e.target.value);
              }}
              value={inputVal}
            />
            <textarea
              className="text-blue-950 w-[99%] border-none outline-none resize-none px-1 py-1"
              placeholder="Take a note..."
              id="note-details"
              onChange={(e) => {
                setTextAVal(e.target.value);
              }}
              value={textAVal}
            />
            <button className="bg-blue-950 active:scale-95 shadow-md text-white font-medium px-9 py-3 rounded-md cursor-pointer ml-auto mt-2">
              Add
            </button>
          </form>
        </div>
        <div className="px-14 h-1/2">
          <div className="flex items-center gap-3.5">
            <NotebookText color="#172554" />
            <h2 className="text-blue-950 font-medium text-xl">My Notes</h2>
          </div>
          <div className="h-[80%] flex items-center gap-6 overflow-x-auto">
            {task.map((elem, idx) => {          
              return (
                  <div key={idx} className="bg-white h-[80%] w-68 rounded-md p-4 shadow-lg shrink-0">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-blue-950 font-semibold text-2xl">{elem.title}</p>
                      <button 
                        className='cursor-pointer border-none outline-none active:scale-95'
                        onClick={() => {
                          const copyTask = [...task];
                          
                          copyTask.splice(idx,1);

                          setTask(copyTask);
                          
                        }}
                      >
                        <Trash2 color="#172554" />
                      </button>
                    </div>
                    <div>
                      <p>{elem.note}</p>
                    </div>
                  </div>
                )
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App
