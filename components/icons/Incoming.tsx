import { IconProps } from "@/src/types/global";

export default function Incoming({ className }: IconProps) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.53 7.53L9.81 15.25H12.83C13.24 15.25 13.58 15.59 13.58 16C13.58 16.41 13.24 16.75 12.83 16.75H8C7.59 16.75 7.25 16.41 7.25 16V11.17C7.25 10.76 7.59 10.42 8 10.42C8.41 10.42 8.75 10.76 8.75 11.17V14.19L16.47 6.47C16.62 6.32 16.81 6.25 17 6.25C17.19 6.25 17.38 6.32 17.53 6.47C17.82 6.76 17.82 7.24 17.53 7.53Z"
        fill="currentColor"
      />
    </svg>
  );
}
