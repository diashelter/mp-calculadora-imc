interface LabelProps {
    htmlFor: string;
    text: string;
}

export default function Label({ htmlFor, text }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className="block text-[#505050] mb-1">
      {text}
    </label>
  );
}
