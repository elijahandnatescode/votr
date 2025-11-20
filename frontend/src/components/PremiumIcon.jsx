// Premium icon components with rich gradients, 3D effects, and sophisticated styling
// Each icon is crafted to look luxurious and iconic

export function TargetIcon({ size = 48 }) {
  const id = `target-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id={`${id}-grad1`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f5ff" />
          <stop offset="50%" stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#0099ff" />
        </linearGradient>
        <linearGradient id={`${id}-grad2`} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff006e" />
          <stop offset="50%" stopColor="#ff0099" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-shadow`} x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#00d4ff" floodOpacity="0.5" />
        </filter>
        <filter id={`${id}-innerGlow`}>
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ambient glow */}
      <circle cx="32" cy="32" r="28" fill={`url(#${id}-glow)`} />

      <g filter={`url(#${id}-shadow)`}>
        {/* Outer ring with gradient */}
        <circle cx="32" cy="32" r="26" stroke={`url(#${id}-grad1)`} strokeWidth="3" fill="none">
          <animate attributeName="stroke-dasharray" values="0 164;164 0" dur="1.5s" fill="freeze" />
        </circle>

        {/* Middle ring */}
        <circle cx="32" cy="32" r="18" stroke={`url(#${id}-grad2)`} strokeWidth="2.5" fill="none" opacity="0.8" />

        {/* Inner ring */}
        <circle cx="32" cy="32" r="10" stroke={`url(#${id}-grad1)`} strokeWidth="2" fill="none" opacity="0.6" />

        {/* Center bullseye with glow */}
        <circle cx="32" cy="32" r="4" fill={`url(#${id}-grad1)`}>
          <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Crosshairs */}
        <g stroke={`url(#${id}-grad1)`} strokeWidth="2.5" strokeLinecap="round">
          <line x1="32" y1="4" x2="32" y2="14" />
          <line x1="32" y1="50" x2="32" y2="60" />
          <line x1="4" y1="32" x2="14" y2="32" />
          <line x1="50" y1="32" x2="60" y2="32" />
        </g>

        {/* Decorative corner accents */}
        <g fill={`url(#${id}-grad2)`} opacity="0.7">
          <circle cx="12" cy="12" r="2" />
          <circle cx="52" cy="12" r="2" />
          <circle cx="12" cy="52" r="2" />
          <circle cx="52" cy="52" r="2" />
        </g>
      </g>
    </svg>
  );
}

export function ShieldIcon({ size = 48 }) {
  const id = `shield-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id={`${id}-grad1`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f5ff" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id={`${id}-grad2`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#00d4ff" />
        </linearGradient>
        <linearGradient id={`${id}-fill`} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id={`${id}-check`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00ff88" />
          <stop offset="100%" stopColor="#00d4ff" />
        </linearGradient>
        <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#8b5cf6" floodOpacity="0.6" />
        </filter>
        <clipPath id={`${id}-clip`}>
          <path d="M32 4L8 14V30C8 45 18 56 32 60C46 56 56 45 56 30V14L32 4Z" />
        </clipPath>
      </defs>

      <g filter={`url(#${id}-glow)`}>
        {/* Shield body with gradient fill */}
        <path
          d="M32 4L8 14V30C8 45 18 56 32 60C46 56 56 45 56 30V14L32 4Z"
          fill={`url(#${id}-fill)`}
          stroke={`url(#${id}-grad1)`}
          strokeWidth="3"
        />

        {/* Inner shield accent */}
        <path
          d="M32 10L14 18V30C14 42 22 51 32 54C42 51 50 42 50 30V18L32 10Z"
          fill="none"
          stroke={`url(#${id}-grad2)`}
          strokeWidth="1.5"
          opacity="0.5"
        />

        {/* Checkmark with glow */}
        <path
          d="M22 32L28 38L42 24"
          stroke={`url(#${id}-check)`}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <animate attributeName="stroke-dasharray" values="0 30;30 0" dur="0.8s" fill="freeze" />
        </path>

        {/* Decorative stars */}
        <g fill="#00d4ff" opacity="0.6">
          <circle cx="20" cy="20" r="1.5" />
          <circle cx="44" cy="20" r="1.5" />
        </g>

        {/* Shine effect */}
        <path
          d="M32 4L8 14V16L32 6L56 16V14L32 4Z"
          fill="white"
          opacity="0.3"
        />
      </g>
    </svg>
  );
}

