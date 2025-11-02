// src/components/FaqItem.tsx
'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react'; // Assumindo que você usa lucide-react ou um ícone similar

interface FaqItemProps {
  pergunta: string;
  resposta: string;
}

export function FaqItem({ pergunta, resposta }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border border-gray-200 bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Cabeçalho Clicável */}
      <button
        className="flex justify-between items-center w-full p-5 text-left font-semibold text-lg text-gray-800 hover:bg-gray-50 transition duration-150"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span>{pergunta}</span>
        <ChevronDown 
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-[#74B72D]' : 'text-[#1D4A8C]'
          }`} 
        />
      </button>

      {/* Conteúdo da Resposta */}
      {isOpen && (
        <div className="p-5 pt-0">
          <div className="border-t border-gray-100 mt-2 pt-4 text-gray-600">
            {resposta}
          </div>
        </div>
      )}
    </div>
  );
}