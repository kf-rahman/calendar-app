
import Head from "next/head";
export default function  Upload (){

    return (
    <>
      <Head>
        <title>Upload</title>
      </Head>
      <div
        style={{ backgroundImage: `url(/background.jpg)` }}>


      <section className="mt-32 flex flex-col justify-center gap-10">
        <h1 className="font-poppins text-center text-4xl font-bold text-neutral-50">
          Paste the contents of your  outline
        </h1>
        <form
          className="flex w-full flex-col justify-center gap-5"
        >
          <textarea
            cols={30}
            rows={10}
            className="font-montserrat mx-auto rounded-sm border border-slate-800 bg-gray-100 p-5 tracking-wide md:w-1/2"
            placeholder="Paste"

          ></textarea>
          <button
            type="submit"
            className="font-poppins mx-auto w-2/3 whitespace-pre-line rounded-sm bg-gradient-to-br from-gray-700 to-gray-800 py-3 text-xl font-bold text-gray-50 md:w-1/2"
          >
            Enter
          </button>
        </form>
      </section>
      </div>
    </>
  );
};