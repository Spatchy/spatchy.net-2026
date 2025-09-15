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
      <div class="monochrome-bg w-1/3 min-h-screen">
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
          <Button color="white" ghost>View my projects</Button>
        </div>
      </div>
    </div>
  );
});
