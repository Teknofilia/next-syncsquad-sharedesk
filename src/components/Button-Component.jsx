const Button = (props) => {    
    return (        
        <>
            <button    
                onClick={props?.click?()=>props?.click():null}
                className={`${props?.className} `}
            >
                {props?.title}
            </button>
        </>
    )
}

const ButtonPrimer = (props) => {    
    return (        
        <>
            <button    
                onClick={props?.click?()=>props?.click():null}
                className={`${props?.className} bg-primer-800 text-white font-bold py-2 px-4 rounded`}
            >
                {props?.title}
            </button>
        </>
    )
}

const ButtonPolos = (props) => {    
    return (        
        <>
            <button    
                onClick={props?.click?()=>props?.click():null}
                className={`${props?.className} font-bold py-2 px-4 `}
            >
                {props?.title}
            </button>
        </>
    )
}

export {
    Button,
    ButtonPolos,
    ButtonPrimer
}