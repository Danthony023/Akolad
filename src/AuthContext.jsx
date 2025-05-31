import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on app load
  useEffect(() => {
    const checkAuthStatus = () => {
      try {
        const token = localStorage.getItem("authToken");
        const userData = localStorage.getItem("userData");

        if (token && userData) {
          // Verify token is still valid (you might want to check with your backend)
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error("Error checking auth status:", error);
        // Clear invalid data
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");
      }
      setLoading(false);
    };

    checkAuthStatus();
  }, []);

  const login = async (credentials) => {
    try {
      // // Replace this with your actual login API call
      // const response = await fetch("/api/admin/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(credentials),
      // });

      // // if (!response.ok) {
      // //   throw new Error('Login failed');
      // // }

      // const data = await response.json();
      const data = {
        firstName: "John",
        lastName: "Doe",
        username: "johndoe",
        profilePicture:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        email: "john.doe@akoladconcepts.com",
        phone: "+234 901 234 5678",
      };
      // Store auth data
      // localStorage.setItem('authToken', data.token);
      // localStorage.setItem('userData', JSON.stringify(data.user));
      localStorage.setItem("authToken", "jdvnslihwofeuwto48329T8744IT7Y2C34R");
      localStorage.setItem("userData", JSON.stringify(data));

      setUser(data.user);
      // setUser(data.user);
      return { success: true };
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    setUser(null);
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
