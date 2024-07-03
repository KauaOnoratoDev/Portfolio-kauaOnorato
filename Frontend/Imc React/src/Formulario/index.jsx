import { useEffect, useState } from "react"
import Tabela from '../Tabela'

function Formulario() {

    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [valor, setValor] = useState(false)
    const [imcValor, setImcValor] = useState()

    useEffect(() => {
        if (peso != 0 & altura != 0) {
            setImcValor(imc(peso, altura))
            setValor(true)
        }
    }, [altura, peso])

    function imc(peso, altura) {
        let alturaM = altura / 100
        return parseFloat(peso / (alturaM * alturaM)).toFixed(1)
    }

    return (
        <>
            <div className="container">
                <form className="d-flex flex-column align-items-center">
                    <div className="form-control w-50 d-flex flex-column align-items-center rounded-5 mb-3">
                        <label>
                            Digite sua altura
                        </label>
                        <input onBlur={e => { setAltura(e.target.value)}} className="form-control mb-2 w-50" type="number" placeholder="Cm" />
                    </div>
                    <div className="form-control w-50 d-flex flex-column align-items-center rounded-5 mb-3">
                        <label>
                            Digite seu peso
                        </label>
                        <input onBlur={e => { setPeso(e.target.value)}} className="form-control mb-2 w-50" type="number" placeholder="Kg" />
                    </div>
                    {valor && (
                        <div className="form-control w-50 d-flex flex-column align-items-center rounded-5 p-4">
                            <p className="m-0">
                                Seu IMC é de {imcValor}
                            </p>
                        </div>
                    )}
                </form>
            </div>
            <Tabela imcValor={imcValor}/>
        </>
    )
}

export default Formulario