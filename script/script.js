
// console.log('script added');


// create loadCategories

const loadCategories = ()=>{
     fetch ('https://openapi.programming-hero.com/api/peddy/categories')
    .then(res => res.json())
    .then (data => displayCategories(data.categories))
    .catch(error => console.log(error))


}

// create displayCategories
const displayCategories = (categories)=>{
    // button container
    const categoryContainer = document.getElementById('categoryContainer');


    categories.forEach((item)=>{
        // console.log(item);

        // create a button

        const buttonContainer = document.createElement("div");
        buttonContainer.innerHTML=`
        
        <button id="btn-${item.id}" class="flex justify-center items-center gap-4 font-bold text-2xl text-[#131313] inter-secondfont w-full btn-default category-btn"> <img src="${item.category_icon}" />
        ${item.category}</button>
       
        `;


        // add button to category container
        categoryContainer.append(buttonContainer);
    })
}





loadCategories()