"use client";

import React, { useEffect, useState } from "react";
import { Loader2 } from 'lucide-react';
import { getDepoimentos } from "@/data/depoimentos";

interface Testimonial {
    quote: string;
    name: string;
    title: string;
}


const TestimonialCard = ({ quote, name, title }: Testimonial) => (
  <div className="flex-shrink-0 w-[450px] h-[200px] content-between p-6 m-4 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
    <blockquote className="text-gray-700 italic text-sm">
      "{quote}"
    </blockquote>
    <div className="mt-4 pt-4 border-t border-gray-100">
      <p className="font-semibold text-[#1D4A8C]">{name}</p>
      <p className="text-xs text-gray-500">{title}</p>
    </div>
  </div>
);


export default function InfiniteScrollTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const response = await getDepoimentos();
        const data = Object.values(response.data ?? {});
        console.log(data)
        console.log(response)
        const mappedData = data.map((item: any) => ({
            quote: item.quote,
            name: item.name,
            title: item.tittle,
        }));

        setTestimonials([...mappedData, ...mappedData]);

      } catch (err) {
        console.error("Erro na busca de depoimentos:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTestimonials();
  }, []);

  if (isLoading) {
    return (
      <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-black">
        <Loader2 className="h-8 w-8 animate-spin text-[#1D4A8C]" />
      </div>
    );
  }

  if (testimonials.length === 0) {
    return (
      <div className="h-64 flex items-center justify-center text-gray-500">
        Nenhum depoimento encontrado.
      </div>
    );
  }

  return (
    <section id="depoimentos" className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen justify-center flex flex-col">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-[#1D4A8C] dark:text-white">
            O que nossos clientes dizem
        </h2>

        <div className="w-fullinline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
                  <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
            <div className="flex animate-infinite-scroll">
                {testimonials.map((item, index) => (
                    <TestimonialCard key={index} {...item} />
                ))}
            </div>

            <div className="flex animate-infinite-scroll">
                {testimonials.map((item, index) => (
                    <TestimonialCard key={`copy-${index}`} {...item} />
                ))}
            </div>
            </div>
        </div>
    </section>
  );
}
