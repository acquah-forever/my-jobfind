import React, { useState, createContext } from 'react'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    
    const currentUserEmail = localStorage.getItem("currentUserEmail")

    const [user, setUser] = useState(currentUserEmail ?
        {email : currentUserEmail} : null
    )

    function signUp(email, password) {
        const users = JSON.parse(localStorage.getItem("users") || "[]")
        if (users.find((u) => u.email === email)) {
            return { success: false, error: "User Already Exists" }
        }
        const newUser = { email, password }
        users.push(newUser)
        localStorage.setItem("users",JSON.stringify(users))
        localStorage.setItem("currentUserEmail", email)
        setUser({ email })
        return { success:true }

    }

    function logIn(email, password) {
        const users = JSON.parse(localStorage.getItem("users") || "[]")
        const user = users.find((u) => u.email === email && u.password === password)
        if (!user) {
            return { success: false, error: "Invalid email or password" }
        }
        localStorage.setItem("currentUserEmail", email)
        setUser({ email })
        return { success:true }

    }

    function logOut() {
        localStorage.removeItem("currentUserEmail")
        setUser(null)

    }
    return <AuthContext.Provider value={{ user, signUp, logIn, logOut }}>{children}</AuthContext.Provider>
}


