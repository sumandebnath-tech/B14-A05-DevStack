import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [myStack, setMyStack] = useState([]);


  useEffect(() => {
    fetch('/technologies.json')
    .then((res) => res.json())
    .then((data) => {
      setTechs(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
    
  }, []);

  const handleAddStack = (tech) => {
    const exists = myStack.find((item) => item.id === tech.id);
    if (exists) {
      toast.warning(`${tech.name} is already in your stack!`);
    } else {
      setMyStack([...myStack, tech]);
      toast.success(`${tech.name} added to your stack!`);
    }
  };

  const handleRemoveStack = (id) => {
    setMyStack(myStack.filter((item) => item.id !== id));
    toast.error('Removed from your stack!');
  };

  return (
    <div className="min-h-screen bg-base-200 text-base-content flex flex-col justify-between">
      <ToastContainer position="top-right" autoClose={2000} />


      {/* Sticky Navbar */}
      <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 px-6">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl font-bold">A-5 Dev Stack Builder</a>

        </div>
        <div className="flex-none">
          <span className="badge badge-primary p-3 font-semibold">
            My Stack Count: {myStack.length}
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero bg-base-100 py-12 shadow-inner">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">Build Your Ultimate Dev Stack</h1>
            <p className="py-4">
              Explore top web technologies and select tools to build your custom development stack efficiently.
              </p> 
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6 flex-grow">
        {/* Technologies Grid */}
        <div className="md:w-3/4">
        <h2 className="text-2xl font-bold mb-4">Available Technologies</h2>
        {loading ? (
          <div className="flex justify-center items-center h-48">
            <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techs.map((tech) => (
              <div key={tech.id} className="card bg-base-100 shadow-xl border border-base-300">
                <figure className="px-10 pt-6">
                  <img src={tech.image} alt={tech.name} className="h-20 w-20 object-contain" />
                </figure>

                <div className="card-body items-center text-center">
                  <h2 className="card-title">{tech.name}</h2>
                  <span className="badge badge-secondary">{tech.category}</span>
                  <p className="text-sm mt-2">{tech.description}</p>
                  <div className="card-actions mt-4">
                    <button
                    onClick={() => handleAddStack(tech)}
                    className="btn btn-primary btn-sm"
                    >
                      Add to Stack
                    </button>
                  </div>
                </div>
              </div>
            ))}
      </div>
     )}
  </div>

  {/* My Stack Sidebar */}
  <div className="md:w-1/4">
  <div className="bg-base-100 p-4 rounded-xl shadow-md border border-base-300 sticky top-20">
    <h2 className="text-xl font-bold mb-4">My Stack ({myStack.length})</h2>
    {myStack.length === 0 ? (
      <p className="text-sm text-gray-500">No technology added yet.</p>
    ) : (
      <ul className="space-y-3">
        {myStack.map((item) => (
          <li key={item.id} className="flex justify-between items-center bg-base-200 p-2 rounded">
            <span className="font-medium">{item.name}</span>
            <button
            onClick={() => handleRemoveStack(item.id)}
            className="btn btn-error btn-xs text-white"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
 </div>
</div>

{/* Footer */}
<footer className="footer footer-center p-4 bg-base-300 text-base-content mt-10">
  <aside>
    <p>@ 2026 - A-5 Dev Stack Builder Application. All rights reserved.</p>
  </aside>
</footer>
</div>
 );
}