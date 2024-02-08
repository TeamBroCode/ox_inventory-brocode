export default function Shirt({styles, onClick}:{styles?:React.CSSProperties, onClick?:()=>void}) {
    return (
        <svg style={styles} onClick={onClick} viewBox="0 0 146 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="67" height="67" rx="33.5" fill="#A4A4A4" />
            <path d="M66.9418 32.4141H220.942" stroke="#A4A4A4" stroke-width="4" stroke-linecap="round" />
            <g clip-path="url(#clip0_16_11)">
                <path d="M16.7647 22.8565L22.8431 16.7705H28.9216C28.9216 17.5697 29.0788 18.3611 29.3842 19.0995C29.6898 19.8379 30.1375 20.5088 30.7019 21.074C31.2664 21.6392 31.9365 22.0874 32.6738 22.3933C33.4113 22.6991 34.2017 22.8565 35 22.8565C35.7983 22.8565 36.5887 22.6991 37.3262 22.3933C38.0635 22.0874 38.7336 21.6392 39.2981 21.074C39.8625 20.5088 40.3103 19.8379 40.6157 19.0995C40.9212 18.3611 41.0784 17.5697 41.0784 16.7705H47.1569L53.2353 22.8565L52.3813 31.4079C52.3073 32.1481 51.4892 32.5595 50.8519 32.1768L47.1569 29.957V45.1721C47.1569 47.413 45.3427 49.2295 43.1046 49.2295H26.8954C24.6574 49.2295 22.8431 47.413 22.8431 45.1721V29.957L19.148 32.1768C18.5109 32.5595 17.6927 32.1481 17.6188 31.4079L16.7647 22.8565Z" fill="#D9D9D9" stroke="#404040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_16_11">
                    <rect width="40" height="36" fill="white" transform="translate(15 15)" />
                </clipPath>
            </defs>
        </svg>
    )
}