export function BoltIcon({ size = 48 }) {
  const id = `bolt-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id={`${id}-grad1`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffd700" />
          <stop offset="30%" stopColor="#ffaa00" />
          <stop offset="60%" stopColor="#ff6600" />
          <stop offset="100%" stopColor="#ff006e" />
        </linearGradient>
        <linearGradient id={`${id}-shine`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#ffd700" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ff6600" stopOpacity="0" />
        </linearGradient>
        <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id={`${id}-shadow`} x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#ffd700" floodOpacity="0.7" />
        </filter>
      </defs>

      <g filter={`url(#${id}-shadow)`}>
        {/* Main bolt shape */}
        <path
          d="M34 4L12 36H26L22 60L52 24H36L34 4Z"
          fill={`url(#${id}-grad1)`}
          stroke="#ffd700"
          strokeWidth="1"
        />

        {/* Shine overlay */}
        <path
          d="M34 4L12 36H20L34 4Z"
          fill={`url(#${id}-shine)`}
        />

        {/* Inner detail line */}
        <path
          d="M30 16L20 32H28L26 44"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.4"
          fill="none"
        />

        {/* Energy particles */}
        <g fill="#ffd700">
          <circle cx="8" cy="28" r="2" opacity="0.6">
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="56" cy="20" r="1.5" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.1;0.5" dur="1.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="48" cy="40" r="2" opacity="0.7">
            <animate attributeName="opacity" values="0.7;0.3;0.7" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="14" cy="48" r="1.5" opacity="0.4">
            <animate attributeName="opacity" values="0.4;0.1;0.4" dur="1.4s" repeatCount="indefinite" />
          </circle>
        </g>
      </g>
    </svg>
  );
}

export function ChartIcon({ size = 48 }) {
  const id = `chart-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id={`${id}-bar1`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#00f5ff" />
        </linearGradient>
        <linearGradient id={`${id}-bar2`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
        <linearGradient id={`${id}-bar3`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#ff006e" />
          <stop offset="100%" stopColor="#ff4d94" />
        </linearGradient>
        <linearGradient id={`${id}-line`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00f5ff" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ff006e" />
        </linearGradient>
        <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#00d4ff" floodOpacity="0.5" />
        </filter>
        <filter id={`${id}-barGlow`}>
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter={`url(#${id}-glow)`}>
        {/* Background grid */}
        <g stroke="#00d4ff" strokeWidth="0.5" opacity="0.2">
          <line x1="8" y1="16" x2="56" y2="16" />
          <line x1="8" y1="28" x2="56" y2="28" />
          <line x1="8" y1="40" x2="56" y2="40" />
        </g>

        {/* Bars with 3D effect */}
        <g filter={`url(#${id}-barGlow)`}>
          {/* Bar 1 */}
          <rect x="10" y="36" width="10" height="18" rx="2" fill={`url(#${id}-bar1)`} opacity="0.9">
            <animate attributeName="height" values="0;18" dur="0.6s" fill="freeze" />
            <animate attributeName="y" values="54;36" dur="0.6s" fill="freeze" />
          </rect>
          <rect x="10" y="36" width="10" height="3" rx="1" fill="white" opacity="0.3" />

          {/* Bar 2 */}
          <rect x="27" y="22" width="10" height="32" rx="2" fill={`url(#${id}-bar2)`} opacity="0.9">
            <animate attributeName="height" values="0;32" dur="0.8s" fill="freeze" />
            <animate attributeName="y" values="54;22" dur="0.8s" fill="freeze" />
          </rect>
          <rect x="27" y="22" width="10" height="3" rx="1" fill="white" opacity="0.3" />

          {/* Bar 3 */}
          <rect x="44" y="10" width="10" height="44" rx="2" fill={`url(#${id}-bar3)`} opacity="0.9">
            <animate attributeName="height" values="0;44" dur="1s" fill="freeze" />
            <animate attributeName="y" values="54;10" dur="1s" fill="freeze" />
          </rect>
          <rect x="44" y="10" width="10" height="3" rx="1" fill="white" opacity="0.3" />
        </g>

        {/* Trend line */}
        <path
          d="M15 32L32 18L49 6"
          stroke={`url(#${id}-line)`}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        >
          <animate attributeName="stroke-dasharray" values="0 60;60 0" dur="1.2s" fill="freeze" />
        </path>

        {/* Data points */}
        <g>
          <circle cx="15" cy="32" r="4" fill="#00f5ff" stroke="white" strokeWidth="2" />
          <circle cx="32" cy="18" r="4" fill="#8b5cf6" stroke="white" strokeWidth="2" />
          <circle cx="49" cy="6" r="4" fill="#ff006e" stroke="white" strokeWidth="2" />
        </g>

        {/* Base line */}
        <line x1="6" y1="54" x2="58" y2="54" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      </g>
    </svg>
  );
}

