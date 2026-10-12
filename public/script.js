function createPost() {

    const postText =
        document.getElementById("postText").value;

    if (postText.trim() === "") {

        alert("Please write something!");

        return;
    }


    const posts =
        document.getElementById("posts");


    const post =
        document.createElement("div");


    post.className = "post";


    post.innerHTML = `
        <h3>Radhika</h3>

        <p>${postText}</p>

        <button onclick="likePost(this)">
            ❤️ Like <span>0</span>
        </button>

        <br><br>

        <input
            type="text"
            placeholder="Write a comment...">

        <button onclick="addComment(this)">
            Comment
        </button>

        <div class="comments"></div>
    `;


    posts.prepend(post);


    document.getElementById("postText").value = "";
}



function likePost(button) {

    const count =
        button.querySelector("span");


    let likes =
        parseInt(count.innerText);


    likes++;


    count.innerText = likes;
}



function addComment(button) {

    const input =
        button.previousElementSibling;


    const commentText =
        input.value;


    if (commentText.trim() === "") {

        alert("Please write a comment!");

        return;
    }


    const comments =
        button.parentElement.querySelector(".comments");


    const comment =
        document.createElement("p");


    comment.innerText =
        "💬 " + commentText;


    comments.appendChild(comment);


    input.value = "";
}