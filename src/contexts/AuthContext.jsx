import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({children}) {
    const [onlineUser, setOnlineUser] = useState(null);
    return (<AuthContext.Provider value={{onlineUser, setOnlineUser}}>
        {children}
    </AuthContext.Provider>)
}

function useAuth() {
    const context = useContext(AuthContext);
    if(context === undefined) throw new Error("AuthContext was used outside of AuthProvider");
    return context;
}

export { AuthProvider, useAuth };