import { useEffect, useState } from "react";
import type { Joke } from "../api";
import JokeCard from "./JokeCard";

const JokeList = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);

  useEffect(() => {
    const fetchJokes = async () => {
      const data = await getJokes();
      setJokes(data);
    };
    fetchJokes();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">JokeHub 😂</h1>
      <div className="grid gap-4">
        {jokes.map((joke) => (
          <JokeCard key={joke._id} joke={joke} />
        ))}
      </div>
    </div>
  );
};

export default JokeList;