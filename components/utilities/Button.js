const Button = ({children}) => {
    return (
        <button className="
        border-2 rounded-full border-solid py-2 px-5 border-dark dark:border-light flex items-center justify-between group relative overflow-hidden
        hover:text-light dark:hover:text-dark z-10 hover:bg-dark dark:hover:bg-light
        ">
            <span className="uppercase font-semibold">{children}</span>
            <span className="pl-5 pr-0 group-hover:pl-2 group-hover:pr-3 group-hover:text-light dark:group-hover:text-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <line x1="15" y1="16" x2="19" y2="12" />
                    <line x1="15" y1="8" x2="19" y2="12" />
                </svg>
            </span>
        </button>
    )
}

export default Button