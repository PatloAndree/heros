import React from "react"
import { HeroesList } from "../components/HeroesList"


export const MarvelPage = () => {
    return (
    <>
      <h1>Marvel página</h1>
      <hr />
      <HeroesList publisher='Marvel Comics'/>

    </>
    )
}