import { IconProps } from 'src/types/global';

export default function ScrollDownArrow({ className }: IconProps) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12 3L12 15.5L13 15.5M13 15.5L11 15.5L7 12M13 15.5L17 12" stroke="currentColor" />
      <path d="M7 17L11 20.5L13 20.5L17 17" stroke="currentColor" />
    </svg>
  );
}
