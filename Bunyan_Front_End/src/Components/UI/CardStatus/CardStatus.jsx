import Style from './CardStatus.module.css'
function CardStatus({counter,title ,icon}){
    return(
        <>
        <div className={`${Style.cardStatus} d-flex align-items-center `  }>
                <div className={`${Style.icon} w-100 d-flex align-items-center justify-content-center `}>
                    
                    <i className={`fa-solid ${icon}`}></i>

                </div>
                <div className={`${Style.info} w-100 d-flex flex-column align-items-center gap-2`} >
                    <span className={Style.counter}>{counter}</span>
                    <span className={Style.title}> {title}</span>

                </div>
            </div>
        </>
    )
}
export default CardStatus;