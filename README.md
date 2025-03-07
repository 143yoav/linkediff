# LinkedDiff

LinkedDiff is a web application that converts Git diffs into professional LinkedIn posts. It analyzes the changes in your pull request and generates a well-crafted post that highlights the problems solved and technical achievements.

## Features

- Paste any Git diff and get a LinkedIn-ready post
- Syntax highlighting for the Git diff preview
- Copy-to-clipboard functionality for easy sharing
- Responsive design that works on desktop and mobile

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/linkediff.git
   cd linkediff
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with your OpenAI API key:
   ```
   REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
   ```

   Note: For demonstration purposes, the app can run without an API key using mock data.

4. Start the development server:
   ```
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Use

1. Paste your Git diff into the text area
2. Click "Generate LinkedIn Post"
3. Wait for the AI to analyze your diff and generate a post
4. Copy the generated post to your clipboard
5. Share it on LinkedIn!

## Technologies Used

- React.js
- Tailwind CSS
- OpenAI API
- diff2html for diff parsing and visualization

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenAI for providing the API that powers the post generation
- The open-source community for the various libraries used in this project 