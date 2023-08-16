import { useState } from "react"
import "./Form.css"

const Form = () => {

const [cep, setCep] = useState("");
const[rua, setRua] = useState(""); 
const[numero, setNumero] = useState("");
const[complemento, setComplemento] = useState("");
const[bairro, setBairro] = useState("");
const[uf, setUf] = useState("");
const[localidade, setLocalidade] = useState("");


const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log(cep, rua, numero, complemento, bairro, uf, localidade)

    setCep("");
    setRua("");
    setNumero("");
    setComplemento("");
    setBairro("");
    setUf("");
    setLocalidade("");
}

console.log(cep, rua, numero, complemento, bairro, uf, localidade)

return (
    <form onSubmit={handleSubmit}>
        <div>
        <img src="/logo.svg" alt="" />
        <h1>Formulário React - Code</h1>
                <label>
                    <span>CEP</span>
                    <input type="text" name="cep" placeholder="Digite seu cep" onChange={(e) => setCep(e.target.value)} value={cep || ""}/>
                </label>

                <label>
                    <span>RUA</span>
                    <input type="text" name="rua" placeholder="Digite sua rua" onChange={(e) => setRua(e.target.value)} value={rua || ""}/>
                </label>

                <label>
                    <span>NÚMERO</span>
                    <input type="text" name="numero" placeholder="Digite seu número" onChange={(e) => setNumero(e.target.value)} value={numero || ""}/>
                </label>

                <label>
                    <span>COMPLEMENTO</span>
                    <input type="text" name="complemento" placeholder="Digite seu complemento" onChange={(e) => setComplemento(e.target.value)} value={complemento || ""}/>
                </label>
                
                <label>
                    <span>BAIRRO</span>
                    <input type="text" name="bairro" placeholder="Digite seu bairro" onChange={(e) => setBairro(e.target.value)} value={bairro || ""}/>
                </label>

                <label>
                    <span>UF</span>
                    <select type="text" name="uf" placeholder="Digite seu estado" onChange={(e) => setUf(e.target.value)} value={uf || ""}></select>
                </label>

                <label>
                    <span>LOCALIDADE</span>
                    <select type="text" name="localidade" placeholder="Digite sua cidade" onChange={(e) => setLocalidade(e.target.value)} value={localidade || ""}/><select/>
                </label>
                <input type="submit" value="Enviar" />
        </div>
    </form>
)
}


//value do option tem que ser ao id do estado ou da cidade não pode ser o nome


export default Form