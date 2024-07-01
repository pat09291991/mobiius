interface Props {
  text: string;
  action: () => void;
}

export default function InactiveLink({ text, action }: Props) {
  return (
    <a
      onClick={action}
      className="w-1/3 sm:w-auto cursor-pointer hover:scale-125 transition-transform"
    >
      {text}
    </a>
  );
}
