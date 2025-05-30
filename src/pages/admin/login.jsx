import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RectangleDesign from "../../assets/images/RectangleDesign.png";
import RectangleDesign2 from "../../assets/images/RectangleDesign2.png";
import { ArrowRight, Eye, EyeOff, Lock, User, Shield } from "lucide-react";
import { useAuth } from "../../AuthContext";

export default function Login() {
  const location = useLocation();
  const { login, isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (location.state?.scrollToContact) {
      const contact = document.getElementById("contact-form");
      if (contact) contact.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (username, password) => {
    // TODO: Replace this with your actual API call
    console.log("Login attempt:", { username, password });

    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Replace this logic with your actual authentication
        if (username === "admin" && password === "password123") {
          resolve({ success: true, token: "fake-jwt-token" });
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 1000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      //   const result = await handleLogin(formData.username, formData.password);
      //   console.log("Login successful:", result);
      const result = await login(formData);

      if (result.success) {
        // Redirect to dashboard or intended destination
        const from = location.state?.from?.pathname || "/admin/dashboard";
        window.location.href = from; // Use window.location for full page redirect
      } else {
        console.log(result.error || "Login failed. Please try again.");
      }

      // TODO: Handle successful login (redirect, store token, etc.)
    } catch (error) {
      console.error("Login failed:", error);
      setErrors({
        password: "Invalid username or password",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Redirect if already logged in
  if (isAuthenticated()) {
    const from = location.state?.from?.pathname || "/admin/dashboard";
    return <Navigate to={from} replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 font-oswald w-full flex flex-col">
      <main className="flex-1 flex items-center justify-center py-12">
        <section id="contact-form" className="relative w-full flex">
          <img
            src={RectangleDesign}
            alt="Logo"
            className="hidden lg:block bottom-0 right-0 w-auto"
          />
          <div className="relative p-8 rounded-2xl w-full">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-slate-800 mb-2">
                Admin Portal
              </h1>
              <p className="text-slate-600 text-sm">
                Sign in to access the Akolad admin dashboard
              </p>
            </div>

            {/* Login Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.username
                        ? "border-red-300 bg-red-50"
                        : "border-slate-300"
                    }`}
                    placeholder="Enter your username"
                  />
                </div>
                {errors.username && (
                  <p className="text-red-500 text-xs mt-1">{errors.username}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-12 py-3 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.password
                        ? "border-red-300 bg-red-50"
                        : "border-slate-300"
                    }`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              {/* <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-slate-300 text-primary focus:ring-primary focus:ring-offset-0"
                  />
                  <span className="ml-2 text-slate-600">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Forgot password?
                </button>
              </div> */}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Additional Options */}
            {/* <div className="mt-6 pt-6 border-t border-slate-200">
              <p className="text-center text-sm text-slate-600">
                Need help accessing your account?{" "}
                <button className="text-primary hover:text-primary/80 font-medium">
                  Contact Support
                </button>
              </p>
            </div> */}
          </div>
          <img
            src={RectangleDesign2}
            alt="Logo"
            className="hidden lg:block bottom-0 right-0 w-auto"
          />
          {/* Security Notice */}
          {/* <div className="mt-6 text-center">
            <p className="text-xs text-slate-500">
              🔒 This is a secure admin portal. All activities are logged and
              monitored.
            </p>
          </div> */}
        </section>
      </main>
    </div>
  );
}
