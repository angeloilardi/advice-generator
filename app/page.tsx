"use client";

import Spinner from "@/components/Spinner";
import Image from "next/image";
import { useEffect, useState } from "react";

interface AdviceData {
  id: number;
  advice: string;
}

export default function Home() {
  // state variables

  const [advice, setAdvice] = useState<AdviceData | null>(null);

  // function that fetches the advice

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    setAdvice(data.slip);
  }

  // fetches new advice at loading

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-dark-blue">
      <div className="w-[340px] min-h-max md:w-[540px] bg-dark-grayish-blue rounded-lg flex flex-col relative items-center">
        {advice ? (
          <>
            <h1 className="text-neon-green text-xs tracking-[0.2rem] font-semibold mt-10">
              ADVICE #{advice.id}
            </h1>
            <p className="text-light-cyan text-[28px] p-5 space-y-6 text-center font-semibold h-max">
              &ldquo;{advice.advice}&rdquo;
            </p>
            <Image
              src="/images/pattern-divider-mobile.svg"
              width={295}
              height={16}
              alt=""
              className="p-5 mb-9 md:hidden"
            />
            <Image
              src="/images/pattern-divider-desktop.svg"
              width={444}
              height={16}
              alt=""
              className="p-5 mb-9 hidden md:block"
            />
          </>
        ) : (
          <Spinner />
        )}
        <button
          className="w-[60px] h-[60px] bg-neon-green rounded-full flex justify-center items-center absolute -bottom-8 hover:shadow-[2px_2px_24px_1px_hsl(150,100%,66%)]"
          onClick={getAdvice}
        >
          <span className="sr-only">Roll the dice</span>
          <Image src="/images/icon-dice.svg" alt="" width={24} height={24} />
        </button>
      </div>
    </main>
  );
}
