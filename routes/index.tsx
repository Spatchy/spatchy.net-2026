import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import { Button } from "../components/Button.tsx";
import { TbBrandGithub, TbBrandYoutube, TbBrandPrintables, TbAt, TbQuestionMark } from "@preact-icons/tb";


export default define.page(function Home(ctx) {
  console.log("Shared value " + ctx.state.shared);

  return (
    <div class="min-h-screen flex flex-row">
      <Head>
        <title>Spatchy</title>
      </Head>
      <div class="monochrome-bg w-1/3 min-h-screen flex items-center justify-center">
        <div className="flex flex-col max-w-[90%] mx-auto">
          <img
            src="/all-rights-reserved/profile-photo-500x500.png"
            alt="Spatchy profile picture"
            className="rounded-full mb-20"
          />
          <div className="flex flex-row justify-center mb-2.5">
            <Button tailwindColor="white" circle ghost>
              <TbBrandYoutube />
            </Button>
            <Button tailwindColor="white" circle ghost>
              <TbBrandGithub />
            </Button>
            <Button tailwindColor="white" circle ghost>
              <TbBrandPrintables />
            </Button>
            <Button tailwindColor="white" circle ghost>
              <TbAt />
            </Button>
            <Button tailwindColor="white" circle ghost>
              <TbQuestionMark />
            </Button>
          </div>
          <p className="flex justify-center text-white">Placeholder</p>
        </div>
      </div>
      <div className="w-2/3 spatchy-gradient flex items-center justify-center">
        <div class="max-w-full mx-8 min-h-screen flex flex-col items-center justify-center">
          <img
            class="my-6 max-w-full"
            src="/all-rights-reserved/wordmark-white.svg"
            alt="The Spatchy logo"
          />
          <p class="my-4 text-white text-lg">
            I am an open source and right to repair advocate, full stack
            developer, and creator.
          </p>
          <Button tailwindColor="white" ghost>View my projects</Button>
        </div>
      </div>
    </div>
  );
});
