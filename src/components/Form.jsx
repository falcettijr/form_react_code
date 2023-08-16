import { useState } from "react"
import "./Form.css"

const Form = () => {

const [cep, setCep] = useState("");

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(cep)

    setCep("");
}
console.log(cep)


return (
    <form onSubmit={handleSubmit}>
        <div>
        <h1>Formulário React Code n APP</h1>
                <label>
                    <span>CEP:</span>
                    <input type="text" name="cep" placeholder="Digite seu cep" onChange={(e) => setCep(e.target.value)} value={cep || ""}/>
                </label>

                <label>
                    <span>RUA:</span>
                    <input type="text" name="cep" placeholder="Digite sua rua"/>
                </label>

                <label>
                    <span>NÚMERO:</span>
                    <input type="text" name="cep" placeholder="Digite seu número"/>
                </label>

                <label>
                    <span>COMPLEMENTO:</span>
                    <input type="text" name="cep" placeholder="Digite seu complementp"/>
                </label>
                
                <label>
                    <span>BAIRRO:</span>
                    <input type="text" name="cep" placeholder="Digite seu bairro"/>
                </label>

                <label>
                    <span>UF:</span>
                    <input type="text" name="cep" placeholder="Digite seu estado"/>
                </label>

                <label>
                    <span>LOCALIDADE:</span>
                    <input type="text" name="cep" placeholder="Digite sua cidade"/>
                </label>
                <input type="submit" value="Enviar" />
        </div>
    </form>
)
}

export default Form