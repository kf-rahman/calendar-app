import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import Head from "next/head";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";

export default async function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  noStore();
  const session = await getServerAuthSession();


  return (
      <main>
      <Head>
       <title>test</title>
      </Head>
        <div className="flex h-screen items-center bg-cover bg-center"
        style={{ backgroundImage: `url(/background.jpg)` }}>

          <div className="m-auto mt-64 flex flex-col justify-center gap-5 text-center align-middle">
          <h1 className="font-poppins bg-gradient-to-br from-white to-slate-600 box-decoration-slice bg-clip-text p-2 text-7xl font-extrabold text-transparent">
           Calendly
          </h1>
          <h2 className="font-montserrat text-5xl text-neutral-100">
            Your AI Calendar Automation Tool
          </h2>
            <p className="text-center text-2xl text-white">
              {session && <span>Logged in as {session.user?.name}</span>}
            </p>
   <Link
       /* update css for the login button, needs to pop more */
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
              {session ? "Sign out" : "Sign in"}
            </Link>
<Link
       /* update css for the login button, needs to pop more */
              href={session ?'/uploads': '/'}

              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
    {session ? "Upload Course Outline" : "You need to sign in to upload course outline"}

            </Link>

        </div>


        </div>


</main>
  );
}


