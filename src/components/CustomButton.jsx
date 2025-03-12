import '../button.css'

export default function CustomButton({text, onClick}){
    return(    
        <button id="glitch" onClick={onClick} className='active:scale-95'>{text}</button>
 )
}