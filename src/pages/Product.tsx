export default function Product() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Our Product</h1>
      
      <div className="space-y-8">
        <div className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl font-semibold mb-3">Entity Connection Engine</h2>
          <p className="text-lg text-gray-700">
            Automatically discover and visualize relationships between people, companies, transactions, and other entities across millions of data points.
          </p>
        </div>
        
        <div className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl font-semibold mb-3">Evidence Trail Management</h2>
          <p className="text-lg text-gray-700">
            Preserve every step of your investigation with immutable audit logs, source citations, and chain-of-custody documentation built into your workflow.
          </p>
        </div>
        
        <div className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl font-semibold mb-3">AI-Assisted Research</h2>
          <p className="text-lg text-gray-700">
            Leverage large language models to summarize documents, extract key facts, and generate hypotheses—all while maintaining investigator control and oversight.
          </p>
        </div>
      </div>
    </div>
  );
}
