interface IButton{
    content: string;
    href:  string;
    customStyles?: string;
}

export function Button ({content,href,customStyles}:IButton){
    return(

        <a className={`py-3 px-8 bg-heading-color font-semibold text-white rounded hover:bg-primary-color transition-all duration-300 ${customStyles}`} href={href}>
            {content}
        </a>    
       
        
    );
}