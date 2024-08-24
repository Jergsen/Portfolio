import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <header className="w-full max-w-4xl mb-12">
        <h1 className="text-4xl font-bold mb-4">AI-Focused Freelance Developer</h1>
        <p className="text-xl text-gray-600">Turning AI concepts into reality through code</p>
      </header>
      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-lg text-gray-700">
          I&apos;m a passionate freelance developer specializing in AI-driven solutions. With a deep understanding of machine learning algorithms and software development, I create innovative applications that leverage the power of artificial intelligence.
        </p>
      </section>
      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 gap-4">
          <li className="bg-blue-100 p-3 rounded">Machine Learning</li>
          <li className="bg-blue-100 p-3 rounded">Python</li>
          <li className="bg-blue-100 p-3 rounded">TensorFlow</li>
          <li className="bg-blue-100 p-3 rounded">PyTorch</li>
          <li className="bg-blue-100 p-3 rounded">Natural Language Processing</li>
          <li className="bg-blue-100 p-3 rounded">Computer Vision</li>
          <li className="bg-blue-100 p-3 rounded">Web Development</li>
          <li className="bg-blue-100 p-3 rounded">Cloud Computing</li>
        </ul>
      </section>
      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border p-4 rounded">
            <h3 className="text-xl font-semibold mb-2">AI-Powered Chatbot</h3>
            <p className="text-gray-700">Developed a customer service chatbot using NLP techniques, improving response times by 50%.</p>
          </div>
          <div className="border p-4 rounded">
            <h3 className="text-xl font-semibold mb-2">Image Recognition App</h3>
            <p className="text-gray-700">Built a mobile app that uses computer vision to identify objects in real-time.</p>
          </div>
          <div className="border p-4 rounded">
            <h3 className="text-xl font-semibold mb-2">Predictive Analytics Dashboard</h3>
            <p className="text-gray-700">Created a web-based dashboard for visualizing and predicting business metrics using machine learning models.</p>
          </div>
          <div className="border p-4 rounded">
            <h3 className="text-xl font-semibold mb-2">Sentiment Analysis Tool</h3>
            <p className="text-gray-700">Developed a tool for analyzing customer feedback and social media sentiment using advanced NLP techniques.</p>
          </div>
        </div>
      </section>
      <section className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-4">
          Interested in collaborating on an AI project? Let&apos;s connect and bring your ideas to life!
        </p>
        <a href="mailto:contact@aifreelancer.com" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
          Contact Me
        </a>
      </section>
    </main>
  );
}