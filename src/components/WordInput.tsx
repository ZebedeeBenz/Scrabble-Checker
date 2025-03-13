import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface WordInputProps {
  onSubmit: (word: string) => void;
}

export const WordInput: React.FC<WordInputProps> = ({ onSubmit }) => {
  const [word, setWord] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (word.trim()) {
      onSubmit(word.trim());
      setWord('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
      <div className="relative">
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          className="w-full px-6 py-4 text-2xl rounded-lg border-2 border-secondary focus:border-secondary-dark focus:ring-2 focus:ring-secondary-light outline-none transition-all bg-white text-dark"
          placeholder="Enter your word..."
          aria-label="Word input"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <button
            type="submit"
            className="bg-secondary text-dark p-2 rounded-full hover:bg-secondary-dark transition-colors"
            aria-label="Check word"
          >
            <Search size={24} />
          </button>
        </div>
      </div>
    </form>
  );
};