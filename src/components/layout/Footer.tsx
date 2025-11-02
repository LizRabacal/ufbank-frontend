import Image from 'next/image';
import Logo from '@/assets/logo.png'; // Caminho do seu logo
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react'; // Ícones de redes sociais

// Estrutura de links para o footer
const footerLinks = [
  {
    title: "Conta",
    links: [
      { name: "Abrir Conta", href: "/cadastro" },
      { name: "Cartões", href: "/cartoes" },
      { name: "Cashback", href: "/cashback" },
      { name: "Investimentos", href: "/investimentos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { name: "Sobre Nós", href: "/sobre" },
      { name: "Blog", href: "/blog" },
      { name: "Carreiras", href: "/carreiras" },
      { name: "Imprensa", href: "/imprensa" },
    ],
  },
  {
    title: "Ajuda & Legal",
    links: [
      { name: "FAQ", href: "/faq" },
      { name: "Termos de Uso", href: "/termos" },
      { name: "Política de Privacidade", href: "/privacidade" },
      { name: "Suporte 24h", href: "/suporte" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1D4A8C] dark:bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        
        {/* Top Section: Logo, Descrição e Redes Sociais */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-white/10 pb-10">
          
          {/* Coluna 1: Logo e Descrição */}
          <div className="md:col-span-2 space-y-4">
            <Image alt="UFBank Logo" src={Logo} width={120} height={120} />
            <p className="text-sm text-gray-300 max-w-sm">
              UFBank: Seu futuro financeiro é construído com segurança, tecnologia e a transparência que você merece.
            </p>
          </div>
          
          {/* Colunas 2, 3 e 4: Links de Navegação */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-bold text-lg text-[#74B72D] dark:text-brand-green">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-sm text-gray-300 hover:text-white transition duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Section: Copyright e Ícones */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm text-gray-400">
          
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} UFBank Banco Digital. Todos os direitos reservados.
          </p>
          
          {/* Redes Sociais */}
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-[#74B72D] transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#74B72D] transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#74B72D] transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Email" className="hover:text-[#74B72D] transition">
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}