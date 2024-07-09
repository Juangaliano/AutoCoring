import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center w-full h-screen bg-black">
        <img src="/home.jpg" alt="" className="h-auto max-w-full" />
      </div>
    </div>
  );
}

export default App;
