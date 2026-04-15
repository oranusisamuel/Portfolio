import React from 'react'
import Button from '../Components/Button'
import { Menu, X } from 'lucide-react'

const navLinks = [
  {href: "#about", label: "About"},
  {href: "#experience", label: "Experience"},
  {href: "#projects", label: "Projects"},
  {href: "#contact", label: "Contact"},
]

const Navbar = () => {
const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
const closeMobileMenu = () => setIsMobileMenuOpen(false);
const [isScrolled, setIsScrolled] = React.useState(false);

React.useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <header className={`fixed top-0 left-0 right-0 py-5 z-50 transition-all duration-500 ${isScrolled ? 'glass-strong py-3' : 'bg-transparent py-5'}`}>
      <nav className='container mx-auto px-6 flex items-center justify-between'>
        <a href="#" className='text-xl font-bold tracking-tight hover:text-primary'>
          SM<span className='text-primary'>.</span>
        </a>

        {/* Desktop nav */}
        <div className='hidden md:flex items-center gap-1'>
          <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors'>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA button */}
        <div className='hidden md:block'>
          <Button size="sm">Contact Me</Button>
        </div>

        {/* Mobile menu button */}
        <button className='md:hidden p-2 text-foreground hover:text-primary transition-colors cursor-pointer' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden glass-strong fixed top-20 left-0 right-0 transition-all duration-300 origin-top overflow-hidden ${
        isMobileMenuOpen ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-95'
      }`}>
        <div className='container px-6 py-6 flex flex-col mx-auto gap-6'>
          {navLinks.map((link, index) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={closeMobileMenu}
              className={`text-lg text-muted-foreground hover:text-foreground transition-colors py-2 border-b border-border/20 ${
                isMobileMenuOpen ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{
                animationDelay: isMobileMenuOpen ? `${index * 0.1}s` : '0s'
              }}
            >
              {link.label}
            </a>
          ))}

          <Button 
            size="sm" 
            className={`w-full ${
              isMobileMenuOpen ? 'animate-fade-in' : 'opacity-0'
            }`}
            onClick={closeMobileMenu}
            style={{
              animationDelay: isMobileMenuOpen ? `${navLinks.length * 0.1}s` : '0s'
            }}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar