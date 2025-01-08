import InputField from "./components/InputField";
import Label from "./components/Label";
import ReferenceTable from "./components/ReferenceTable";

function App() {
  return (
    <main className="bg-white max-w-4xl mx-auto py-24 px-48">
      <header className="text-center mb-3">
        <h1 className="text-gray-500 text-2xl font-bold">Calculadora de IMC</h1>
      </header>

      <section id="form">
        <form action="">
          <div>
            <Label htmlFor="weight" text="Peso (kg)" />
            <InputField id="weight" />
          </div>
          <div>
            <Label htmlFor="height" text="Altura (cm)" />
            <InputField id="height" />
          </div>
          <button
            type="submit"
            className="mt-6 bg-[#E85B81] text-white font-bold w-full py-3 rounded"
          >
            Calcular IMC
          </button>
        </form>
      </section>

      <section id="result" className="py-10 px-4 h-40">
        <p className="text-center text-neutral-400 text-xl">
          Saiba agora se está no seu peso ideal
        </p>
      </section>

      <section id="info">
        <ReferenceTable />
      </section>
    </main>
  );
}

export default App;
