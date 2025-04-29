interface SafetyProps {
  className?: string;
}

export default function Safety({ className }: SafetyProps) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.9999 1.5C23.9999 1.5 30.2287 7.11477 42.8362 8.11561C43.9233 18.829 44.7042 30.4803 36.4575 38.7702C32.9776 42.27 28.2732 44.769 24.0061 46.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M23.9999 1.5C23.9999 1.5 17.7773 7.10848 5.16352 8.10932C4.07644 18.829 3.2955 30.4803 11.5485 38.764C15.0284 42.2637 19.739 44.769 24.0061 46.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M23.1689 31.5127L14.0225 22.2974L17.5836 18.7032L23.1689 24.3305L33.2649 14.1648L36.826 17.759L23.1689 31.5127Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  );
}
