import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Card from "./components/Card";
import { apiUrl, filterData } from "./data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

function App() {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState(null);
  let [category, setCategory] = useState(filterData[0].title)

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);
      console.log(output);

    }
     catch (error) {
      toast.error("Api me kuchh problem hai bhai");
   
    }

    setLoading(false);
  }

  useEffect(()=> {
    fetchData();
  }
  ,[])

  return (
    <div className="h-full min-h-dvh bg-slate-700">
      <Navbar />

      <div>
        <Filter filterData={filterData}
                category={category}
                setCategory={setCategory}
        />
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh flex-wrap">

       {
        loading ?(<Spinner/>) :( <Cards  courses={courses} category={category }/>)
       }
       
      </div>
    </div>
  );
}

export default App;
