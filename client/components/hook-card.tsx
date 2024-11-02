"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { FactoryConfig } from "@/lib/contracts/factory.contract";
import { Tag } from "@/lib/types/tag.enum";

export function DeployButton({
  disabled,
  description,
  tag
}: {
  disabled: boolean;
  description: string;
  tag: Tag
}) {
  const [isExistingToken, setIsExistingToken] = useState(false);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [addr, setAddr] = useState("");
  const { data: hash, isPending, writeContract } = useWriteContract();

  async function submit() {
    if (isExistingToken) {
      await submitHookExisting();
    } else {
      await submitHookNew();
    }
  }

  async function submitHookNew() {
    if (name.trim() === "" || symbol.trim() === "") {
      return;
    }

    writeContract({
      ...FactoryConfig,
      functionName: "createHookNew",
      args: [name, symbol, tag],
    });
  }

  async function submitHookExisting() {
    if (addr.trim() === "" || !addr.startsWith("0x")) {
      return;
    }

    writeContract({
      ...FactoryConfig,
      functionName: "createHookExisting",
      args: [addr as `0x${string}`, tag],
    });
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-full" disabled={disabled}>
          Deploy
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Deploy Hook</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-5 items-center gap-4">
            <Label htmlFor="username" className="text-right col-span-2">
              Existing token
            </Label>
            <Checkbox
              onClick={() => setIsExistingToken(!isExistingToken)}
              checked={isExistingToken}
            />
          </div>
          {isExistingToken && (
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="tokenAddress" className="text-right col-span-2">
                Token address
              </Label>
              <Input
                id="tokenAddress"
                placeholder="0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7"
                className="col-span-3"
                onChange={(e) => setAddr(e.target.value)}
                value={addr}
              />
            </div>
          )}

          {!isExistingToken && (
            <>
              <div className="grid grid-cols-5 items-center gap-4">
                <Label htmlFor="name" className="text-right col-span-2">
                  Token Name
                </Label>
                <Input
                  id="name"
                  placeholder="Hook Token"
                  className="col-span-3"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="grid grid-cols-5 items-center gap-4">
                <Label htmlFor="symbol" className="text-right col-span-2">
                  Token Symbol
                </Label>
                <Input
                  id="symbol"
                  placeholder="TKN"
                  className="col-span-3"
                  onChange={(e) => setSymbol(e.target.value)}
                  value={symbol}
                  maxLength={5}
                />
              </div>
            </>
          )}
        </div>
        <DialogFooter>
          <Button onClick={() => submit()} disabled={isPending}>
            {isPending ? "Confirming..." : "Deploy"}{" "}
          </Button>
          {isConfirming && <div>Waiting for confirmation...</div>}
          {isConfirmed && <div>Transaction confirmed.</div>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function HookCard({
  title,
  image,
  description,
  disabled,
  tag
}: {
  title: string;
  image: string;
  description: string;
  disabled: boolean;
  tag: Tag
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
            <Image
              className="object-cover h-96 w-full lg:max-w-96"
              src={image}
              width={384}
              height={384}
              alt="card artwork"
            />
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
            <DeployButton tag={tag} description={description} disabled={disabled} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
