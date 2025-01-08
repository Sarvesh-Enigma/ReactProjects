import './Product.css'
import Price from './Price.jsx';
function Product({title,idx}){
    let oldPrice=["12,999","10,999","5999","4000"];
    let newPrice=["10,999","9,999","2999","2000"];
    let description=["8000 DPI","Designed for Ipad Pro","Sleek Surface","Wireless"]
    return(
   <div className="Product">
    <p>{title}</p>
    <p>{description[idx]}</p>
    <Price oldprice={oldPrice[idx]} newprice={newPrice[idx]}/>
    

   </div>
    )
}
export default Product;