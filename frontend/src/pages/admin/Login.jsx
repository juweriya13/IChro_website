import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../../services/auth";
import { saveTokens } from "../../utils/token";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await login(formData);

      saveTokens(
        response.access,
        response.refresh
      );

      navigate("/admin");

    } catch (err) {

      setError(
        err.response?.data?.non_field_errors?.[0] ||
        "Login failed."
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white shadow-xl rounded-xl w-full max-w-md p-8">

        <h1 className="text-3xl font-bold text-center mb-8">
          Admin Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;