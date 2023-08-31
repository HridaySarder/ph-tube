const handleCategory = async () => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/categories`
  );
  const data = await response.json();

  const btnContainer = document.getElementById("btn-container");
  data.data.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <button onclick="handleLoadVideos('${category.category_id}')" class="btn">${category.category}</button>
    `;
    btnContainer.appendChild(div);
  });
  console.log(data.data);
};
const handleLoadVideos = async (categoryId) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );
  const data = await response.json();
  const cardContainer = document.getElementById('card-container');
  data.data.forEach((videos) => {
    console.log(videos);
  const div = document.createElement('div');
  div.innerHTML = `
  <div class="card bg-base-100 shadow-xl">
        <figure><img src=${videos?.thumbnail} /></figure>
        <div class="card-body">
        <div class="flex justify-center gap-4">
        <div class="w-14 rounded">
        <img src=${videos?.authors[0]?.profile_picture} />
                  </div>
        
          <h2 class="card-title">
            ${videos?.title}
            </div>
          </h2>
          <p>${videos?.authors[0]?.profile_name}</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div> 
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
  `
  cardContainer.appendChild(div);
});
console.log(data);
}
handleCategory();
