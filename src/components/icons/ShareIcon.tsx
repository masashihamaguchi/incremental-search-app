export default function ShareIcon({
  width = 24,
  height = 24,
  fill = '#000000',
}: {
  width?: number
  height?: number
  fill?: string
}) {
  return (
    <svg
      data-encore-id='icon'
      role='img'
      aria-hidden='true'
      viewBox='0 0 24 24'
      width={width}
      height={height}
      fill={fill}
    >
      <path d='M18.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM15 5.5a3.5 3.5 0 1 1 1.006 2.455L9 12l7.006 4.045a3.5 3.5 0 1 1-.938 1.768l-6.67-3.85a3.5 3.5 0 1 1 0-3.924l6.67-3.852A3.513 3.513 0 0 1 15 5.5zm-9.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm13 6.5a1.5 1.5 0 1 0-.001 3 1.5 1.5 0 0 0 .001-3z'></path>
    </svg>
  )
}
