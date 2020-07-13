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
const deleteButtons = document.querySelectorAll('.btn-delete');
const postForm = document.getElementById('post-form');

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

// create the new post element
const createNewPost = () => { 
    let date = new Date();
    const myHTML = `
    <div class ='card'>
        <img class="card-img-top" src = "${newPostImg.value}"
        alt="Card image cap">
        <div class = "card-body">
            <h5 class ="card-title">${newPostTitle.value} by <small>${newPostAuthor.value}</small></h5>
            <p class = "card-text">${newPostContent.value}</p>
            <button type="button" class="btn btn-sm btn-light btn-delete">Delete entry</button>
        </div>
        <div class="card-footer text-muted">${date.toLocaleDateString()}</div>
    </div>`;
    return myHTML;
};

//Handle input/ check the post content
newPostContent.addEventListener('blur', event => {
    words = newPostContent.value.split(' ').length;
    if (words < 20) {
        newPostContent.classList.add('is-invalid');
        errorMsg.classList.remove('hidden');
} else {
    newPostContent.classList.remove('is-invalid');
    errorMsg.classList.add('hidden');
}
});

// add event listner to the submit btn
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    topListCard.insertAdjacentHTML("beforebegin", createNewPost());
    postForm.reset();
});

// Delete button
const handleDeleteBtn = (e) => {
if (e.target.classList.contains('btn-delete')) {
    const deleteBtn = e.target;
    deleteBtn.closest('.card').remove();
}
}
// event delegation
 document.addEventListener('click', handleDeleteBtn);