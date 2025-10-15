// app/sitemap.js
const baseUrl = "https://www.vargheseconstruction.com";

const sections = [
  { path: "", priority: 1.0, changeFreq: "monthly" }, // home
  { path: "/service", priority: 0.9, changeFreq: "monthly" },
  { path: "/portfolio", priority: 0.8, changeFreq: "monthly" },
  { path: "/package", priority: 0.8, changeFreq: "monthly" },
  { path: "/reviews", priority: 0.7, changeFreq: "monthly" },
  { path: "/partners", priority: 0.7, changeFreq: "monthly" },
  { path: "/contact", priority: 0.6, changeFreq: "monthly" },
];

export default function sitemap() {
  const today = new Date();

  return sections.map((section) => ({
    url: `${baseUrl}${section.path}`,
    lastModified: today,
    changeFrequency: section.changeFreq,
    priority: section.priority,
  }));
}
