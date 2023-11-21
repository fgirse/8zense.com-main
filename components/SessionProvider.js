import { SessionProvider } from "next-auth/react";

function NextAuthProvider ({ children }) {
  return <SessionProvider basePath="/api/auth">
        {children}
     </SessionProvider>;
}