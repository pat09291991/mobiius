type IconProps = {
  className: string;
  icon: string;
  size: number;
  onClick?: () => void;
  color?: string;
};

export const Icon = ({ className, icon, size, onClick, color }: IconProps) => {
  const style = {
    fontSize: `${size}px`,
    color: color,
  };
  return (
    <span style={style} className={className} onClick={onClick}>
      {icon}
    </span>
  );
};
