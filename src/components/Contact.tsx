import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [showPhone, setShowPhone] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = (e: React.FormEvent) => {
    e.preventDefault();
    if (verificationCode === '1234') { // In a real app, use proper verification
      setIsVerified(true);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <a
                href="mailto:shivakumar2008.g@gmail.com"
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Mail className="text-red-600" size={24} />
                <span>shivakumar2008.g@gmail.com</span>
              </a>

              <div className="relative">
                {!showPhone ? (
                  <button
                    onClick={() => setShowPhone(true)}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow w-full"
                  >
                    <Phone className="text-red-600" size={24} />
                    <span>Click to show phone number</span>
                  </button>
                ) : !isVerified ? (
                  <form onSubmit={handleVerification} className="p-4 bg-white rounded-lg shadow-md">
                    <p className="mb-4">Please verify you're human:</p>
                    <input
                      type="text"
                      placeholder="Enter code: 1234"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      className="w-full p-2 border rounded mb-4"
                    />
                    <button
                      type="submit"
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                      Verify
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
                    <Phone className="text-red-600" size={24} />
                    <span>835582654</span>
                  </div>
                )}
              </div>

              <a
                href="https://www.linkedin.com/in/g-shivakumar-85a868200/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Linkedin className="text-red-600" size={24} />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}