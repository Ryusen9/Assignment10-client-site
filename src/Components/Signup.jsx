import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ContextProvider } from "../Context/Context";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";

const Signup = () => {
  const { createUser } = useContext(ContextProvider);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password).then((result) => {
      const creationTime = result.user.metadata.creationTime;
      const UID = result.user.uid;
      const newUser = { UID, name, image, email, creationTime };
      fetch("http://localhost:4980/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire(
              "User created!",
              "Your account has been created. You can now log in.",
              "success"
            ).then(() => {
              navigate("/");
            });
            form.reset();
          } else {
            Swal.fire(
              "Error!",
              "The email address is already in use.",
              "error"
            );
          }
        });
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
              placeholder="Your name goes here"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image Link
            </label>
            <input
              type="text"
              name="image"
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
              placeholder="Image Link Here"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 pr-10"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to={"/login"}>
            <a href="/login" className="text-blue-600 hover:underline">
              Login here
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
