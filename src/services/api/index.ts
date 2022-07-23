import axios from "axios";

function getTokenFromLocalStorage() { 
  const token = localStorage.getItem("user"); 
  console.log("the token from local storage is -> " + token); 
  if (token === null) { return undefined; } 
  return token; 
} 

export const requestApi = axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage()}`
  }
})