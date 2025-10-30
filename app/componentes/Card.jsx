"use client"
import{ useRouter } from "next/navigation"
import React from 'react'

export default function Card({data}) {
   const router = useRouter()
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={data.imagem}
      style={{aspectRatio: '16/9'}}
      alt="Shoes" 
      />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{data.modelo}</h2>
    <p>{data.descricao}</p>
    <div className="card-actions justify-end">
      <button 
      onClick={() => router.push(`info/${data.id}`)}
      className="btn btn-primary">Veja mais</button>
    </div>
  </div>
</div>
    </div>
  )
}
