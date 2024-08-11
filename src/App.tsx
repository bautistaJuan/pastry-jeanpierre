import { contenfulAPISec1 } from "./api/api";
import { Items } from "./types/items-props";
import { useEffect, useState } from "react";
import logo from "./assets/Logo Pastelería y Tortas Circular Lila y Rojo.png";
import Whatsapp from "./components/Whatsapp";
import Services from "../src/components/Services";
import "./index.css";
import Card from "./components/Card";
import image from "./assets/Budín clásico de naranja.jpeg";
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
      <div className="min-h-[100vh] ">
        <header className="h-24 flex">
          <button className="bg-[#A94FA5] rounded-br-[2rem] h-20 flex flex-col text-white justify-center p-3 gap-3 ">
            <span className="h-2 w-14 bg-white rounded"></span>
            <span className="h-2 w-14 bg-white rounded"></span>
            <span className="h-2 w-14 bg-white rounded"></span>
          </button>
        </header>
        <img className="m-auto mt-7 rounded-full " src={logo} alt="Pasteleria Tortas JeanPierre" width={350} />
        <h3 className="text-presentation">
          Bienvenidos a <br /><span className="text-[#8B73FF]">Jeanpierre Pastelería</span><br />el lugar donde cada elección se convierte en una experiencia exquisita.
        </h3>
        <Whatsapp />
      </div>
      <main className=" bg-[#CD7FB1] flex flex-col justify-center items-center">
        <h3 className="text-subtitle p-12">QUE HAGO</h3>
        <section className="pt-[12rem ">
          <Services items={fields} />
        </section>
        <h3 className="text-subtitle p-12">EVENTOS ESPECIALES</h3>
        <section className="pt-[12rem ">
          <Services items={fields} type="especial" />
        </section>
      </main>
    </div>
  )
}
export default App


