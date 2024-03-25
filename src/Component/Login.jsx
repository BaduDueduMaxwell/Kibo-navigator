import React from "react";

function Login() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/2 bg-white-300 flex items-center justify-center">
        <img
          src="https://lms.kibo.school/images/loginBackgroundImage.png"
          alt="login__image"
          width="100%"
        />
      </div>
      <div className="w-1/2  flex items-center justify-center">
        <div className="w-full">
          <form className="rounded px-40 pt-6 pb-8">
            <h1 className="text-2xl font-extrabold pb-6">KiboNavigator</h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-cyan-600 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-cyan-500 hover:text-cyan-900"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
