"use client";

import { motion } from "framer-motion";
import { Banknote, Handshake, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const banks = [
  { name: "HDFC Bank", logo: "/bank-logos/hdfc.png" },
  { name: "ICICI Bank", logo: "/bank-logos/icici.png" },
  { name: "State Bank of India", logo: "/bank-logos/sbi.png" },
  { name: "Axis Bank", logo: "/bank-logos/axis.png" },
  { name: "Kotak Mahindra", logo: "/bank-logos/kotak.png" },
];

export default function BankingPartners() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center text-center items-center gap-12">
          {/* Content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-[#F05A29]">Banking Partners</span>
            </h2>
            
<p className="text-lg text-gray-600 mb-8">
  We collaborate with India&apos;s leading banks to help you secure construction loans with competitive rates and flexible terms.
</p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
             
            </motion.div>
          </motion.div>

     

         
        </div>
        <div className="flex flex-col lg:flex-row justify-between  text-start  items-center gap-24 mt-8">

          
 <div className="space-y-6 mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="bg-[#F05A29]/10 p-3 rounded-lg">
                  <Banknote className="h-6 w-6 text-[#F05A29]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Easy Loan Processing</h3>
                  <p className="text-gray-600">Pre-approved offers and fast disbursal for our customers</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="bg-[#F05A29]/10 p-3 rounded-lg">
                  <Handshake className="h-6 w-6 text-[#F05A29]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Special Interest Rates</h3>
                  <p className="text-gray-600">Exclusive reduced rates for construction financing</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="bg-[#F05A29]/10 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-[#F05A29]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Secure Transactions</h3>
                  <p className="text-gray-600">All financial transactions are protected and transparent</p>
                </div>
              </motion.div>
            </div>    



             <motion.div
            className="lg:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
          {
            banks.map((bank) => (
              <motion.div
                key={bank.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 justify-center"
              >
                <Image src={bank.logo} alt={bank.name} width={100} height={100}/>
              </motion.div>
            ))
          }
          </motion.div>


      
     
  
        </div>
             
      </div>
    </section>
  );
}
















    



