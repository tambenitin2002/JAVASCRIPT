async function x(){
    let data=await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    console.log(data);
    let finalData=await data.json()
    console.log(finalData);
    let result=await finalData.categories
    console.log(result);
    result.map((item)=>{
            let body = document.body;
            let section=document.createElement('section');
            section.innerHTML+=`<div>
            <img src=${item.strCategoryThumb} height="200px" width=200px">
            <p>${item.strCategory}</p>
            <p>${item.strCategoryDescription}</p>
            <button>Add Cart</button>
            </div>`
            body.appendChild(section)
    })
}
// x()