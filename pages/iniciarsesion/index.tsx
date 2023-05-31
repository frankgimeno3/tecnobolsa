import { Inter } from "next/font/google";
import { useState, ChangeEvent, FormEvent } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function IniciarSesion() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Aquí puedes implementar la lógica de inicio de sesión seguro
  };

  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute top-0 left-0 object-cover w-screen h-screen"
        src="/video/perfiles.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
      <div className="bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-lg w-50vw  pt-10 pb-10 mt-20 ">

      <div className="flex flex-col items-center  p-24">
      <h1 className="text-4xl text-white pb-10">Iniciar Sesión</h1>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
            
            
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>

            <div className="mb-6">
    
    
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-8 bg-white text-gray-800 rounded-full py-2 px-4 border-b-2 border-gray-500 hover:bg-gray-500 hover:bg-opacity-25 hover:text-gray-900"          >
              
              Iniciar sesión
            </button>
          </form>
          </div>
          </div>
      </div>
    </div>
  );
}
