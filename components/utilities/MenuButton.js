const MenuButton = ({ size }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            strokeWidth="1"
            // stroke="#1D2832"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-current text-dark dark:text-light"
        >
            <path d="M 5 7 L 19 7 M 5 12 L 19 12 M 5 17 L 19 17" />
        </svg>
    )
}

export default MenuButton