import { FaWhatsapp } from "react-icons/fa"
export default function Whatsapp() {
    return (
        <>
            <button className="w-20 text-center p-2 flex fixed right-0 bottom-0">
                <a href="https://wa.me/+5491167341449?text=Hola,%20Yami!!%20Me%20Gustaría%20Una%20Hacer%20Un%20Pedido!!" target="_blank" className="flex justify-center w-full h-full bg-green-500 p-[18px] rounded-full text-[29px] text-white">
                    <FaWhatsapp />
                </a>
            </button>
        </>
    )
}
