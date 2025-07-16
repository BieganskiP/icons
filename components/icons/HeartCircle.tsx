interface HeartCircleProps {
  className?: string;
}

export default function HeartCircle({ className }: HeartCircleProps) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 2.98828C6.98 2.98828 2.5 7.46828 2.5 12.9883C2.5 18.5083 6.98 22.9883 12.5 22.9883C18.02 22.9883 22.5 18.5083 22.5 12.9883C22.5 7.46828 18.02 2.98828 12.5 2.98828ZM12.83 17.9883C12.65 18.0483 12.34 18.0483 12.16 17.9883C10.6 17.4583 7.1 15.2283 7.1 11.4483C7.1 9.77828 8.44 8.42828 10.1 8.42828C11.08 8.42828 11.95 8.89828 12.5 9.63828C13.04 8.90828 13.92 8.42828 14.9 8.42828C16.56 8.42828 17.9 9.77828 17.9 11.4483C17.9 15.2283 14.4 17.4583 12.83 17.9883Z"
        fill="currentColor"
      />
    </svg>
  );
}
