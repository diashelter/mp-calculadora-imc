interface InputFieldProps {
  id: string;
  placeholder?: string;
}
export default function InputField({ id, placeholder }: InputFieldProps) {
  return (
    <input
      type="text"
      id={id}
      name={id}
      placeholder={placeholder}
      className="block w-full border border-[#E85B81] rounded p-3"
    />
  );
}
