import { Label } from "@/components/ui/label";
import SeedPhrase from "./seedphrase";

export default function UserLogin() {
  return (
    <div className="flex w-full max-h-screen h-full">
      <div className="bg-[url('/login-bg.png')] bg-center bg-no-repeat bg-cover h-screen w-1/2 hidden lg:flex flex-col items-center justify-center">
        <Label className="text-5xl font-bold leading-normal flex flex-col">
          <span>Get ready</span>
          <span>to view your</span>
          <span>account</span>
        </Label>
      </div>
      <div className="h-screen w-full  items-center justify-center lg:w-1/2 flex flex-col">
        <SeedPhrase />
      </div>
    </div>
  );
}
