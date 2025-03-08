import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export const TaxCalculator = () => {
  const [income, setIncome] = useState("");
  const [deductions, setDeductions] = useState("");
  const [taxData, setTaxData] = useState<{ name: string; value: number }[]>([]);
  const [barData, setBarData] = useState<{ name: string; amount: number }[]>([]);

  const calculateTax = () => {
    const incomeValue = parseFloat(income) || 0;
    const deductionsValue = parseFloat(deductions) || 0;
    const taxableIncome = Math.max(0, incomeValue - deductionsValue);

    // Tax slabs based on latest tax regime (2024-25)
    let homeTax = 0;
    if (taxableIncome <= 300000) {
      homeTax = 0;
    } else if (taxableIncome <= 600000) {
      homeTax = (taxableIncome - 300000) * 0.05;
    } else if (taxableIncome <= 900000) {
      homeTax = 15000 + (taxableIncome - 600000) * 0.10;
    } else if (taxableIncome <= 1200000) {
      homeTax = 45000 + (taxableIncome - 900000) * 0.15;
    } else if (taxableIncome <= 1500000) {
      homeTax = 90000 + (taxableIncome - 1200000) * 0.20;
    } else {
      homeTax = 150000 + (taxableIncome - 1500000) * 0.30;
    }

    // Calculate effective tax rate
    const effectiveTaxRate = (homeTax / incomeValue) * 100;

    setTaxData([
      { name: "Tax Amount", value: homeTax },
      { name: "Take Home", value: incomeValue - homeTax },
      { name: "Deductions", value: deductionsValue },
    ]);

    setBarData([
      { name: "Gross Income", amount: incomeValue },
      { name: "Taxable Income", amount: taxableIncome },
      { name: "Tax Amount", amount: homeTax },
      { name: "Effective Tax Rate", amount: effectiveTaxRate },
    ]);
  };

  useEffect(() => {
    if (income || deductions) {
      calculateTax();
    }
  }, [income, deductions]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto p-6"
    >
      <Card className="glass-panel p-6 space-y-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold text-blue-600">Tax Calculator</h2>
          <p className="text-muted-foreground">
            Calculate your taxes with real-time updates
          </p>
        </div>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="income" className="text-right text-blue-600">
              Annual Income
            </Label>
            <Input
              id="income"
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="col-span-3"
              placeholder="Enter your annual income"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="deductions" className="text-right text-blue-600">
              Deductions
            </Label>
            <Input
              id="deductions"
              type="number"
              value={deductions}
              onChange={(e) => setDeductions(e.target.value)}
              className="col-span-3"
              placeholder="Enter total deductions"
            />
          </div>
        </div>

        <Button onClick={calculateTax} className="w-full bg-blue-600 hover:bg-blue-700">
          Calculate Tax
        </Button>

        {taxData.length > 0 && (
          <>
            <div className="h-[300px] w-full mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={taxData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({
                      cx,
                      cy,
                      midAngle,
                      innerRadius,
                      outerRadius,
                      value,
                      name,
                    }) => {
                      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                      const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                      const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
                      return (
                        <text
                          x={x}
                          y={y}
                          fill="white"
                          textAnchor={x > cx ? "start" : "end"}
                          dominantBaseline="central"
                        >
                          {`${name} (₹${value.toLocaleString()})`}
                        </text>
                      );
                    }}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {taxData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="h-[300px] w-full mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="amount" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </>
        )}
      </Card>
    </motion.div>
  );
};