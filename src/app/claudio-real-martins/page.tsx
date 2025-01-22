import React from 'react'
import Accordion from "../../components/Layout/Accordion";

export default function ClaudioRealMartins() {
  return (
    <>
      <h1>Cláudio Real Martins</h1>
      <Accordion faqHeading="H6" title="11 vezes Homenageado por turmas de Formandos Curso de Medicina Veterinária">
        <p>da Faculdade de Agronomia e Veterinária da UFRGS e por turmas de Formandos da UFMS.</p>
        <ul>
          <li>UFRGS – 1959, 54, 56, 61, 62, 63, 73, 75 e 76.</li>
          <li>UFMS – 1985 e 1986.</li>
        </ul>
      </Accordion>
      <Accordion></Accordion>
      <Accordion></Accordion>
    </>
  )
}