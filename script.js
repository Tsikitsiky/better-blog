console.log('it works');

// useful elements
const postList = document.getElementById('post-list');
const topListCard = document.querySelector('.card');
const newPostTitle = document.getElementById('postTitle');
const newPostContent = document.querySelector('textarea');
const newPostAuthor = document.querySelector(`[name = "postAuthor"]`);
const newPostImg = document.querySelector(`[name = "postImg"]`);
const submitBtn = document.querySelector('.btn-primary');
const errorMsg = document.getElementById('error-message');
const hideFormBtn = document.getElementById('show-form');
const formCard = document.getElementById('form-card');
const deleteButton = document.querySelectorAll('.btn-delete');

// create the new post element
const createNewPost = () => { 
    let date = Date();
    const myHTML = `
    <div class ='card'>
        <img class="card-img-top" src = "${newPostImg.value}"
        alt="Card image cap">
        <div class = "card-body">
            <h5 class ="card-title">${newPostTitle.value} by ${newPostAuthor.value}</h5>
            <p class = "card-text">${newPostContent.value}</p>
            <button type="button" class="btn btn-sm btn-light btn-delete">Delete entry</button>
        </div>
        <div class="card-footer text-muted">${date}</div>
    </div>`;
    return myHTML;
};

// add event listner to the submit btn
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (event.target.value.split(' ').length < 20) {
            newPostContent.classList.add('is-invalid');
            newPostContent.textContent = `${errorMsg}`;
    };
    topListCard.insertAdjacentHTML("beforebegin", createNewPost());
})

// Hiding/showing the form card
hideFormBtn.addEventListener('click', (event) => {
    if (formCard.classList.contains("hidden")!== true) {
        formCard.classList.add('hidden');
        hideFormBtn.textContent = "Add a post";
    } else {
        formCard.classList.remove('hidden');
        hideFormBtn.textContent = "Hide form";
    };
});

// Delete button

// deleteButton.addEventListener('click', (event) => {
//     event.target.remove();
// });