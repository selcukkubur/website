const StatusIcon = () => (
  <svg
    width="28px"
    height="28px"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    id="statusIcon"
  >
    <mask id="maskstatusId" x="0" y="0" maskUnits="userSpaceOnUse">
      <circle
        cx="14"
        cy="14"
        r="9"
        stroke="#FFFFFF"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="14"
        cy="14"
        r="3"
        stroke="#FFFFFF"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </mask>
    <g mask="url(#maskstatusId)">
      <rect width="28" height="28" fill="currentColor"></rect>
      <rect width="28" height="28" x="0" y="0" fill="currentColor"></rect>
    </g>
    <defs>
      <linearGradient id="gradient" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FF5E5E"></stop>
        <stop offset="1" stopColor="#9121C2"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default StatusIcon;
