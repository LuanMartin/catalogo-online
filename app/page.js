"use client"
import Image from "next/image";
import Card from "./componentes/Card";
import { useEffect, useState } from "react";

export default function Home() {

const [SuperCars , setSuperCars] = useState([])

async function loadSuperCars() {
  try{
      const response = await fetch('db.json')
      const data = await response.json()
      console.log(data)
      setSuperCars(data.hypercars_exclusivos)
  } catch (error) {
console.error("Aconteceu um erro:",error)
  }

}

 useEffect(() => { loadSuperCars() },[]) 

 const [filtro, setFiltro] = useState("")

const SuperCarFiltrados = SuperCars.filter((Car)=> {
    if (!filtro) return true 
    return Car.fabricante === filtro
})

  return (
<div className="p-4 min-h-screen" >
  <div className="flex justify-between items-center mb-4">
      <h1 className="text-2x1 font-bold">Lista de Carros</h1>
    <button className="btn btn-primary rounded-4xl">Escolher SuperCar </button>
  </div>
    
  <select className="select mb-10" value={filtro} onChange={(e) => setFiltro(e.target.value)}>

     <option value="Rolls-Royce">Rolls-Royce</option>
     <option value="Apollo"> Apollo</option>
     <option value="SSC North America">SSC North America</option>
     <option value="Rimac"> Rimac </option>
     <option value="Gordon Murray"> Gordon Murray </option>
     <option value="Ferrari"> Ferrari </option>
     <option value="Aston Martin">Aston Martin</option>
     <option value="Pagani">Pagani</option>
     <option value="Koenigsegg">Koenigsegg</option>
     <option value="Lamborghini">Lamborghini</option>
     <option value="Bugatti">Bugatti</option>
     </select>
     
  <div className="grid  md:grid-cols-3 gap-4">
   {
     SuperCarFiltrados.map((SuperCars) => <Card data={SuperCars} key={SuperCars.id}/>)
   }
   </div>
</div>
  );  
}
