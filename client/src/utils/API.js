import axios from "axios";


  // Gets all books
  export const getBooks = q => axios.get(`/api/google/search?title=${q}`);
  // Gets the book with the given id
  export const getBook = id => axios.get("/api/books/" + id);
  // Deletes the book with the given id
  export const deleteBook = id => axios.delete("/api/books/" + id);
  // Saves a book to the database
  export const saveBook = data => axios.post("/api/books", data);

  export const getCurrentUser = () => axios.get("/auth/user_data")
  export const login = data => axios.post("/auth/login", data);
  export const signup = data => axios.post("/auth/signup", data);
  export const addFav = (bid,uid) => axios.put(`/api/books/${bid}/${uid}`);
  export const deleteFav = (bid,uid) => axios.delete(`/api/books/${bid}/${uid}`)

