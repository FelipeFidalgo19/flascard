import { useState , useRef } from 'react';
import './Style.css';

function Main() {

    const [imagem, setImagem] = useState();
    const [linkImg, setLinkImg] = useState("");
    const [termo, setTermo] = useState("");
    const [significado, setSignificado] = useState("");


    function onChange(event) {
      var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function(event) {
            setImagem(event.target.result)
        };
          if (file) {
            reader.readAsDataURL(file);
          }
    }

 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Menu</h1>
        <label>Selecione uma imagem</label> 
        <input onChange={(e) => onChange(e)}  type="file" id="myFile" /><br />

        <label>Significado</label> 
        <input onChange={(e) => setSignificado(e.target.value)} value={significado} type="text" />

        <label>Termo</label> 
        <input onChange={(e) => setTermo(e.target.value)} value={termo} type="text" />

        <label>Importe por Link</label> 
        <input onChange={(e) => setLinkImg(e.target.value)} value={linkImg} type="text" />

        {imagem != "" &&
        <div className='bottom_menu'>
            <img src={linkImg != "" ? linkImg : imagem} height="200" alt="Image preview..."></img>
            <input  type="submit" value="Salvar" />
        </div>
        }
        {linkImg != "" &&
        <div className='bottom_menu'>
            <img src={linkImg != "" ? linkImg : imagem} height="200" alt="Image preview..."></img>
            <input  type="submit" value="Salvar" />
        </div>
        }
      </header>
    </div>
  );
}

export default Main;
