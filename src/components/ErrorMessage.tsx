import React from 'react';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="text-center text-red-600 p-4 rounded bg-red-50">
      {message}
    </div>
  );
}