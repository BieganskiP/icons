interface WomanProps {
  className?: string;
}

export default function Woman({ className }: WomanProps) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.3335 9C19.3335 5.13 16.2035 2 12.3335 2C8.4635 2 5.3335 5.13 5.3335 9C5.3335 12.62 8.0735 15.59 11.5835 15.96V18.25H9.3335C8.9235 18.25 8.5835 18.59 8.5835 19C8.5835 19.41 8.9235 19.75 9.3335 19.75H11.5835V22C11.5835 22.41 11.9235 22.75 12.3335 22.75C12.7435 22.75 13.0835 22.41 13.0835 22V19.75H15.3335C15.7435 19.75 16.0835 19.41 16.0835 19C16.0835 18.59 15.7435 18.25 15.3335 18.25H13.0835V15.96C16.5935 15.59 19.3335 12.62 19.3335 9Z"
        fill="currentColor"
      />
    </svg>
  );
}
