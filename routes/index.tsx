import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import LinkPanel from "../islands/LinkPanel.tsx";
import DynamicContainer from "../islands/DynamicContainer.tsx";

export default define.page(function Home(_ctx) {
  return (
    <div class="min-h-screen flex flex-row">
      <Head>
        <title>Spatchy</title>
      </Head>
      <div class="md:w-1/3 w-1/6 h-screen hidden md:flex items-center justify-center bg-spatchy-monochrome">
        <div className="flex flex-col max-w-[90%] mx-auto items-center justify-center">
          <img
            src="/all-rights-reserved/profile-photo-500x500.png"
            alt="Spatchy profile picture"
            className="rounded-full md:mb-20"
          />
          <LinkPanel />
        </div>
      </div>
      <DynamicContainer />
    </div>
  );
});
