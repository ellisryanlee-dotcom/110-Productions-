import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Music, Plus, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-dark-card border-b border-gray-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
              <Music className="text-purple-accent text-2xl" />
              <span className="text-xl font-bold">MusicShare</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <Link href="/" className="text-warm-white hover:text-purple-accent transition-colors" data-testid="link-my-music">
                My Music
              </Link>
              <Link href="/upload" className="text-gray-text hover:text-warm-white transition-colors" data-testid="link-upload">
                Upload
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/upload">
              <Button className="bg-purple-accent hover:bg-purple-600" data-testid="button-upload-track">
                <Plus className="w-4 h-4 mr-2" />
                Upload Track
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-mobile-menu">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
