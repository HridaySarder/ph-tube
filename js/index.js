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
    // handleLoadVideos(category.categoryId)
  });
  console.log(data.data);
};
const handleLoadVideos = async (categoryId) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );
  const data = await response.json();
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = ""
  data.data.forEach((videos) => {
    console.log(videos);
  const div = document.createElement('div');
  div.innerHTML = `
  <div class="card w-72 h-96 bg-base-100 shadow-xl">
        <figure><img src=${videos?.thumbnail} /></figure>
        <div class="card-body">
        <div class="flex justify-center gap-4">
        <div class="w-14 h-14 rounded-full overflow-hidden">
        <img src="${videos?.authors[0]?.profile_picture}" class="w-full h-full object-cover"/>
                  </div>

          <h2 class="card-title">
            ${videos?.title}
            </div>
          </h2>
          <div class="flex">
          <p>${videos?.authors[0]?.profile_name}</p>
          <p>${videos?.authors[0]?.verified?"True":"False"}</p>
          </div>
          <p>${videos?.others?.views} views</p>
          <div class="card-actions justify-end">

        </div>
      </div>
  `
  cardContainer.appendChild(div);
});
console.log(data);
}
handleCategory();
handleLoadVideos("1000");
