export const SpinLoaderIcon = () => {
  return (
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

// export const LoaderIconTwo = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       xmlns:xlink="http://www.w3.org/1999/xlink"
//       style="margin: auto; background: rgb(255, 255, 255); display: block; --darkreader-inline-bgimage: initial; --darkreader-inline-bgcolor:#181a1b;"
//       width="200px"
//       height="200px"
//       viewBox="0 0 100 100"
//       preserveAspectRatio="xMidYMid"
//       data-darkreader-inline-bgimage=""
//       data-darkreader-inline-bgcolor=""
//     >
//       <circle
//         cx="50"
//         cy="50"
//         r="32"
//         stroke-width="8"
//         stroke="#fe718d"
//         stroke-dasharray="50.26548245743669 50.26548245743669"
//         fill="none"
//         stroke-linecap="round"
//         data-darkreader-inline-stroke=""
//         style="--darkreader-inline-stroke:#fe6987;"
//       >
//         <animateTransform
//           attributeName="transform"
//           type="rotate"
//           repeatCount="indefinite"
//           dur="1s"
//           keyTimes="0;1"
//           values="0 50 50;360 50 50"
//         ></animateTransform>
//       </circle>
//     </svg>
//   );
// };