export function SparklesIcon({ size = 48 }) {
  const id = `sparkles-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id={`${id}-grad1`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff006e" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#00d4ff" />
        </linearGradient>
        <linearGradient id={`${id}-grad2`} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffd700" />
          <stop offset="100%" stopColor="#ff9500" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-shadow`} x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#8b5cf6" floodOpacity="0.6" />
        </filter>
      </defs>

      {/* Ambient glow */}
      <circle cx="32" cy="28" r="24" fill={`url(#${id}-glow)`} />

      <g filter={`url(#${id}-shadow)`}>
        {/* Main sparkle star */}
        <path
          d="M32 4L36 22L54 26L36 30L32 48L28 30L10 26L28 22L32 4Z"
          fill={`url(#${id}-grad1)`}
        >
          <animate attributeName="transform" type="rotate" values="0 32 26;5 32 26;0 32 26;-5 32 26;0 32 26" dur="4s" repeatCount="indefinite" />
        </path>

        {/* Inner highlight */}
        <path
          d="M32 10L34 22L46 26L34 30L32 42L30 30L18 26L30 22L32 10Z"
          fill="white"
          opacity="0.3"
        />

        {/* Secondary sparkles with different colors */}
        <g>
          {/* Gold sparkle - top right */}
          <path
            d="M50 12L52 18L58 20L52 22L50 28L48 22L42 20L48 18L50 12Z"
            fill={`url(#${id}-grad2)`}
          >
            <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
          </path>

          {/* Cyan sparkle - bottom left */}
          <path
            d="M14 40L16 46L22 48L16 50L14 56L12 50L6 48L12 46L14 40Z"
            fill="#00f5ff"
          >
            <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2.5s" repeatCount="indefinite" />
          </path>

          {/* Pink sparkle - bottom right */}
          <path
            d="M48 44L49.5 48L54 49.5L49.5 51L48 55L46.5 51L42 49.5L46.5 48L48 44Z"
            fill="#ff006e"
          >
            <animate attributeName="opacity" values="0.7;0.3;0.7" dur="1.8s" repeatCount="indefinite" />
          </path>

          {/* Purple sparkle - left */}
          <path
            d="M8 20L9 23L12 24L9 25L8 28L7 25L4 24L7 23L8 20Z"
            fill="#8b5cf6"
          >
            <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2.2s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Floating particles */}
        <g>
          <circle cx="24" cy="12" r="1.5" fill="#00d4ff" opacity="0.6">
            <animate attributeName="cy" values="12;10;12" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="44" cy="36" r="1" fill="#ff006e" opacity="0.5">
            <animate attributeName="cy" values="36;34;36" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="18" cy="34" r="1.2" fill="#ffd700" opacity="0.7">
            <animate attributeName="cy" values="34;32;34" dur="2.8s" repeatCount="indefinite" />
          </circle>
        </g>
      </g>
    </svg>
  );
}

