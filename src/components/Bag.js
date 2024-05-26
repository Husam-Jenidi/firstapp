function Bag (props){
    const bag ={
        padding:"10px",
        border:"2px solid gray",
        background:"#fff",
        margin:"20px 10px"
    }
    return (
        <div style={bag}>
            {props.children}
        </div>
    )

}

export default Bag