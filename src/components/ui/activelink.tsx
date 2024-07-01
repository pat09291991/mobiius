interface Props {
  text: string;
  action: () => void;
}

export default function ActiveLink({ text, action }: Props) {
  return (
    <a
      onClick={action}
      className="w-1/3 sm:w-auto cursor-pointer hover:scale-125 transition-transform text-lg font-bold leading-tight text-purple-600"
    >
      {text}
    </a>
  );
}
