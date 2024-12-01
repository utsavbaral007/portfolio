export function postsApi() {
  return {
    getPostApi: `${process.env.NEXT_PUBLIC_API_URL}/api/blog`,
    createPostApi: `${process.env.NEXT_PUBLIC_API_URL}/api/blog`,
  };
}
