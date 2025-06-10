import type { Joke } from "../api";

interface JokeCardProps {
  joke: Joke;
}

const JokeCard = ({ joke }: JokeCardProps) => {
  const handleLike = async () => {
    await likeJoke(joke._id);
    window.location.reload(); // Temporary refresh
  };

  return (
    <div className="border p-4 rounded-lg shadow-sm bg-white">
      <p className="text-lg font-semibold">{joke.content}</p>
      <p className="text-sm text-gray-500">{joke.type}</p>
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleLike}
      >
        👍 {joke.likes}
      </button>
    </div>
  );
};

export default JokeCard;