import { Input } from "@/components/ui/input";
import StartVerificationWrapper from "../StartVerificationWrapper";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const SendEmail = () => {
  return (
    <StartVerificationWrapper>
      <div className="bg-[#1D1A23] p-8 rounded-md max-w-lg flex flex-col gap-8">
        <Label className="font-bold text-4xl">
          Put the email of the person you want to verify
        </Label>
        <Label className="text-base font-medium text-slate-500">
          Please put a email that you have a access
        </Label>
        <div className="flex flex-col md:flex-row gap-4">
          <Input
            className="w-full md:w-3/4 bg-[#363140] border-none text-white"
            placeholder="Email"
          />
          <Button className="w-full md:w-1/4 bg-button-gradient">
            Send Email
          </Button>
        </div>
      </div>
    </StartVerificationWrapper>
  );
};

export default SendEmail;
