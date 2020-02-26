import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";

function Success() {
  return (
    <>
    <Header/>
    <Layout>
      {/* <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      /> */}
      <section className="flex flex-wrap mx-auto items-center w-10/12 lg:w-2/3 md:w-2/3 sm:w-4/5 h-screen">
        <div className="w-full">
            <h2 className=" text-5xl underline font-bold text-gray-700">
                Grazie per avermi contattato, ci sentiamo presto!
            </h2>
        </div>
        <div className="w-full">
             <h2 className="text-5xl underline font-bold text-gray-700">
                 Grazie per avermi contattato, ci sentiamo presto!
            </h2>
        </div>
            
      </section>
    </Layout>
    </>
  );
}

export default Success;