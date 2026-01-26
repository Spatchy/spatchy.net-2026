import { useSignal } from "@preact/signals";
import Button from "../components/Button.tsx";
import Feed from "./Feed.tsx";

export default function DynamicContainer() {
  const showFeed = useSignal<boolean>(false);

  return (
    showFeed.value
      ? <Feed />
      : (
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
            <Button
              tailwindColor="white"
              ghost
              onClick={() => {
                showFeed.value = true;
              }}
            >
              View my projects
            </Button>
          </div>
        </div>
      )
  );
}
