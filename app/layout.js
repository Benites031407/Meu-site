// Importa o arquivo global de estilos CSS
import './globals.css'

// Importa as fontes Inter e Poppins do Google Fonts via Next.js
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'

// Importa os componentes de layout da página
import Header from './Header'
import Footer from './Footer'

// Configuração da fonte Poppins com pesos definidos (400 a 700) e suporte ao conjunto de caracteres latino
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

// Configuração da fonte Inter (sem especificar peso, padrão é 400)
const inter = Inter({ subsets: ['latin'] })

// Metadados do site, que são usados pelo Next.js para SEO e informações da página
export const metadata = {
  title: 'Meu site - Criado por Pedro Benites',
  description: 'Mockup de um site de portfólio criado com Next.js',
}

// Componente raiz do layout do app. Ele envolve todas as páginas com HTML padrão e estrutura global
export default function RootLayout({ children }) {
  return (
    // Define a linguagem do site como inglês
    <html lang="en">
      
      {/* Aplica a fonte Poppins ao corpo da aplicação */}
      <body className={poppins.className}>
        
        {/* Componente de cabeçalho fixo da aplicação */}
        <Header />

        {/* Área principal do site onde o conteúdo da rota atual será exibido */}
        <main>
          {children}
        </main>

        {/* Rodapé da aplicação */}
        <Footer />
      </body>
    </html>
  )
}
