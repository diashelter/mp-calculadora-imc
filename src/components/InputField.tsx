interface InputFieldProps {
  id: string;
}
export default function InputField({ id }: InputFieldProps) {
  return (
    <input
      type="text"
      id={id}
      name={id}
      className="block w-full border border-[#E85B81] rounded p-3"
    />
  );
}
