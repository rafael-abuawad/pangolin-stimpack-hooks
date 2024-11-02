import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export default function HookCard({
  title,
  image,
  description,
  disabled,
}: {
  title: string;
  image: string;
  description: string;
  disabled: boolean;
}) {
  return (
    <Card
      className={`relative w-full select-none transition-all hover:scale-105  ${disabled ? "cursor-not-allowed hover:grayscale " : "cursor-pointer"}`}
    >
      {/* Card Border */}
      <CardContent className="relative rounded-lg bg-gradient-to-b from-stone-900 to-stone-800 p-[12px] shadow-xl">
        {/* Inner Card Content */}
        <div className="relative rounded-[12px] bg-gradient-to-b from-stone-800 to-stone-900 p-2">
          {/* Notice */}
          {disabled && (
            <div className="absolute -left-2 -top-2 flex items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white shadow-lg z-50 p-2">
              Coming soon...
            </div>
          )}

          {/* Card Art */}
          <div className="relative mb-2 h-96 overflow-hidden rounded-lg">
            <img className="object-cover h-96 w-full lg:max-w-96" src={image} />
          </div>

          {/* Card Title Banner */}
          <div className="relative mb-2">
            <div className="absolute inset-x-0 h-12 bg-gradient-to-r from-amber-900/80 via-amber-800/80 to-amber-900/80 blur-sm" />
            <div className="relative flex items-center justify-center py-2">
              <div className="h-1 w-1 rounded-full bg-gray-300" />{" "}
              {/* Rarity Gem */}
              <h2 className="mx-2 text-xl font-bold text-amber-100">{title}</h2>
              <div className="h-1 w-1 rounded-full bg-gray-300" />{" "}
              {/* Rarity Gem */}
            </div>
          </div>

          {/* Card Text */}
          <div className="min-h-[100px] p-4 rounded bg-stone-700/50 text-center text-sm text-stone-200">
            {description}
          </div>

          {/* Card Type */}
          <div className="mt-2 text-center text-sm font-semibold text-stone-400">
            <Button variant="ghost" className="w-full" disabled={disabled}>
              Deploy
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
