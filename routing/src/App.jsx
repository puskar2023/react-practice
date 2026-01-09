import { useState } from "react";
import { UserPlus, MessageCircleDashed, ArrowUp } from "lucide-react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-screen w-full flex">
      <div
        className={`
          fixed md:static top-0 left-0 z-50
          h-screen w-[70%] md:w-[20%]
          bg-black
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Close button (mobile only) */}
        <div className="md:hidden flex justify-end p-4">
          <X className="text-white" onClick={() => setIsOpen(false)} />
        </div>
      </div>

      <div className="relative flex flex-col items-center right-bar h-screen w-[80%] bg-black/86">
        <div className="nav w-full h-15 flex items-center justify-between px-6 bg-gradient-to-r from-[#z4D2B8C] to-[#85409D]">
          <h1 className="text-2xl text-white/80">ChatGPT</h1>
          <div className="flex items-center gap-10 text-white px-7">
            <UserPlus className="text-xl" />
            <MessageCircleDashed className="text-xl" />
          </div>
        </div>
        <div className="container"></div>
        <div className="absolute border border-gray-600/90 bottom-10 h-16 rounded-full w-[70%] bg-black/90 flex items-center justify-between px-3">
          <input
            className="text-xl text-white outline-0 w-[90%] overflow-auto ml-4 p-2"
            type="text"
            placeholder="Ask anything"
          />
          <ArrowUp className="bg-white h-10 w-10 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default App;
