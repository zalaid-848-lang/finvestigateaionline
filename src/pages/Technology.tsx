export default function Technology() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Technology Stack</h1>
      
      <div className="space-y-6 text-lg text-gray-700">
        <p>
          Finvestigative AI is built on a modern, scalable technology stack designed for security, performance, and reliability.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-2">Frontend</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>React 19 with TypeScript</li>
              <li>TanStack Router</li>
              <li>Tailwind CSS 4</li>
              <li>Vite build tool</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-2">AI & Data</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Large Language Models</li>
              <li>Graph Database</li>
              <li>Vector Search</li>
              <li>Natural Language Processing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
