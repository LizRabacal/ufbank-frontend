"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { Button } from "../ui/button";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export function Text() {
    return (
        <HeroHighlight containerClassName="!min-h-screen " className="bg-transpartent flex w-full !min-h-screen ">
            <div className="w-2/3 flex flex-col p-10 justify-center items-center">
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
                >
                    A Evolução Digital que o seu Dinheiro Merece.
                    Seu futuro financeiro é construído com {" "}
                    <Highlight className="text-black dark:text-white">
                        segurança, controle e transparência.
                    </Highlight>
                </motion.h1>
                <div className=" flex w-full justify-end mt-14">
                    <button className="!cursor-pointer rounded-lg flex justify-between gap-4 items-center px-10 py-4 text-2xl bg-green-500 hover:bg-green-600 font-semibold text-white">
                        Venha fazer parte!
                        <FaArrowRight />
                    </button>

                </div>
            </div>
            <div className="w-1/2 flex flex-col justify-end">
                <Image alt='' width={1000} height={1000} className="" src={"/mulher.png"} />
            </div>


        </HeroHighlight>
    );
}
