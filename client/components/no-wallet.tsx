import { ConnectKitButton } from "connectkit";
import localFont from "next/font/local";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

const fiftiesFont = localFont({ src: "../lib/fonts/fifties.ttf" });

export default function NoWallet() {
  return (
    <div className="h-[calc(100vh-180px)] md:h-[calc(100vh-150px)] grid place-items-center">
      <Card className="text-center w-full h-full flex flex-col justify-center items-center border-none">
        <CardHeader>
          <CardTitle>Please, connect your wallet</CardTitle>
          <CardDescription>Please connect your wallet.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center flex-row items-center space-x-2">
            <Image
              src="/logo.png"
              width={120}
              height={120}
              className="w-16 md:w-[120px] h-16 md:h-[120px]"
              alt="Logo"
            />
            <span
              className={`${fiftiesFont.className} text-3xl sm:text-5xl font-bold`}
            >
              Stimpack Hooks
            </span>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full flex justify-center items-center">
            <ConnectKitButton />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
