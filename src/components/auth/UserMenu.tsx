import React from 'react';
import { Link } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';

interface UserMenuProps {
  isOpen: boolean;
  onClose: () => void;
  user: {
    name: string;
    email: string;
  };
  onLogout: () => void;
}

export function UserMenu({ isOpen, onClose, user, onLogout }: UserMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-16 w-64 bg-white shadow-lg rounded-lg z-50">
      <div className="p-4 border-b">
        <p className="font-bold">{user.name}</p>
        <p className="text-sm text-gray-600">{user.email}</p>
      </div>
      
      <div className="p-2">
        <Link
          to="/profile"
          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg"
          onClick={onClose}
        >
          <User className="w-4 h-4" />
          Profile
        </Link>
        
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg text-left text-red-600"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </div>
  );
}