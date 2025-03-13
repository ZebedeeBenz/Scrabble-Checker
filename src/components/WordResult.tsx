import React from 'react';
import { CheckCircle, XCircle, Volume2 } from 'lucide-react';
import type { WordResult as WordResultType } from '../types';

interface WordResultProps {
  word: string;
  result: WordResultType;
}

export const WordResult: React.FC<WordResultProps> = ({ word, result }) => {
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.rate = 0.9; // Slightly slower for clarity
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg max-w-lg w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold text-secondary">{word}</h2>
        <button
          onClick={speak}
          className="p-2 hover:bg-secondary/10 rounded-full transition-colors"
          aria-label="Hear pronunciation"
        >
          <Volume2 size={24} className="text-primary" />
        </button>
      </div>

      <div className="flex items-center gap-3 mb-4">
        {result.isValid ? (
          <CheckCircle size={28} className="text-primary" />
        ) : (
          <XCircle size={28} className="text-red-500" />
        )}
        <span className="text-xl text-dark">
          {result.isValid ? 'Valid word' : 'Not a valid word'}
        </span>
      </div>

      {result.isValid && (
        <>
          {result.definition && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-dark mb-2">Definition:</h3>
              <p className="text-dark-light">{result.definition}</p>
            </div>
          )}
          {result.score !== undefined && (
            <div className="bg-secondary/10 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-dark mb-1">Scrabble Score:</h3>
              <p className="text-3xl font-bold text-primary">{result.score} points</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}