export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-xl mb-2">Sales & Demos</h3>
            <p className="text-gray-700">Interested in a personalized demo? Reach out to our sales team.</p>
            <p className="text-blue-600 font-medium mt-2">sales@finvestigative.ai</p>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-2">Support</h3>
            <p className="text-gray-700">Already a client? Our support team is available 24/7.</p>
            <p className="text-blue-600 font-medium mt-2">support@finvestigative.ai</p>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-2">General Inquiries</h3>
            <p className="text-gray-700">Have questions about our platform or services?</p>
            <p className="text-blue-600 font-medium mt-2">info@finvestigative.ai</p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="font-bold text-xl mb-4">Visit Us</h3>
          <div className="space-y-3 text-gray-700">
            <p>Finvestigative AI Inc.</p>
            <p>123 Financial District</p>
            <p>New York, NY 10005</p>
            <p className="mt-4">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  );
}
