export default function Traction() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Our Traction</h1>
      
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-blue-50 p-8 rounded-lg">
          <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
          <div className="text-lg text-gray-700">Financial investigations supported</div>
        </div>
        
        <div className="bg-blue-50 p-8 rounded-lg">
          <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
          <div className="text-lg text-gray-700">Enterprise clients</div>
        </div>
        
        <div className="bg-blue-50 p-8 rounded-lg">
          <div className="text-5xl font-bold text-blue-600 mb-2">99.9%</div>
          <div className="text-lg text-gray-700">Data accuracy rate</div>
        </div>
      </div>
      
      <div className="mt-12 text-lg text-gray-700 text-center">
        <p>Currently deployed at leading financial institutions, regulatory bodies, and investigative agencies worldwide.</p>
      </div>
    </div>
  );
}
