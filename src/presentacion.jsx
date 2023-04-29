import ImagenYohana from './assets/yohana.jpg'
import './presentacioncard.css';

function Presentacion (){
  let name = "Yohana";
  let lastname = "Valdez";

//Los componentes siempre debemos declararlos la primera con mayuscula

 return (
  <div className='presentacion'>
  <img src={ImagenYohana} alt="yohana" className='yoha'/>
  <h1>
    Hola!!
    <br />
    Mi Nombre es {name} {lastname}
  </h1>
  </div>
 );
}

export default Presentacion;