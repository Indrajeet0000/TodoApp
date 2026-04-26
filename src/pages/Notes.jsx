import React, { useEffect, useState } from "react";
import Card from "./Card";

import { useNavigate } from "react-router-dom";


const Notes = () => {
  const navigate = useNavigate();
  const [title, settitle] = useState("");
  const [notes, setNotes] = useState([]);

  
    useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const submithandler = (e) => {
    e.preventDefault();

    if (title === "") return;

    setNotes([...notes, title]);
    settitle("");
  };
    const deleteTask = (index) => {
        const newList = notes.filter((_, i) => i !== index)
        setNotes(newList)
    }


   
  return (
    
    <div className="h-screen bg-black p-20 text-white relative">
        <button onClick={()=>{navigate('/')}}>home</button>
      
      <form
        className="flex gap-5 justify-between p-10 "
        onSubmit={submithandler}
      >
        <div className="py-10 w-1/2 flex flex-col gap-5 items-center">
          <input
            type="text"
            placeholder="enter notes heading"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="w-full border-2 rounded-2xl px-5 py-2 text-black"
          />

          <button className="bg-gray-600 w-40 rounded-2xl py-2">
            add notes
          </button>
        </div>
      </form>

      <img
        className="h-60 absolute right-10 top-10"
        src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
        alt=""
      />

      <hr />
      <h1>add notes</h1>

      <div className="flex gap-2.5 p-4 flex-wrap">
        {notes.map((note, index) => (
          <Card key={index} name={note} deleteTask={deleteTask} index={index}
         />
        ))}
      </div>
    </div>
  );
};

export default Notes;
