export default function Price({oldprice,newprice}){
    let styles={
        backgroundColor:"#e0c367",
        height:"50px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px"
    }
    return(
    <div style={styles}>
    <span style={{textDecorationLine:"line-through"}}>{oldprice}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <span style={{fontWeight:"bold"}}>{newprice}</span>
    </div>
    )

}
