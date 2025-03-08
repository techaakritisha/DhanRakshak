
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const Resources = () => {
  const taxData = [
    {
      title: "Tax Collections",
      description: "Comparison of tax collection categories",
      currentYear: [
        { name: "Income Tax", value: 580000 },
        { name: "Corporate Tax", value: 420000 },
        { name: "GST", value: 680000 },
      ],
      previousYear: [
        { name: "Income Tax", value: 520000 },
        { name: "Corporate Tax", value: 380000 },
        { name: "GST", value: 620000 },
      ]
    },
    {
      title: "Tax Compliance",
      description: "Tax filing statistics",
      currentYear: [
        { name: "On-time Filing", value: 75 },
        { name: "Late Filing", value: 20 },
        { name: "Non-compliance", value: 5 },
      ],
      previousYear: [
        { name: "On-time Filing", value: 70 },
        { name: "Late Filing", value: 25 },
        { name: "Non-compliance", value: 5 },
      ]
    },
    {
      title: "Tax Deductions",
      description: "Popular tax deduction categories",
      currentYear: [
        { name: "80C Investments", value: 250000 },
        { name: "Housing Loan", value: 200000 },
        { name: "Health Insurance", value: 150000 },
      ],
      previousYear: [
        { name: "80C Investments", value: 220000 },
        { name: "Housing Loan", value: 180000 },
        { name: "Health Insurance", value: 130000 },
      ]
    },
    {
      title: "Tax Refunds",
      description: "Tax refund processing status",
      currentYear: [
        { name: "Processed", value: 85 },
        { name: "Under Process", value: 10 },
        { name: "Pending", value: 5 },
      ],
      previousYear: [
        { name: "Processed", value: 80 },
        { name: "Under Process", value: 15 },
        { name: "Pending", value: 5 },
      ]
    },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Tax Resources</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tax statistics and insights comparing current and previous year data.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {taxData.map((category, index) => (
            <Card key={index} className="card-gradient">
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="w-full h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={category.currentYear}
                        cx="30%"
                        cy="50%"
                        outerRadius={60}
                        fill="#8884d8"
                        dataKey="value"
                        label
                      >
                        {category.currentYear.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Pie
                        data={category.previousYear}
                        cx="70%"
                        cy="50%"
                        outerRadius={60}
                        fill="#8884d8"
                        dataKey="value"
                        label
                      >
                        {category.previousYear.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-sm text-center mt-4">
                  <span className="mr-4">Left: Current Year</span>
                  <span>Right: Previous Year</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Resources;