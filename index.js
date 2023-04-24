const db = require('./db');
const { createUser, readUsers, readUser, updateUser, deleteUser } = require('./user');
const { createPost, readPosts, readPost, updatePost, deletePost } = require('./post');

// Create a user
createUser('John Doe', 'johndoe@example.com')
  .then((user) => {
    console.log('Created user:', user);
  })
  .catch((error) => {
    console.error(error);
  });

// Read all users
readUsers()
  .then((users) => {
    console.log('Read all users:', users);
  })
  .catch((error) => {
    console.error(error);
  });

// Read a user by id
readUser('60981d318a1f5d001f5d5b18')
  .then((user) => {
    console.log('Read user by id:', user);
  })
  .catch((error) => {
    console.error(error);
  });

// Update a user
updateUser('60981d318a1f5d001f5d5b18', 'Jane Doe', 'janedoe@example.com')
  .then((user) => {
    console.log('Updated user:', user);
  })
  .catch((error) => {
    console.error(error);
  });

// Delete a user
deleteUser('60981d318a1f5d001f5d5b18')
  .then((user) => {
    console.log('Deleted user:', user);
  })
  .catch((error) => {
    console.error(error);
  });

// Create a post
createPost('My first post', 'Lorem ipsum dolor sit amet', '60981d318a1f5d001f5d5b19')
  .then((post) => {
    console.log('Created post:', post);
  })
  .catch((error) => {
    console.error(error);
  });

// Read all posts
readPosts()
  .then((posts) => {
    console.log('Read all posts:', posts);
  })
  .catch((error) => {
    console.error(error);
  });

// Read a post by id
readPost('60981d318a1f5d001f5d5b1a')
  .then((post) => {
    console.log('Read post by id:', post);
  })
  .catch((error) => {
    console.error(error);
  });

// Update a post
updatePost('60981d318a1f5d001f5d5b1a', 'My updated post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit')
  .then((post) => {
    console.log('Updated post:', post);
  })
  .catch((error) => {
    console.error(error);
  });

// Delete a post
deletePost('60981d318a1f5d001f5d5b1a')
  .then((post) => {
    console.log('Deleted post:', post);
  })
  .catch((error) => {
    console.error(error);
  });
