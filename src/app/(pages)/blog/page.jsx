import { getServerSession } from "next-auth";
import Blog from "./blog";

const BlogPage = async () => {
  const session = await getServerSession();
  return (
    <>
      <Blog user={session.user} />
    </>
  );
};

export default BlogPage;
