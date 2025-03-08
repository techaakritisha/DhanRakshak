import { Header } from "@/components/Header";
import { TaxCalculator } from "@/components/TaxCalxulator";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with enhanced DhanRakshak branding */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6 mb-12"
          >
            <h1 className="text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              DhanRakshak
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your intelligent tax companion for a secure financial future. Calculate taxes with precision, 
              get personalized advice, and make informed decisions effortlessly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-4xl font-bold">Plan Your Taxes Smarter</h2>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg max-w-4xl mx-auto">
            <TaxCalculator />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about taxes and our calculator
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What tax regime should I choose for FY 2024-25?</AccordionTrigger>
                <AccordionContent>
                  For FY 2024-25, the new tax regime is the default option. It offers lower tax rates 
                  without deductions. However, you can still opt for the old regime if you have significant 
                  deductions under sections 80C, 80D, HRA, etc. Use our calculator to compare both regimes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What are the major tax-saving deductions available?</AccordionTrigger>
                <AccordionContent>
                  Under the old tax regime, major deductions include Section 80C (up to ₹1.5 lakhs), 
                  Section 80D (health insurance), HRA, home loan interest, and NPS contributions. 
                  The new tax regime doesn't allow most deductions but offers lower tax rates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>How is my taxable income calculated?</AccordionTrigger>
                <AccordionContent>
                  Taxable income is calculated by subtracting eligible deductions from your gross income. 
                  This includes salary, rental income, capital gains, and business income. Our calculator 
                  helps you determine your exact taxable income based on your inputs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>What is the due date for filing income tax returns?</AccordionTrigger>
                <AccordionContent>
                  For salaried individuals and non-audit cases, the due date is typically July 31st 
                  following the financial year. For businesses requiring audit, it's October 31st. 
                  Late filing may attract penalties under section 234F.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>How accurate is the DhanRakshak tax calculator?</AccordionTrigger>
                <AccordionContent>
                  Our calculator uses the latest tax slabs and rules for FY 2024-25. While it provides 
                  highly accurate estimates, the final tax liability may vary based on specific exemptions 
                  and deductions. For complex tax situations, consult a tax professional.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;