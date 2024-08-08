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
  }, [])
  return (
    <div>
      <div className="min-h-[100vh] bg-[#3C4977]">
        <header className="h-24 flex">
          <button className="bg-[#A94FA5] rounded-br-[2rem] h-20 flex flex-col text-white justify-center p-3 gap-3 ">
            <span className="h-2 w-14 bg-white rounded"></span>
            <span className="h-2 w-14 bg-white rounded"></span>
            <span className="h-2 w-14 bg-white rounded"></span>
          </button>
        </header>
        <img className="m-auto mt-7 rounded-full " src={logo} alt="Pasteleria Tortas JeanPierre" width={350} />
        <h3 className="text-[3rem] text-presentation text-[#C4F9CA] p-10 text-center mt-14">
          Bienvenidos a <br /><span className="text-[#8B73FF]">Jeanpierre Pastelería</span><br />el lugar donde cada elección se convierte en una experiencia exquisita.
        </h3>

      </div>
      <main>
        <Whatsapp />
        <section className="flex flex-col mt-40 justify-center items-center gap-5">
          {/* <Services items={fields} /> */}
          <Card title="Chin" imgUrl={image} />
          <Card title="Chin" imgUrl={image} />
          <Card title="Chin" imgUrl={image} />
          <Card title="Chin" imgUrl={image} />
          <Card title="Chin" imgUrl={image} />
          <Card title="Chin" imgUrl={image} />
          <Card title="Chin" imgUrl={image} />
        </section>
      </main>
    </div>
  )
}

export default App


