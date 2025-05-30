import { IconProps } from "@/src/types/global";

export default function ChevronUp({ className }: IconProps) {
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
        d="M17 14.3095C17 14.485 16.9391 14.6605 16.8087 14.7991C16.5564 15.067 16.1389 15.067 15.8867 14.7991L11.9989 10.6697L8.11111 14.7991C7.85888 15.067 7.4414 15.067 7.18917 14.7991C6.93694 14.5312 6.93694 14.0878 7.18917 13.8199L11.5379 9.20092C11.7902 8.93303 12.2077 8.93303 12.4599 9.20092L16.8087 13.8199C16.9391 13.9584 17 14.1339 17 14.3095Z"
        fill="currentColor"
      />
    </svg>
  );
}
