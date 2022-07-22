import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IAuthProvider, IContext, IUser } from "./types";

export const AuthContext = createContext<IContext>({} as IContext);

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<IUser | null>();

  const login = (email: string, password: string) => {
    console.log('login', email, password)
    if(password == '123'){
      navigate("/")
    }
  }

  const logout = () => {
    console.log('logout')
    setUser(null)
    navigate("/login")
  }

  const navigate = useNavigate()

  return (
    <AuthContext.Provider value={{ authenticated: !!user, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// export function AuthProvider({ children }: IAuthProvider) {
//   const [user, setUser] = useState<IUser | null>();

//   useEffect(() => {
//     const user = getUserLocalStorage();
//     if (user) {
//       setUser(user);
//     }
//   }, []);

//   async function authenticate(email: string, password: string) {
//     const response = await useLogin(email, password);
//     const payload = { token: response.token, email };
//     setUser(payload);
//     setUserLocalStorage(payload);
//   }

//   function logout() {
//     setUser(null);
//     setUserLocalStorage(null);
//   }

//   return (
//     <AuthContext.Provider value={{ ...user, authenticate, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
