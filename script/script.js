
// console.log('script added');


// create loadCategories

const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error))


}

// create displayCategories
const displayCategories = (categories) => {
    // button container
    const categoryContainer = document.getElementById('categoryContainer');


    categories.forEach((item) => {
        // console.log(item.id);

        // create a button

        const buttonContainer = document.createElement("div");
        buttonContainer.innerHTML = `
        
        <button id="btn-${item.id}" onclick="loadCategoriesPet()" class="flex justify-center items-center gap-4 font-bold text-2xl text-[#131313] inter-secondfont w-full btn-default "> <img src="${item.category_icon}" />
        ${item.category}</button>
       
        `;


        // add button to category container
        categoryContainer.append(buttonContainer);
    })
}
// remove active class in button
const removeActiveClass = () => {
    const buttons = document.getElementsByClassName("btn-default");
    for (let btn of buttons) {
        btn.classList.remove('btn-active');
        btn.classList.add("btn-default")
    }
}

// create loadPetsCard
const loadPetsCard = async () => {
    // fetch the data
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`);
    let data = await res.json();
    // console.log(data.pets);
    displaypetsCard(data.pets)
}

// create displaypetsCard

const displaypetsCard = (pets) => {
    // cardContainer
    const cardContainer = document.getElementById("CardContainer");
    // slidebar
    const slideBarContainer = document.getElementById("asideCardContainer");
    // cardContainer.innerHTML = '';


    // console.log(pets);

    pets.forEach((pet) => {
        // console.log(pet);

        // slidebar added

        const slideBar = document.createElement("section");
        // slideBar.classList = "h-[250px]"
        slideBar.classList = "card"
        slideBar.innerHTML = `
            <div class=" card px-4 py-4 shadow-sm">
                
                <img
                src="${pet.image}"
                alt="Shoes"
                class="rounded-xl w-full h-full object-cover" />
           
            </div>
        
        `;
        slideBarContainer.append(slideBar);


        // all pets card section added
        const card = document.createElement("div");
        card.classList = "card1"
        card.innerHTML = `
        
        <div class="card1 bg-base-100 shadow-sm ">

            
            <figure class="px-4 py-4">
                <img
                src="${pet.image}"
                alt="Shoes"
                class="rounded-xl w-full h-full object-cover" />
            </figure>

            <div class="card-body ">

                <h2 class="card-title font-bold text-2xl text-[#131313]">${pet.pet_name}</h2> 

               
                
                <p class="flex items-center gap-2 text-[rgba(19,19,19,.7)] font-normal text-base"><img class="w-6 " src="https://img.icons8.com/?size=50&id=7911&format=png"/> Breed: ${pet.breed}</p>

                <p class="flex items-center gap-2 text-[rgba(19,19,19,.7)] font-normal text-base"><img class="w-6" src="https://img.icons8.com/?size=50&id=60611&format=png"/> Birth: ${pet.date_of_birth}</p>

                <p class="flex items-center gap-2 text-[rgba(19,19,19,.7)] font-normal text-base"><img class="w-6" src="https://img.icons8.com/?size=50&id=11780&format=png"/> Gender: ${pet.gender}</p>

                <p class="flex items-center gap-2 text-[rgba(19,19,19,.7)] font-normal text-base"><img class="w-6" src="https://img.icons8.com/?size=24&id=85843&format=png"/> Price: ${pet.price}$</p>
                
                
                <hr class="border border-[rgba(19,19,19,.1)]" />
                <div class="card-actions w-full mt-4 gap-5">
                <button class=" btn py-[9px] px-[18px] "><img class="w-6" src="https://img.icons8.com/?size=50&id=24816&format=png" /></button>

                <button class="btn text-[#0E7A81] font-bold text-[18px] py-[9px] px-[18px]">Adopt</button>

                <button class="btn text-[#0E7A81] font-bold text-[18px] py-[9px] px-[18px]">Details</button>
                </div>

            </div>
           

</div>


        `;
        cardContainer.append(card)
    })

}


// {
//     "petId": 1,
//     "breed": "Golden Retriever",
//     "category": "Dog",
//     "date_of_birth": "2023-01-15",
//     "price": 1200,
//     "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//     "gender": "Male",
//     "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//     "vaccinated_status": "Fully",
//     "pet_name": "Sunny"
// }


// create loadCategoriesPet
const loadCategoriesPet = (id) => {
    // fetch the data
    fetch(`https://openapi.programming-hero.com/api/peddy/categories?${id}`)

        .then(res => res.json())
        .then(data => {

            // console.log(data.categories)

            // remove all active class
            removeActiveClass();

            // add active class
            const activeBtn = document.getElementById(`btn-default-${id}`);
            activeBtn.classList.add("btn-active");

        })
    // .catch(error => console.log(error));
}



// loadCategoriesPet()
loadCategories()
loadPetsCard()