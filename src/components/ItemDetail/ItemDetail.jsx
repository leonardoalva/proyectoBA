import Item from '/src/components/Item/Item';
import Counter from '/src/components/Counter/Counter';

const ItemDetail = ({ detail }) => {
  return (


    //En el caso de optar por la NO reutilizacion, pueden colocar el Link envolviendo el <article>
    //en Item y dejar como estaba el ItemList, sin modificaciones

    <Item {...detail}>
      <Counter item={detail} onConfirm={() => console.log("Item agregado al carrito")} />
    </Item>
  );
};

export default ItemDetail;
