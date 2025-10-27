import { Item } from "../Item/Item";

export const ItemDetail = ({ detail }) => {
  return (


    //En el caso de optar por la NO reutilizacion, pueden colocar el Link envolviendo el <article>
    //en Item y dejar como estaba el ItemList, sin modificaciones

    <Item {...detail}>
      <button>Enviar al carrito</button>
    </Item>
  );
};