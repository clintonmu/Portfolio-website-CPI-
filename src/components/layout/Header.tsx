import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, Image, FileText, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps = {}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full bg-white shadow-md z-50",
        className,
      )}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            icon={<Home className="w-4 h-4 mr-1" />}
            label="Home"
          />
          <NavLink
            to="/gallery"
            icon={<Image className="w-4 h-4 mr-1" />}
            label="Gallery"
          />
          <NavLink
            to="/blog"
            icon={<FileText className="w-4 h-4 mr-1" />}
            label="Blog"
          />
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col py-4">
            <MobileNavLink
              to="/"
              icon={<Home className="w-5 h-5 mr-2" />}
              label="Home"
              onClick={toggleMenu}
            />
            <MobileNavLink
              to="/gallery"
              icon={<Image className="w-5 h-5 mr-2" />}
              label="Gallery"
              onClick={toggleMenu}
            />
            <MobileNavLink
              to="/blog"
              icon={<FileText className="w-5 h-5 mr-2" />}
              label="Blog"
              onClick={toggleMenu}
            />
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  icon?: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const NavLink = ({ to, icon, label }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className="flex items-center text-gray-700 hover:text-primary transition-colors duration-200"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

const MobileNavLink = ({ to, icon, label, onClick }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-200"
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default Header;