// Additional premium icons for enhanced UI

export function CrownIcon({ size = 48 }) {
  const id = `crown-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id={`${id}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffd700" />
          <stop offset="50%" stopColor="#ffaa00" />
          <stop offset="100%" stopColor="#ff8800" />
        </linearGradient>
        <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#ffd700" floodOpacity="0.6" />
        </filter>
      </defs>

      <g filter={`url(#${id}-glow)`}>
        <path
          d="M8 48L12 24L22 32L32 16L42 32L52 24L56 48H8Z"
          fill={`url(#${id}-grad)`}
          stroke="#ffd700"
          strokeWidth="2"
        />
        <circle cx="12" cy="24" r="4" fill="#ff006e" />
        <circle cx="32" cy="16" r="5" fill="#8b5cf6" />
        <circle cx="52" cy="24" r="4" fill="#00d4ff" />
        <rect x="8" y="48" width="48" height="6" rx="2" fill={`url(#${id}-grad)`} />
        <path d="M8 48L12 24L22 32L32 16L42 32L52 24L56 48" fill="white" opacity="0.2" />
      </g>
    </svg>
  );
}

export function QRCodeIcon({ size = 48 }) {
  const id = `qr-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id={`${id}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#00d4ff" floodOpacity="0.5" />
        </filter>
      </defs>

      <g filter={`url(#${id}-glow)`}>
        {/* Top-left corner */}
        <rect x="8" y="8" width="18" height="18" rx="2" stroke={`url(#${id}-grad)`} strokeWidth="3" fill="none" />
        <rect x="12" y="12" width="10" height="10" rx="1" fill={`url(#${id}-grad)`} />

        {/* Top-right corner */}
        <rect x="38" y="8" width="18" height="18" rx="2" stroke={`url(#${id}-grad)`} strokeWidth="3" fill="none" />
        <rect x="42" y="12" width="10" height="10" rx="1" fill={`url(#${id}-grad)`} />

        {/* Bottom-left corner */}
        <rect x="8" y="38" width="18" height="18" rx="2" stroke={`url(#${id}-grad)`} strokeWidth="3" fill="none" />
        <rect x="12" y="42" width="10" height="10" rx="1" fill={`url(#${id}-grad)`} />

        {/* Data pattern */}
        <g fill={`url(#${id}-grad)`}>
          <rect x="30" y="8" width="4" height="4" />
          <rect x="30" y="16" width="4" height="4" />
          <rect x="8" y="30" width="4" height="4" />
          <rect x="16" y="30" width="4" height="4" />
          <rect x="38" y="30" width="4" height="4" />
          <rect x="50" y="30" width="4" height="4" />
          <rect x="30" y="38" width="4" height="4" />
          <rect x="38" y="38" width="4" height="12" />
          <rect x="46" y="42" width="4" height="4" />
          <rect x="50" y="50" width="4" height="4" />
          <rect x="30" y="50" width="4" height="4" />
        </g>
      </g>
    </svg>
  );
}

