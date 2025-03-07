import React, { useState } from 'react';
import DiffInput from './components/DiffInput';
import LinkedInPost from './components/LinkedInPost';
import { generateLinkedInPost } from './services/openaiService';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [gitDiff, setGitDiff] = useState('');
  const [linkedInPost, setLinkedInPost] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDiffChange = (diff) => {
    setGitDiff(diff);
    setLinkedInPost('');
    setError('');
  };

  const handleGeneratePost = async () => {
    if (!gitDiff.trim()) {
      setError('Please enter a git diff');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const post = await generateLinkedInPost(gitDiff);
      setLinkedInPost(post);
    } catch (err) {
      setError('Failed to generate LinkedIn post. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <DiffInput 
              gitDiff={gitDiff} 
              onDiffChange={handleDiffChange} 
              onGeneratePost={handleGeneratePost}
              isLoading={isLoading}
            />
            
            {error && (
              <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
                {error}
              </div>
            )}
            
            {linkedInPost && (
              <LinkedInPost post={linkedInPost} />
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App; 