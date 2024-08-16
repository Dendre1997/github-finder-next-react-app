export default function About() {
  return (
      <div className="max-w-4xl mx-auto px-4 py-8 h-full">
      <h1 className="text-6xl font-bold mb-6 text-center text-blue-300">About Us</h1>
      <p className="text-lg mb-4">
        This is a simple React app built using <a href="https://nextjs.org" target="_blank" className="text-blue-300 hover:underline">Next.js</a> and <a href="https://tailwindcss.com" target="_blank" className="text-blue-300 hover:underline">Tailwind CSS</a>.
      </p>
      <p className="text-lg mb-4">
        To find users by GitHub username, enter a username in the input field and click the <strong className="text-blue-300">Search</strong> button.
      </p>
      <p className="text-lg mb-4">
        The search results will display a list of users with their profile picture, username, and repository count.
      </p>
      <p className="text-lg mb-4">
        Click on a user's profile picture to visit their <a href="https://github.com" target="_blank" className="text-blue-300 hover:underline">GitHub profile</a>.
      </p>
      <p className="text-lg mb-4">
        Feel free to explore and modify the code to suit your needs.
      </p>
    </div>
  )
}

