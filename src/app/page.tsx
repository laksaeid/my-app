import { Button } from "@/registry/ui/button";
import { OpenInV0Button } from "../components/open-in-v0-button";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center mt-36 justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      {/* <ModeToggle /> */}

      <div className="relative flex min-h-96 w-2/5 items-center justify-center rounded-lg border">
        <OpenInV0Button
          name="button-demo"
          className="absolute right-1 top-1 h-14 w-20"
        />

        <Button size="lg">button</Button>
      </div>
    </div>
  );
}
