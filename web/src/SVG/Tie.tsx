export default function Tie({styles, onClick}:{styles?:React.CSSProperties, onClick?:()=>void}) {
    return (
        <svg style={styles} onClick={onClick} viewBox="0 0 146 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="67" height="67" rx="33.5" fill="#A4A4A4" />
            <path d="M66.9418 32.4141H220.942" stroke="#A4A4A4" stroke-width="4" stroke-linecap="round" />
            <g clip-path="url(#clip0_16_10)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30.868 17.9782C29.4053 17.9782 28.2197 16.7728 28.2197 15.2967V11.7223C28.2197 10.2414 29.4101 9.04083 30.868 9.04083H34.3981C35.8607 9.04083 37.0464 10.2462 37.0464 11.7223V15.2967C37.0464 16.7776 35.856 17.9782 34.3981 17.9782H30.868Z" fill="white" stroke="#4F4F4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.4959 20.1994H35.6746L39.24 51.8894L32.62 57.8972L26 51.8894L29.4959 20.1994Z" fill="white" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.9047 35.8549L38.8087 40.3215L39.4046 45.684L26.2945 41.2172L26.9047 35.8549Z" fill="#646464" stroke="#4F4F4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.8333 27.4691L37.7285 31.3028L38.4258 36.7044L27.2803 32.7296L27.8333 27.4691Z" fill="#646464" stroke="#4F4F4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_16_10">
                    <rect width="16" height="51" fill="white" transform="translate(25 8)" />
                </clipPath>
            </defs>
        </svg>
    )
}