import React, { useState } from 'react';
import { WordInput } from './components/WordInput';
import { WordResult } from './components/WordResult';
import { calculateScrabbleScore } from './utils/scrabbleScore';
import type { WordResult as WordResultType } from './types';
import '@fontsource/atkinson-hyperlegible';

function App() {
  const [currentWord, setCurrentWord] = useState<string>('');
  const [result, setResult] = useState<WordResultType | null>(null);

  // In a real app, this would connect to a Scrabble dictionary API
  const checkWord = async (word: string) => {
    // Simulated API call
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const isValid = response.ok;
    
    let definition = '';
    if (isValid) {
      const data = await response.json();
      definition = data[0]?.meanings[0]?.definitions[0]?.definition || '';
    }

    setCurrentWord(word);
    setResult({
      isValid,
      definition,
      score: calculateScrabbleScore(word)
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light to-primary font-['Atkinson_Hyperlegible']">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Scrabble Word Checker
          </h1>
          <p className="text-lg text-secondary">
            Check your words without cheating
          </p>
        </header>

        <main className="flex flex-col items-center gap-8">
          <WordInput onSubmit={checkWord} />
          
          {result && (
            <WordResult word={currentWord} result={result} />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;