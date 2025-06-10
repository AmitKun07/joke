import { useState } from "react";
import { postJoke } from "../api";

const JokeForm = () => {
  const [content, setContent] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await postJoke({ content, type });
    window.location.reload(); // Temporary refresh
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded bg-white shadow-md">
      <input
        className="w-full p-2 border mb-2"
        type="text"
        placeholder="Enter a joke..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        className="w-full p-2 border mb-2"
        type="text"
        placeholder="Category (Programming, Dark, etc.)"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600" type="submit">
        Submit Joke ✅
      </button>
    </form>
  );
};

export default JokeForm;