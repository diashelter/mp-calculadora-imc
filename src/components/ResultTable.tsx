export interface ImcData {
    weight: number;
    height: number;
    imc: number;
    classification: string;
}

export default function ResultTable({ weight, height, imc, classification } : ImcData) {
  return (
    <table className="mx-auto text-center text-neutral-600 text-xs">
            <thead className="text-[#E85B81] bg-zinc-100">
              <tr>
                <th className="px-6 py-2">Peso</th>
                <th className="px-6 py-2">Altura</th>
                <th className="px-6 py-2">IMC</th>
                <th className="px-6 py-2">Classificação</th>
              </tr>
            </thead>
            <tbody className="[&>tr>td]:px-6 [&>tr>td]:py-1">
              <tr>
                <td>{weight} kg</td>
                <td>{height} cm</td>
                <td>{imc.toFixed(2)}</td>
                <td>{classification}</td>
              </tr>
            </tbody>
          </table>
  )
}
