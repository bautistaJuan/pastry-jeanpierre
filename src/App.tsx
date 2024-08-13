import { contenfulAPISec1 } from "./api/api";
import { Items } from "./types/items-props";
import { useEffect, useState } from "react";
import logo from "./assets/Logo Pastelería y Tortas Circular Lila y Rojo.png";
import Whatsapp from "./components/Whatsapp";
import Services from "../src/components/Services";
import facebook from "../src/assets/5365678_fb_facebook_facebook logo_icon.png"
import instagram from "../src/assets/5296765_camera_instagram_instagram logo_icon.png"
import "./index.css";

function App() {
  const [fields, setFields] = useState<Items[]>([]);
  useEffect(() => {
    contenfulAPISec1().then((data) => {
      const fieldsMapped = data.includes.Asset.map((datas: Items) => datas.fields);
      setFields(fieldsMapped)
    })
  }, []);


  return (
    <div>
      <div className="min-h-[100vh] bg-[#8b73ff] ">
        <header className="h-24 flex ">
          <button className="sm:hidden bg-[#A94FA5] rounded-br-[2rem] h-20 flex flex-col text-white justify-center p-3 gap-3 ">
            <span className="h-2 w-14 bg-white rounded"></span>
            <span className="h-2 w-14 bg-white rounded"></span>
            <span className="h-2 w-14 bg-white rounded"></span>
          </button>
        </header>
        <img className="m-auto mt-7 rounded-full drop-shadow-2xl" src={logo} alt="Pasteleria Tortas JeanPierre" width={350} />
        <h3 className="text-presentation">
          Bienvenidos a <span className="text-white font-extrabold">Jeanpierre Pastelería</span><br />el lugar donde cada elección se convierte en una experiencia exquisita.
        </h3>
        <Whatsapp />
      </div>
      <main className=" flex flex-col justify-center items-center bg-body-image">
        <h3 className="text-subtitle p-12">CREACIONES</h3>
        <section className="sections">
          <Services items={fields} />
          <Services items={fields} type="especial" />
        </section>
        <h3 className="text-subtitle">PARA DISFRUTAR <br />CON LOS MATES</h3>
        <section className="sections">
          <Services items={fields} type="servicios" />
        </section>
      </main>
      <footer className="min-h-[10rem] bg-pink-500 ">
        <h4 className="text-[1.5rem] text-center text-white font-semibold p-2">Te ivito a chusmear un poco mas en mis redes donde comparto cosas todos los días</h4>
        <div className="pt-7 w-full flex justify-center gap-[4rem] ">
          <a href="#" className="w-10 h-[6rem] ">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/pasteleriajeanpierre/" className="w-10 h-10">
            <img src={instagram} alt="Instagram" />
          </a>

        </div>
      </footer>
    </div >
  )
}
export default App


