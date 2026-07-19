export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg text-gray-700 space-y-4">
        <p>Last updated: July 2026</p>
        
        <p>
          Finvestigative AI is committed to protecting your privacy and handling your data with the highest standards of security and confidentiality.
        </p>
        
        <h2 className="text-2xl font-bold mt-8">Data Collection</h2>
        <p>
          We collect only the data necessary to provide our investigation services. This includes:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Account information (name, email, organization)</li>
          <li>Case data you upload for analysis</li>
          <li>Usage patterns to improve our platform</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-8">Data Protection</h2>
        <p>
          All data is encrypted at rest and in transit. We employ industry-standard security measures including SOC 2 compliance, regular audits, and strict access controls.
        </p>
        
        <h2 className="text-2xl font-bold mt-8">Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your data at any time. Contact our privacy team at privacy@finvestigative.ai.
        </p>
      </div>
    </div>
  );
}
