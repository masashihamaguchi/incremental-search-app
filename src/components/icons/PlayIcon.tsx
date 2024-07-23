export default function PlayIcon({
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
      <path d='M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm8.75-4.567a.5.5 0 0 0-.75.433v8.268a.5.5 0 0 0 .75.433l7.161-4.134a.5.5 0 0 0 0-.866L9.75 7.433z'></path>
    </svg>
  )
}
