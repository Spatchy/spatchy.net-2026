import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import { Button } from "../components/Button.tsx";

export default define.page(function Home(ctx) {
  console.log("Shared value " + ctx.state.shared);

  return (
    <div class="min-h-screen flex flex-row">
      <Head>
        <title>Spatchy</title>
      </Head>
      <div class="monochrome-bg w-1/3 min-h-screen flex items-center justify-center">
        <div className="flex flex-col">
          <img
            src="/all-rights-reserved/profile-photo-500x500.png"
            alt="Spatchy profile picture"
            className="rounded-full max-w-[90%] mx-auto mb-7"
          />
          <Button tailwindColor="white" ghost>Youtube</Button>
          <Button tailwindColor="white" ghost>Github</Button>
          <Button tailwindColor="white" ghost>Printables</Button>
          <Button tailwindColor="white" ghost>Email</Button>
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
            I am an open source and right to repair advocate, full stack developer, and creator.
          </p>
          <Button tailwindColor="white" ghost>View my projects</Button>
        </div>
      </div>
    </div>
  );
});
