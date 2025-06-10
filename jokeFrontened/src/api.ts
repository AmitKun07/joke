import axios from "axios";

const API_URL = "http://localhost:5000/api/jokes";

export type Joke = {
  _id: string;
  content: string;
  type: string;
  likes: number;
  createdAt: string;
};

export const getJokes = async () => {
  const { data } = await axios.get<Joke[]>(API_URL);
  return data;
};

export const postJoke = async (joke: Omit<Joke, "_id" | "likes" | "createdAt">) => {
  const { data } = await axios.post<Joke>(API_URL, joke);
  return data;
};

export const likeJoke = async (id: string) => {
  const { data } = await axios.patch<Joke>(`${API_URL}/${id}/like`);
  return data;
};