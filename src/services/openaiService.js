import OpenAI from 'openai';

// Initialize the OpenAI client
// Note: In a production environment, you should use environment variables
// and proper backend authentication to secure your API key
const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Only for demo purposes
});

/**
 * Analyzes a git diff and generates a LinkedIn post describing the changes
 * @param {string} gitDiff - The git diff content
 * @returns {Promise<string>} - The generated LinkedIn post
 */
export async function generateLinkedInPost(gitDiff) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a technical writer who specializes in creating professional LinkedIn posts about code changes.
          Your task is to analyze a git diff and create a concise, professional LinkedIn post that:
          1. Summarizes the key changes in the pull request
          2. Explains the problems that were solved
          3. Highlights any technical achievements
          4. Uses a professional but engaging tone
          5. Includes relevant hashtags at the end
          6. Is formatted appropriately for LinkedIn (300-500 words)
          
          Focus on the business value and technical merits of the changes, not just listing what files were modified.`
        },
        {
          role: "user",
          content: `Please analyze this git diff and create a LinkedIn post describing the changes and the problems they solve:\n\n${gitDiff}`
        }
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error generating LinkedIn post:", error);
    throw new Error("Failed to generate LinkedIn post");
  }
}

/**
 * Mock function to use when OpenAI API is not available
 * @param {string} gitDiff - The git diff content
 * @returns {Promise<string>} - A mock LinkedIn post
 */
export async function generateMockLinkedInPost() {
  // For testing without API key
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`🚀 Excited to share our latest improvements to the user authentication system!

I just merged a pull request that addresses several critical security vulnerabilities in our login flow. Here's what we accomplished:

✅ Fixed a potential SQL injection vulnerability in the user lookup process
✅ Implemented proper password hashing using bcrypt with salt rounds
✅ Added rate limiting to prevent brute force attacks
✅ Improved error handling to prevent information leakage

These changes not only make our application more secure but also improve the overall code quality and maintainability. The team worked hard to ensure these fixes were implemented without disrupting the user experience.

Security is a journey, not a destination. What security improvements have you made to your projects recently?

#WebSecurity #CyberSecurity #SoftwareDevelopment #CodeQuality #TechInnovation`);
    }, 1500);
  });
} 