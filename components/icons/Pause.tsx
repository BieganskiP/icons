import { IconProps } from "@/src/types/global";

export default function Pause({ className }: IconProps) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.875 15.925V4.075C8.875 2.95 8.4 2.5 7.2 2.5H4.175C2.975 2.5 2.5 2.95 2.5 4.075V15.925C2.5 17.05 2.975 17.5 4.175 17.5H7.2C8.4 17.5 8.875 17.05 8.875 15.925Z"
        fill="currentColor"
      />
      <path
        d="M17.5 15.925V4.075C17.5 2.95 17.025 2.5 15.825 2.5H12.8C11.6083 2.5 11.125 2.95 11.125 4.075V15.925C11.125 17.05 11.6 17.5 12.8 17.5H15.825C17.025 17.5 17.5 17.05 17.5 15.925Z"
        fill="currentColor"
      />
    </svg>
  );
}
