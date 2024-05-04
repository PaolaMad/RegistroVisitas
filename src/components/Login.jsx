import { FiEyeOff } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { CiLock } from "react-icons/ci";
import { useState } from "react"

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = async (e) => {

    setShowPassword(!showPassword);
  };

  const [login, setLogin] = useState({
    userName: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div className="flex justify-center items-center antialiased">
      <div className="flex flex-col justify-center items-center bg-yellow-700 antialiased mt-28 rounded-md p-8">
        {/* TITULO */}
        <h1 className="font-bold text-2xl text-gray-200">Inicio de Sesión</h1>

        <div className="mt-4">
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                className="w-full border border-gray-600 outline-none px-8 py-2 rounded-lg"
                placeholder="Username"
                value={login.userName}
                onChange={(e) => setLogin({ ...login, userName: e.target.value })}
              />
            </div>

            <div className="relative mt-7">
              <CiLock className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border border-gray-600 outline-none px-8 py-2 rounded-lg"
                placeholder="Contraseña"
                value={login.password}
                onChange={(e) => setLogin({ ...login, password: e.target.value })}
              />
              {showPassword ? (
                <LuEye
                  onClick={handleShowPassword}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                />
              ) : (
                <FiEyeOff
                  onClick={handleShowPassword}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                />
              )}
            </div>

            <div className="text-white text-sm mt-4 ">
              <a className="p-2 hover:font-bold hover:underline" href="">
                ¿Olvidaste tu contraseña?
              </a>
              <a
                className="p-6 hover:font-bold hover:underline"
                href="/registro"
              >
                Registrarme
              </a>
            </div>

            <button
              type="submit"
              className="bg-gray-200 text-yellow-700 font-semibold rounded-xl w-full uppercase mt-4 p-4 
                 hover:text-gray-600 cursor-pointer"
            >
              Iniciar Sesión
            </button>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Login;
