import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const About = () => {
  const taxGrowthData = [
    {
      year: '2022',
      'Direct Tax': 14.1,
      'Indirect Tax': 12.3,
      'Total Collections': 13.2,
    },
    {
      year: '2023',
      'Direct Tax': 15.8,
      'Indirect Tax': 13.9,
      'Total Collections': 14.85,
    },
    {
      year: '2024',
      'Direct Tax': 17.2,
      'Indirect Tax': 15.1,
      'Total Collections': 16.15,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="card-gradient mb-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">About DhanRakshak</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert">
              <p className="text-lg leading-relaxed">
                At DhanRakshak, we believe managing taxes shouldn’t be overwhelming. 
                We’re here to simplify tax planning and management, making it accessible 
                and stress-free for individuals and businesses alike. By combining 
                advanced technology with deep tax expertise, we provide personalized 
                guidance tailored to your unique financial needs.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                Our mission is to empower you with the tools and knowledge to navigate 
                the complexities of taxation confidently. We aim to transform the way 
                you approach taxes—turning confusion into clarity and uncertainty into 
                confidence. Whether you’re an individual or a business, we’re here to 
                help you make smarter financial decisions.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Growth and Impact</h3>
              <p className="text-lg leading-relaxed mb-6">
                Over the years, we’ve witnessed remarkable growth in tax collections, 
                reflecting the trust and confidence our users place in us. Below is a 
                snapshot of our impact:
              </p>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={taxGrowthData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Direct Tax" fill="#8884d8" />
                    <Bar dataKey="Indirect Tax" fill="#82ca9d" />
                    <Bar dataKey="Total Collections" fill="#ffc658" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Our Values</h3>
              <ul className="list-disc list-inside text-lg leading-relaxed">
                <li className="mb-2"><strong>Transparency:</strong> We believe in clear, honest communication in everything we do.</li>
                <li className="mb-2"><strong>Accuracy:</strong> Precision and compliance are at the heart of our solutions.</li>
                <li className="mb-2"><strong>Innovation:</strong> We constantly evolve to bring you cutting-edge tax tools and insights.</li>
                <li className="mb-2"><strong>Customer-Centricity:</strong> Your needs come first—always.</li>
                <li className="mb-2"><strong>Continuous Improvement:</strong> We’re committed to learning and growing to serve you better.</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default About;