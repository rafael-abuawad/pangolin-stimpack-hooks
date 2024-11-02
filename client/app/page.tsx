"use client";
import HookCard from "@/components/hook-card";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ConnectKitButton } from "connectkit";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const cards = [
  {
    title: "Points Hook",
    description:
      "Reward users with points for providing liquidity or making swaps, encouraging more engagement and activity.",
    image: "/images/icons/Engineer_24.png",
    disabled: false,
  },
  {
    title: "Existing Points Hook",
    description:
      "Integrate with an existing points system to reward users. Users are responsible for maintaining the points balance.",
    image: "/images/icons/Engineer_25.png",
    disabled: false,
  },
  {
    title: "Token Hook",
    description:
      "Offer token rewards for liquidity provision or swaps, giving users a tangible incentive to participate.",
    image: "/images/icons/Engineer_8.png",
    disabled: false,
  },
  {
    title: "Existing Token Hook",
    description:
      "Use an existing token or NFT to incentivize users. It's the user’s responsibility to keep the token balance funded.",
    image: "/images/icons/Engineer_11.png",
    disabled: false,
  },
  {
    title: "Dynamic Fees Hook",
    description:
      "Adjust fees dynamically based on market conditions or activity levels, optimizing for liquidity and trading volume.",
    image: "/images/icons/Engineer_16.png",
    disabled: true,
  },
];

export default function Home() {
  return (
    <div className="space-y-6 p-10 pb-16">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center flex-row space-x-3">
          <Avatar className="h-24 w-24 rounded-lg">
            <AvatarImage src="/logo.png" alt="@shadcn" />
            <AvatarFallback>PSH</AvatarFallback>
          </Avatar>
          <hgroup className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">
              Stimpack Hooks
            </h2>
            <h3 className="hidden lg:block text-muted-foreground">
              A set of easy-to-use hooks that encourage people to provide
              liquidity or make swaps, boosting activity 🚀📈.
              <br />
              Rewards can be given as tokens or points, and each hook can be
              launched from a no-code, user-friendly web app.
            </h3>
          </hgroup>
        </div>
        <div className="flex flex-row space-x-2 items-center">
          <ThemeToggle />
          <ConnectKitButton />
        </div>
      </div>
      <Separator className="my-6" />
      <div className="w-full">
        <Tabs defaultValue="hooks" className="w-full">
          <TabsList>
            <TabsTrigger value="hooks">Hooks</TabsTrigger>
            <TabsTrigger value="my-hooks">My Hooks</TabsTrigger>
          </TabsList>
          <TabsContent value="hooks">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 place-items-center">
              {cards.map((card, i) => (
                <HookCard
                  key={i}
                  title={card.title}
                  image={card.image}
                  description={card.description}
                  disabled={card.disabled}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="my-hooks">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 place-items-center">
              {cards
                .filter((_, i) => i % 2 !== 0)
                .map((card, i) => (
                  <HookCard
                    key={i}
                    title={card.title}
                    image={card.image}
                    description={card.description}
                    disabled={card.disabled}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
