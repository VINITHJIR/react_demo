import './component_css/Array.css';

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];


const Arr = [{id:1,name:'vinith',age:20},{id:2,name:'bala',age:20},{id:3,name:'gokul',age:30}];
const Array =()=>{

    const listItems = products.map(product =>
        <li
          key={product.id}
          style={{color:product.isFruit?'yellow':'green'}}
        >
          {product.title}
        </li>
      );
    


    const listitems = Arr.map(items=>
        <li key={items.id}>
            {items.id} <br/>
            {items.name}<br/>
            {items.age}
        </li>)
  return(
    <>
    <div className="arr">{listitems}</div>
    <div className="arr">{listItems}</div>
    </>
  )
};

export default Array;