export function KeypadIcon({ size = 48 }) {
  const id = `keypad-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id={`${id}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff006e" />
          <stop offset="100%" stopColor="#ff9500" />
        </linearGradient>
        <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#ff006e" floodOpacity="0.5" />
        </filter>
      </defs>

      <g filter={`url(#${id}-glow)`}>
        {/* Number pad grid */}
        <g stroke={`url(#${id}-grad)`} strokeWidth="2" fill="rgba(255, 0, 110, 0.1)">
          <rect x="8" y="8" width="12" height="12" rx="3" />
          <rect x="26" y="8" width="12" height="12" rx="3" />
          <rect x="44" y="8" width="12" height="12" rx="3" />
          <rect x="8" y="26" width="12" height="12" rx="3" />
          <rect x="26" y="26" width="12" height="12" rx="3" />
          <rect x="44" y="26" width="12" height="12" rx="3" />
          <rect x="8" y="44" width="12" height="12" rx="3" />
          <rect x="26" y="44" width="12" height="12" rx="3" />
          <rect x="44" y="44" width="12" height="12" rx="3" />
        </g>

        {/* Numbers */}
        <g fill={`url(#${id}-grad)`} fontSize="10" fontWeight="bold" textAnchor="middle" dominantBaseline="central">
          <text x="14" y="14">1</text>
          <text x="32" y="14">2</text>
          <text x="50" y="14">3</text>
          <text x="14" y="32">4</text>
          <text x="32" y="32">5</text>
          <text x="50" y="32">6</text>
          <text x="14" y="50">7</text>
          <text x="32" y="50">8</text>
          <text x="50" y="50">9</text>
        </g>
      </g>
    </svg>
  );
}

export function GoogleIcon({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <defs>
        <filter id="google-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#4285f4" floodOpacity="0.4" />
        </filter>
      </defs>

      <g filter="url(#google-glow)">
        <path d="M32 14c-4.4 0-8.4 1.5-11.5 4.1l5.8 5.8c1.6-1.3 3.6-2.1 5.7-2.1 2.3 0 4.4.8 6 2.1l5.8-5.8C40.6 15.5 36.5 14 32 14z" fill="#ea4335"/>
        <path d="M20.5 18.1C17.4 21.1 15.5 25.3 15.5 30s1.9 8.9 5 11.9l5.8-5.8c-1.3-1.6-2.1-3.7-2.1-6.1s.8-4.5 2.1-6.1l-5.8-5.8z" fill="#fbbc05"/>
        <path d="M32 46c4.4 0 8.4-1.5 11.5-4.1l-5.8-5.8c-1.6 1.3-3.6 2.1-5.7 2.1-4.1 0-7.6-2.8-8.8-6.6l-5.8 5.8C20.5 42.1 25.8 46 32 46z" fill="#34a853"/>
        <path d="M48.5 30c0-1.2-.1-2.3-.3-3.4H32v6.8h9.3c-.4 2.1-1.6 3.9-3.4 5.1l5.8 5.8c3.4-3.2 5.3-7.9 5.3-13.3z" fill="#4285f4"/>
      </g>
    </svg>
  );
}

export function UserIcon({ size = 48 }) {
  const id = `user-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id={`${id}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#00d4ff" floodOpacity="0.5" />
        </filter>
      </defs>

      <g filter={`url(#${id}-glow)`}>
        <circle cx="32" cy="20" r="10" stroke={`url(#${id}-grad)`} strokeWidth="3" fill="rgba(0, 212, 255, 0.1)" />
        <path d="M12 52c0-11 9-20 20-20s20 9 20 20" stroke={`url(#${id}-grad)`} strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function AnonymousIcon({ size = 48 }) {
  const id = `anon-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id={`${id}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6b7280" />
          <stop offset="100%" stopColor="#9ca3af" />
        </linearGradient>
        <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#6b7280" floodOpacity="0.4" />
        </filter>
      </defs>

      <g filter={`url(#${id}-glow)`}>
        <circle cx="32" cy="20" r="10" stroke={`url(#${id}-grad)`} strokeWidth="3" fill="rgba(107, 114, 128, 0.1)" />
        <path d="M12 52c0-11 9-20 20-20s20 9 20 20" stroke={`url(#${id}-grad)`} strokeWidth="3" fill="none" strokeLinecap="round" />
        <text x="32" y="24" textAnchor="middle" fontSize="12" fill={`url(#${id}-grad)`}>?</text>
      </g>
    </svg>
  );
}
