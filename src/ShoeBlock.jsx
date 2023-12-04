function ShoeBlock({ shoes, id, image, currentShoe, setCurrentShoe }) {


    const clickedShoe = shoes.filter((each) => {
        return each.id === id

    })

// for some reason, the above filter returns an array of two objects - 
// the first one being the correct shoe object, and the second being basically empty. That's why this
// index 0 is here. Need to figure out why the filter is returning that. 
    function handleClick() {        
        setCurrentShoe(clickedShoe[0])
    }



 return(
    <div className="shoeblock" onClick={handleClick}>
        <img src={image ? image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"}/>
    </div>
 )

}

export default ShoeBlock