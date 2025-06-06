import { IconProps } from "@/src/types/global";

export default function ChevronDown({ className }: IconProps) {
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
        d="M7 9.69053C7 9.51501 7.06088 9.33949 7.19135 9.20092C7.44357 8.93303 7.86106 8.93303 8.11329 9.20092L12.0011 13.3303L15.8889 9.20092C16.1411 8.93303 16.5586 8.93303 16.8108 9.20092C17.0631 9.46882 17.0631 9.91224 16.8108 10.1801L12.4621 14.7991C12.2098 15.067 11.7923 15.067 11.5401 14.7991L7.19135 10.1801C7.06088 10.0416 7 9.86605 7 9.69053Z"
        fill="currentColor"
      />
    </svg>
  );
}
