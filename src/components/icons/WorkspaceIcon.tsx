import type { SVGProps } from 'react';

type WorkspaceIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function WorkspaceIcon({ size = 20, ...props }: WorkspaceIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M4 6L7.2 18H10.1L12 10.7L13.9 18H16.8L20 6H17.2L15.35 14.1L13.4 6H10.6L8.65 14.1L6.8 6H4Z"
        fill="currentColor"
      />
    </svg>
  );
}
