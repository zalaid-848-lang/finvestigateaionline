export default function Team() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Our Team</h1>
      
      <div className="space-y-6 text-lg text-gray-700 mb-8">
        <p>
          We're a diverse team of investigators, data scientists, and engineers passionate about fighting financial crime through technology.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-bold text-xl">Leadership</h3>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li>• Former financial crime investigators</li>
            <li>• PhDs in AI and data science</li>
            <li>• Ex-regulatory compliance experts</li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-bold text-xl">Our Values</h3>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li>• Integrity above all</li>
            <li>• Evidence-based decisions</li>
            <li>• Human-centered AI</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
