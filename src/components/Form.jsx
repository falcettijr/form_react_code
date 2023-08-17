import { useState, useEffect } from "react"
import "./Form.css"

const url = "https://gist.githubusercontent.com/letanure/3012978/raw/6938daa8ba69bcafa89a8c719690225641e39586/estados-cidades.json"

const Form = () => {

const[cep, setCep] = useState("");
const[rua, setRua] = useState(""); 
const[numero, setNumero] = useState("");
const[complemento, setComplemento] = useState("");
const[bairro, setBairro] = useState("");
const[estados, setEstados] = useState([]);
const[cidades, setCidades] = useState([]);

useEffect(() => {

    async function getData() {
    const res = await fetch(url)
    const data = await res.json()
    setEstados(data.estados)
    setCidades(data.cidades)
    }
    
    getData() 
}, [])

const handleSubmit = (e) => {
    e.preventDefault()
    
    setCep("");
    setRua("");
    setNumero("");
    setComplemento("");
    setBairro("");
    setEstados("");
    setCidades("");
}


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
                    <span>ESTADO</span>
                    <select type="text" name="estado" placeholder="Digite seu estado" onChange={(e) => setEstados(e.target.value)} value={estados || ""}>
                    {estados.map((estado, i) =>(
                    <option key={`estado-${i}`} value={estado.nome}>{estado.nome}</option>
                    ))}
                    </select>
                </label>

                <label>
                    <span>LOCALIDADE</span>
                    <select type="text" name="cidade" placeholder="Digite sua cidade" onChange={(e) => setCidades(e.target.value)} value={cidades || ""}></select>
                </label>

                <input type="submit" value="Enviar" />
        </div>
    </form>
)
}

//value do option tem que ser ao id do estado ou da cidade não pode ser o nome

export default Form