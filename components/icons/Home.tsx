import { IconProps } from "@/src/types/global";

export default function Home({ className }: IconProps) {
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
        d="M20.0402 6.82L14.2802 2.79C12.7102 1.69 10.3002 1.75 8.79023 2.92L3.78023 6.83C2.78023 7.61 1.99023 9.21 1.99023 10.47V17.37C1.99023 19.92 4.06023 22 6.61023 22H17.3902C19.9402 22 22.0102 19.93 22.0102 17.38V10.6C22.0102 9.25 21.1402 7.59 20.0402 6.82ZM12.7502 18C12.7502 18.41 12.4102 18.75 12.0002 18.75C11.5902 18.75 11.2502 18.41 11.2502 18V15C11.2502 14.59 11.5902 14.25 12.0002 14.25C12.4102 14.25 12.7502 14.59 12.7502 15V18Z"
        fill="currentColor"
      />
    </svg>
  );
}
