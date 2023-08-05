import { useState } from 'react'

function App() {

  return (
    <body>
      <div className="container mx-auto p-4">

        <h1 className="text-black text-3xl font-medium mb-5">Olá Estudante, (Após o login + nome)</h1>
        <p className="text-black text-xl font-normal">Seus Cursos</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-20">
         
          <div className="bg-blue-950 rounded-lg p-4">
            <h1 className="text-white text-2xl mb-2">FULL STACK DEVELOPMENT</h1>
            <p className="text-gray-200 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet facere quos, deserunt modi aut dicta sed quia labore earum perferendis ea placeat voluptatum, minus consequatur officia voluptates, ab magnam!</p>
            <button className="bg-gray-300 text-blue-950 text-md mt-20 p-2 rounded-md hover:bg-blue-600 hover:text-gray-200 transition-all">Saiba Mais</button>
          </div>
         
          <div className="bg-blue-950 rounded-lg p-4">
            <h1 className="text-white text-2xl mb-2">DATA ANALYTICS</h1>
            <p className="text-gray-200 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet facere quos, deserunt modi aut dicta sed quia labore earum perferendis ea placeat voluptatum, minus consequatur officia voluptates, ab magnam!</p>
            <button className="bg-gray-300 text-blue-950 text-md mt-20 p-2 rounded-md hover:bg-blue-600 hover:text-gray-200 transition-all">Saiba Mais</button>
          </div>
         
          <div className="bg-blue-950 rounded-lg p-4">
            <h1 className="text-white text-2xl mb-2">DIGITAL PRODUCT (UX/UI)</h1>
            <p className="text-gray-200 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet facere quos, deserunt modi aut dicta sed quia labore earum perferendis ea placeat voluptatum, minus consequatur officia voluptates, ab magnam!</p>
            <button className="bg-gray-300 text-blue-950 text-md mt-20 p-2 rounded-md hover:bg-blue-600 hover:text-gray-200 transition-all">Saiba Mais</button>
          </div>
        </div>
      </div>
    </body>
  )
}

export default App
