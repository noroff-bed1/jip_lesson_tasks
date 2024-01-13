const { fetchData } = require('./fetch-data');

async function fetchAndProcessAllData() {
  try {
    const [posts, comments, users] = await Promise.all([
      fetchData('http://jip.restapi.co.za/posts'),
      fetchData('http://jip.restapi.co.za/comments'),
      fetchData('http://jip.restapi.co.za/users'),
    ]);

    const usersMap = new Map(users.map((user) => [user.id, user]));
    const commentsMap = new Map(
      comments.map((comment) => [comment.postId, []]),
    );
    comments.forEach((comment) =>
      commentsMap.get(comment.postId).push(comment),
    );

    const aggregatedData = posts.map((post) => ({
      ...post,
      user: usersMap.get(post.userId),
      comments: commentsMap.get(post.id) || [],
    }));
    console.log('aggregatedData', aggregatedData);
    return aggregatedData;
  } catch (err) {
    console.error('Error in data aggregation:', err);
    throw err;
  }
}

module.exports = { fetchAndProcessAllData };
