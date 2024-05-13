"use strict";
/*
    Định nghĩa lớp User có các thuộc tính id, posts là mảng các bài đăng của người dùng, folowers là mảng các người dùng đang theo dõi.
    Định nghĩa lớp Post có các thuộc tính id, likes là mảng các người dùng đã thích bài đăng, comments là mảng các bình luận trong bài đăng, userId là id người đăng, content là nội dung bài đăng.
    Định nghĩa lớp comment có các thuộc tính id, userId, content và replies là mảng các phản hồi của
    Lớp User có phương thức createPost để đăng bài, phương thức comment để thêm bình luận vào bài viết hoặc phản hồi một bình luận khác,
    phương thức follow để theo dõi user khác, phương thức likePost để thích bài đăng và phương thức viewFeed để xem các bài đăng của người dùng đang được theo dõi.
    Lớp Post có phương thức addLike, mỗi khi người dùng likePost thì đẩy thông tin đó vào mảng likes. Lớp có phương thức addComment, mỗi khi người dùng comment thì đẩy comment đó vào mảng comments.
*/
class User {
    constructor(id) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }
    createPost(content) {
        const post = new Post(this.id, content);
        this.posts.push(post);
    }
    comment(postId, content, userId) {
        const post = this.posts.find((post) => post.id === postId);
        if (post) {
            const comment = new Comment(userId, content);
            post.comments.push(comment);
        }
    }
    follow(user) {
        this.followers.push(user);
    }
    likePost(postId) {
        const post = this.posts.find((post) => post.id === postId);
        if (post) {
            post.likes.push(this.id);
        }
    }
    viewFeed() {
        this.followers.forEach((follower) => {
            follower.posts.forEach((post), to, {
                console, : .log(`Post by ${follower.id}: ${post.content}`)
            });
        });
    }
}
class Post {
    constructor(userId, content) {
        this.id = Date.now();
        this.likes = [];
        this.comments = [];
        this.userId = userId;
        this.content = content;
    }
    addLike(userId) {
        this.likes.push(userId);
    }
    addComment(comment) {
        this.comments.push(comment);
    }
}
class Comment {
    constructor(userId, content) {
        this.id = Date.now();
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }
}
const user1 = new User(1);
const user2 = new User(2);
user1.createPost("Hello, world!");
user1.likePost(1);
user1.comment(1, "Nice post!", 2);
user2.viewFeed();
