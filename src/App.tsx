function App() {
  return (
    <main className="bg-white max-w-4xl mx-auto py-24 px-48">
      <header className="text-center mb-3">
        <h1 className="text-gray-500 text-2xl font-bold">Calculadora de IMC</h1>
      </header>

      <section id="form">
        <form action="">
          <div>
            <label htmlFor="weight" className="block text-[#505050] mb-1">
              Peso (KG)
            </label>
            <input
              type="text"
              id="weight"
              className="block w-full border border-[#E85B81] rounded p-3"
            />
          </div>
          <div>
            <label htmlFor="height" className="block text-[#505050] mb-1">
              Altura (cm)
            </label>
            <input
              type="text"
              id="height"
              className="block w-full border border-[#E85B81] rounded p-3"
            />
          </div>
          <button className="mt-6 bg-[#E85B81] text-white font-bold w-full py-3 rounded">
            Calcular IMC
          </button>
        </form>
      </section>

      <section id="result" className="py-10 px-4 h-40">
        <p className="text-center text-neutral-400 text-xl">Saiba agora se está no seu peso ideal</p>
      </section>

      <section id="info">
        <table className="mx-auto text-left text-neutral-600">
          <thead className="text-[#E85B81] bg-zinc-100">
            <tr>
              <th className="px-6 py-2">IMC</th>
              <th className="px-6 py-2">Classificação</th>
            </tr>
          </thead>
          <tbody className="[&>tr:nth-child(even)]:bg-zinc-100 [&>tr:nth-child(odd)]:bg-white [&>tr>td]:px-6 [&>tr>td]:py-1">
            <tr>
              <td>Menor de 17</td>
              <td>Muito abaixo do peso</td>
            </tr>
            <tr>
              <td>Entre 17 e 18,5</td>
              <td>Abaixo do peso</td>
            </tr>
            <tr>
              <td>18,5 e 24,9</td>
              <td>Peso normal</td>
            </tr>
            <tr>
              <td>Entre 25 e 29,9</td>
              <td>Sobrepeso</td>
            </tr>
            <tr>
              <td>Entre 30 e 34,9</td>
              <td>Obesidade grau 1</td>
            </tr>
            <tr>
              <td>Entre 35 e 39,9</td>
              <td>Obesidade grau 2</td>
            </tr>
            <tr>
              <td>Maior que 40</td>
              <td>Obesidade grau 3</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default App;
