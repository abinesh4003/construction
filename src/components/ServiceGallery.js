"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useDialog } from "./DialogProvider";
import Link from "next/link";


// Services data array
const services = [
    {
        title: "Luxury Villa Construction",
        image: "/gallery/desktop1.jpg",
        description: "Custom-designed villas with premium finishes and elegant architecture tailored to your lifestyle.",
        tags: ["Custom Design", "Premium Finish", "Luxury Homes"],
        layout: "md:col-span-2 lg:col-span-2 row-span-2",
    },
    {
        title: "Commercial Complexes",
        image: "/gallery/complex.jpg",
        description: "State-of-the-art commercial spaces designed for productivity and business success.",
        tags: ["Offices", "Business Centers", "Modern Design"],
        layout: "md:col-span-1 lg:col-span-1 row-span-2",
    },
    {
        title: "Interior Design",
        image: "/gallery/interior.jpg",
        description: "Transform your space with bespoke interior solutions that reflect your personality.",
        tags: ["Furniture", "Lighting", "Color Schemes"],
        layout: "md:col-span-1 lg:col-span-1 row-span-1",
    },
    {
        title: "Eco-Friendly Construction",
        image: "/gallery/eco.jpg",
        description: "Sustainable building solutions that respect the environment while delivering comfort.",
        tags: ["Solar Energy", "Sustainability", "Green Materials"],
        layout: "md:col-span-2 lg:col-span-2 row-span-1",
    },
    {
        title: "Residential Projects",
        image: "/gallery/residential.jpg",
        description: "Modern apartments and duplexes designed for contemporary urban living.",
        tags: ["Apartments", "Duplex", "Urban Living"],
        layout: "md:col-span-1 lg:col-span-1 row-span-1",
    },
    {
        title: "Hospitality Projects",
        image: "/gallery/hoispitality.jpg",
        description: "Create memorable experiences with our hospitality construction expertise.",
        tags: ["Hotels", "Resorts", "Restaurants"],
        layout: "md:col-span-2 lg:col-span-2 row-span-2",
    },
    {
        title: "Architectural Planning",
        image: "/gallery/arcitech.jpg",
        description: "Comprehensive 2D & 3D planning to bring your vision to life before construction.",
        tags: ["3D Design", "Visualization", "Blueprints"],
        layout: "md:col-span-1 lg:col-span-1 row-span-1",
    },
    {
        title: "Renovation Services",
        image: "/gallery/renovation.jpg",
        description: "Breathe new life into existing spaces with our expert renovation services.",
        tags: ["Home Makeover", "Upgrades", "Restoration"],
        layout: "md:col-span-1 lg:col-span-1 row-span-1",
    },
    {
        title: "Landscape Design",
        image: "/gallery/landscape.jpg",
        description: "Beautiful outdoor spaces that seamlessly integrate with your architecture.",
        tags: ["Gardens", "Hardscapes", "Outdoor Living"],
        layout: "md:col-span-3 lg:col-span-2 row-span-1",
    },
    {
        title: "Smart Home Automation",
        image: "/gallery/smart.jpg",
        description: "Intelligent home systems for enhanced comfort, security, and energy efficiency.",
        tags: ["IoT", "Security", "Energy Management"],
        layout: "md:col-span-1 lg:col-span-2 row-span-1",
    },
];



export default function ServicesSection() {

    const { openDialog } = useDialog();
    return (
        <section id="services" className="py-20 bg-slate-50">
            {/* Professional Header - Always at top */}
            <div className="text-center mb-20 px-6">
                {/* Updated Heading */}
                <span className="block text-[#F5B041] montserrat text-3xl md:text-4xl font-bold mb-4">
                    Specialized Construction Solutions
                </span>

                {/* Updated Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
                >
                    Explore our diverse range of expert services designed to elevate every stage of your
                    construction journey — from design to finishing touches.
                </motion.p>

                {/* Decorative Accent Bar */}
                <div className="mt-6 w-24 h-1 mx-auto bg-gradient-to-r from-amber-500 to-amber-700 rounded-full" />
            </div>

            <div className="w-full px-4">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 grid-flow-dense "
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: 80 }}
                            whileInView={{
                                x: 0,
                            }}
                            delay={0}

                            viewport={{ once: false }}
                            className={`relative overflow-hidden shadow-lg group cursor-pointer border border-slate-200/50 bg-white/5 hover:shadow-2xl hover:shadow-amber-100/50 transition-all duration-300 min-h-[200px] md:min-h-[250px] ${service.layout}`}
                            tabIndex={0}
                            aria-label={`Learn more about our ${service.title} service`}
                        >

                            {/* Animated Gradient Border */}
                            {/* <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500  opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" /> */}

                            {/* Main Content Container */}
                            <div className="relative w-full h-full bg-white z-10 overflow-hidden">
                                {/* Image Layer */}
                                <Image
                                    src={service.image}
                                    alt={`${service.title} - Professional construction service`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />


                                {/* Hover Overlay - Slides from bottom to top */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/60 
  translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"
                                />

                                {/* Always Visible Title - Top Position */}
                                <div className="absolute top-0 left-0 right-0 p-6">
                                    <h3 className="text-xl font-bold text-white leading-tight font-montserrat">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Hover Content - Slides up from bottom */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-0">
                                    {/* Description and Tags - Hidden by default, revealed on hover */}
                                    <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out space-y-3">
                                        <p className="text-slate-200 text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {service.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2.5 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-xs text-white font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Effect Border */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400/50  transition-all duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center     px-4 sm:px-6 lg:px-12 pt-12 border-t border-slate-200/50"
                >
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-montserrat mb-3 sm:mb-4 leading-snug">
                        Ready to Build Your Vision?
                    </h3>

                    <p className="text-slate-600 text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                        Let&apos;s discuss your project and bring your construction dreams to life with our expert team and premium services.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 10px 30px -10px rgba(217, 119, 6, 0.5)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#F5B041] text-white text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-amber-400/50 font-montserrat"
                            aria-label="Get a free consultation for your construction project"
                            onClick={openDialog}
                        >
                            Get Free Consultation
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-slate-300 text-slate-700 text-base sm:text-lg font-semibold rounded-lg hover:bg-slate-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-slate-300/50 font-montserrat"
                            aria-label="View our completed construction projects portfolio"
                        >
                            <Link href="/package">View Packages</Link>
                        </motion.button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}