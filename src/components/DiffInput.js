import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

function DiffInput({ gitDiff, onDiffChange, onGeneratePost, isLoading }) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Git Diff Input</h2>
        <p className="text-gray-600 mb-4">
          Paste your git diff below and we'll generate a LinkedIn post describing the changes.
        </p>
      </div>
      
      <div className="border border-gray-300 rounded-md overflow-hidden">
        <textarea
          className="w-full h-64 p-4 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Paste your git diff here..."
          value={gitDiff}
          onChange={(e) => onDiffChange(e.target.value)}
        ></textarea>
      </div>
      
      <div className="flex justify-between items-center">
        <div>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={onGeneratePost}
            disabled={isLoading || !gitDiff.trim()}
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </span>
            ) : (
              'Generate LinkedIn Post'
            )}
          </button>
        </div>
        
        <div>
          <button
            className="text-gray-600 hover:text-gray-800 font-medium py-2 px-4 rounded-md focus:outline-none transition-colors"
            onClick={() => onDiffChange('')}
            disabled={isLoading || !gitDiff.trim()}
          >
            Clear
          </button>
        </div>
      </div>
      
      {gitDiff && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Preview:</h3>
          <div className="border border-gray-300 rounded-md overflow-hidden max-h-64 overflow-y-auto">
            <SyntaxHighlighter
              language="diff"
              style={tomorrow}
              showLineNumbers={true}
              wrapLines={true}
            >
              {gitDiff}
            </SyntaxHighlighter>
          </div>
        </div>
      )}
    </div>
  );
}

export default DiffInput; 