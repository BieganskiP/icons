interface TreeProps {
  className?: string;
}

export default function Tree({ className }: TreeProps) {
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
        d="M16.6693 11.0486H8.32934C7.14934 11.0486 6.73934 10.2586 7.42934 9.29859L11.5993 3.45859C12.0893 2.75859 12.9093 2.75859 13.3993 3.45859L17.5693 9.29859C18.2593 10.2586 17.8493 11.0486 16.6693 11.0486Z"
        fill="currentColor"
      />
      <path
        d="M18.0916 18.9869H6.91155C5.33155 18.9869 4.79155 17.9369 5.72155 16.6569L9.71155 11.0469H15.2916L19.2816 16.6569C20.2116 17.9369 19.6716 18.9869 18.0916 18.9869Z"
        fill="currentColor"
      />
      <path
        d="M13.25 18.9883V22.9883C13.25 23.3983 12.91 23.7383 12.5 23.7383C12.09 23.7383 11.75 23.3983 11.75 22.9883V18.9883H13.25Z"
        fill="currentColor"
      />
    </svg>
  );
}
