import Navbar from "./navbar";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
//import  getServerSession  from "@/lib/auth"
export default async function Nav() {
  const session = await getServerSession(authOptions);
  return <Navbar session={session} />;
}
