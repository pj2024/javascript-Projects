const search = () =>{
    const searchBox =document.getElementById("search-item").value.toUpperCase();
    const storedItems = document.getElementById("product-list");
    const product = document.querySelectorAll(".items");
    const productName = storedItems.getElementsByTagName("h2");


    for (let index = 0; index < productName.length; index++) {
        let match =product[index].getElementsByTagName("h2")[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchBox) > -1){
                product[index].style.display = "";
            }else{
                product[index].style.display = "none";
            }
        }
        
    }
}
