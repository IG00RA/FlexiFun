export default function CSvgMedium({
  color = 'black',
  line = false,
  top = '1px',
}) {
  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 18"
        width="0.5em"
        height="1em"
        style={{ position: 'relative', top }}
      >
        <path
          d="M6.96 17.2265C6.192 17.2265 5.44 17.0985 4.704 16.8425C3.984 16.5705 3.328 16.1785 2.736 15.6665C2.16 15.1545 1.696 14.5305 1.344 13.7945C1.008 13.0425 0.84 12.1945 0.84 11.2505C0.84 10.3065 1.008 9.46648 1.344 8.73048C1.696 7.99448 2.16 7.37048 2.736 6.85848C3.312 6.34648 3.96 5.95448 4.68 5.68248C5.4 5.41048 6.144 5.27448 6.912 5.27448C7.472 5.27448 8 5.35448 8.496 5.51448C9.008 5.67448 9.448 5.86648 9.816 6.09048C10.184 6.31448 10.448 6.53848 10.608 6.76248C10.816 6.95448 10.992 7.13848 11.136 7.31448C11.28 7.49048 11.328 7.70648 11.28 7.96248C11.232 8.12248 11.16 8.27448 11.064 8.41848C10.968 8.54648 10.848 8.68248 10.704 8.82648C10.32 9.25848 9.944 9.41848 9.576 9.30648C9.368 9.19448 9.16 9.07448 8.952 8.94648C8.744 8.81848 8.528 8.69848 8.304 8.58648C8.096 8.45848 7.88 8.35448 7.656 8.27448C7.432 8.19448 7.184 8.15448 6.912 8.15448C6.304 8.15448 5.76 8.29048 5.28 8.56248C4.816 8.81848 4.448 9.17848 4.176 9.64248C3.92 10.1065 3.792 10.6425 3.792 11.2505C3.792 11.8585 3.92 12.4025 4.176 12.8825C4.448 13.3465 4.816 13.7145 5.28 13.9865C5.744 14.2425 6.272 14.3705 6.864 14.3705C7.152 14.3705 7.424 14.3385 7.68 14.2745C7.952 14.1945 8.192 14.0985 8.4 13.9865C8.608 13.8585 8.776 13.7305 8.904 13.6025C9.08 13.4905 9.24 13.3865 9.384 13.2905C9.528 13.1945 9.68 13.1465 9.84 13.1465C10.032 13.1465 10.216 13.2185 10.392 13.3625C10.584 13.4905 10.792 13.6985 11.016 13.9865C11.224 14.2265 11.336 14.4585 11.352 14.6825C11.384 14.9065 11.336 15.1225 11.208 15.3305C11.096 15.5385 10.904 15.7305 10.632 15.9065C10.44 16.0985 10.152 16.2985 9.768 16.5065C9.4 16.6985 8.968 16.8665 8.472 17.0105C7.992 17.1545 7.488 17.2265 6.96 17.2265ZM6.99 1.55448L9.054 0.522476C9.214 0.442476 9.39 0.386476 9.582 0.354475C9.774 0.322476 9.966 0.362476 10.158 0.474475C10.366 0.570476 10.566 0.810476 10.758 1.19448C10.95 1.57848 10.998 1.90648 10.902 2.17848C10.806 2.43448 10.566 2.63448 10.182 2.77848L7.446 3.90648C7.382 3.92248 7.31 3.94648 7.23 3.97848C7.166 3.99448 7.086 4.00248 6.99 4.00248C6.894 4.00248 6.806 3.99448 6.726 3.97848C6.662 3.94648 6.606 3.92248 6.558 3.90648L3.822 2.77848C3.454 2.63448 3.214 2.43448 3.102 2.17848C3.006 1.90648 3.054 1.58648 3.246 1.21848C3.438 0.850476 3.622 0.610476 3.798 0.498475C3.99 0.370476 4.166 0.322476 4.326 0.354475C4.502 0.370475 4.662 0.410475 4.806 0.474475L6.99 1.55448Z"
          fill={color}
        />
      </svg>
      <span
        style={{
          display: line ? 'block' : 'none',
          height: '1px',
          backgroundColor: color,
          width: '110%',
          position: 'absolute',
          left: '-1px',
          bottom: '4px',
        }}
      />
    </span>
  );
}