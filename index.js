const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 0
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 0
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 0
    }
]

// AVATARS

let profilePic1 = document.getElementById("first-avatar")
profilePic1.src = posts[0].avatar

let profilePic2 = document.getElementById("second-avatar")
profilePic2.src = posts[1].avatar

let profilePic3 = document.getElementById("third-avatar")
profilePic3.src = posts[2].avatar

// POSTS

let post1 = document.getElementById("post-1")
post1.src = posts[0].post

let post2 = document.getElementById("post-2")
post2.src = posts[1].post

let post3 = document.getElementById("post-3")
post3.src = posts[2].post

// LIKES

let likesP1 = document.getElementById("likes-1")
likesP1.textContent = `${posts[0].likes} likes`

let likesP2 = document.getElementById("likes-2")
likesP2.textContent = `${posts[1].likes} likes`

let likesP3 = document.getElementById("likes-3")
likesP3.textContent = `${posts[2].likes} likes`

// EVENT LISTENERS

post1.addEventListener("dblclick", function() {
  posts[0].likes += 1
  likesP1.textContent = `${posts[0].likes} likes`
});

post2.addEventListener("dblclick", function() {
  posts[1].likes += 1
  likesP2.textContent = `${posts[1].likes} likes`
});

post3.addEventListener("dblclick", function() {
  posts[2].likes += 1
  likesP3.textContent = `${posts[2].likes} likes`
});