import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LoginComponent from "./LoginComponent";

const Login = async () => {
  const session = await getServerSession();
  if (session) {
    return redirect("/blog");
  }

  return <LoginComponent />;
};

export default Login;
