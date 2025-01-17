import { useState } from "react";
import InputField from "./components/InputField";
import Label from "./components/Label";
import ReferenceTable from "./components/ReferenceTable";
import ResultTable, { ImcData } from "./components/ResultTable";

function App() {
  const [imcData, setImcData] = useState<null | ImcData>(null);

  function calculateIMC(weight: number, height: number) {
    return weight / (((height / 100) * height) / 100);
  }

  function defineClassification(imc: number) {
    if (imc < 17) return "Muito abaixo do peso";
    if (imc >= 17 && imc < 18.5) return "Abaixo do peso";
    if (imc >= 18.5 && imc < 25) return "Peso normal";
    if (imc >= 25 && imc < 30) return "Sobrepeso";
    if (imc >= 30 && imc < 35) return "Obesidade grau 1";
    if (imc >= 35 && imc < 40) return "Obesidade grau 2";
    return "Obesidade grau 3";
  }

  function handleReset(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    setImcData(null);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const weight = data.get("weight") as string;
    const height = data.get("height") as string;

    if (!weight || !height) {
      alert("Preencha todos os campos!");
      return;
    }

    if (isNaN(Number(weight.replace(",", "."))) || isNaN(Number(height.replace(",", ".")))) {
      alert("Preencha com valores numéricos válidos!");
      return;
    }

    const imc = calculateIMC(Number(weight.replace(",", ".")), Number(height.replace(",", ".")));
    const result = defineClassification(imc);

    setImcData({
      weight: Number(weight.replace(",", ".")),
      height: Number(height.replace(",", ".")),
      imc,
      classification: result,
    });

    event.currentTarget.reset();
  }

  return (
    <main className="bg-white max-w-4xl mx-auto md:py-24 md:px-48 px-5 py-10">
      <header className="text-center mb-3">
        <h1 className="text-gray-500 text-2xl font-bold">Calculadora de IMC</h1>
      </header>

      <section id="form">
        <form onSubmit={handleSubmit}>
          <div className={ imcData !== null ? 'hidden' : '' }>
            <Label htmlFor="weight" text="Peso (kg)" />
            <InputField id="weight" placeholder="Ex: 70 ou 70,5" />
          </div>
          <div className={ imcData !== null ? 'hidden' : '' }>
            <Label htmlFor="height" text="Altura (cm)" />
            <InputField id="height"  placeholder="Ex: 170 ou 170,5"/>
          </div>

          {imcData !== null ? (
            <button
              onClick={handleReset}
              type="button"
              className="mt-6 bg-[#E85B81] text-white font-bold w-full py-3 rounded"
            >
              Calcular novamente
            </button>
          ) : (
            <button
              type="submit"
              className="mt-6 bg-[#E85B81] text-white font-bold w-full py-3 rounded"
            >
              Calcular IMC
            </button>
          )}
        </form>
      </section>

      <section id="result" className="py-10 px-4 h-40">
        {imcData === null ? (
          <p className="text-center text-neutral-400 text-xl">
            Saiba agora se está no seu peso ideal
          </p>
        ) : (
          <ResultTable {...imcData} />
        )}
      </section>

      <section id="info">
        <ReferenceTable />
      </section>
    </main>
  );
}

export default App;
