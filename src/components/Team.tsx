"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Founder {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
  objectPosition?: string;
}

const founders: Founder[] = [
    {
    name: "Kate Chan",
    role: "Co-Founder",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEoiSwIZkv7rA/profile-displayphoto-shrink_800_800/B56ZSC.a.XGoAc-/0/1737364190006?e=1771459200&v=beta&t=yvHiI9-pL3uLr0781HLRILONPfCu1JFZzVXDzwrsSg0",
    bio: "Tri-qualified lawyer with extensive experience in climate/nature finance projects, environmental technology investments, and ESG/sustainability governance. Kate advises climate/nature investors and technology companies, sits on the advisory board of Earth Law Centre, and serves as the legal engineer of the Nature on the Board initiative. She read law at University of Oxford.",
    linkedin: "https://www.linkedin.com/in/kate-chan-7439224a/",
  },
      {
        name: "Pooja Sharma",
        role: "Co-Founder",
        image: "https://media.licdn.com/dms/image/v2/D5603AQGlqgsnO98Zdg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712607616381?e=1771459200&v=beta&t=X26ZpK32SzTovbG-EP3XjiQqukza4q_J-L2SJ-WULm4",
        bio: "Lead attorney for Earth Law Center's Lough Neagh legal personhood campaign. Pooja brings experienced legal, governance, and nonprofit advisory expertise. She developed ecocentric legal tools and trained over 30 global nature proxies, leading strategic governance at Earth Law Center's Nature Governance Agency.",
        linkedin: "https://www.linkedin.com/in/poojaksharma/",
      },
      {
        name: "James Hone",
        role: "Research Fellow",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQH5sYVFtMitqg/profile-displayphoto-scale_400_400/B4EZwt2K_CJgAg-/0/1770295703824?e=1772064000&v=beta&t=OlLUNV3ctYZYnM3WmkgoFRZe2oLkq8XL5WBOQ-vFOT4",
        bio: "Legal tech and nature governance specialist with a background in law and environmental management and experience in English, Irish and US jurisdictions. James developed nature governance mechanisms for legislation, regulatory codes, corporate boards, insurance policies, and planning and infrastructure frameworks. He is a member of the UN youth congress for climate change, YOUNGO and a Young Ocean leader of the Sustainable Ocean Alliance. He read law at University of Cambridge.",
        linkedin: "https://www.linkedin.com/in/jamesdjhone/",
      },
    ];
  
  export default function Team() {
    return (
      <section id="team" className="py-24 bg-brand-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className
