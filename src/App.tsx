/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  ArrowRight,
  Database,
  Boxes,
  Network,
  Leaf,
  Shield,
  ChevronDown,
} from "lucide-react";

export default function App() {
  const currentYear = new Date().getFullYear();
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const [dragState, setDragState] = useState<Record<number, { x: number; y: number; moved: boolean }>>({});
  const [hash, setHash] = useState(window.location.hash);
  const isTermsPage = hash === "#/terms";
  const isPrivacyPage = hash === "#/privacy";
  const isRequestCatalogPage = hash === "#/request-catalog";
  const [formState, handleCatalogSubmit] = useForm("xkoenyej");
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const isIOSWebKit = (() => {
    const ua = navigator.userAgent || "";
    const platform = navigator.platform || "";
    const touchPoints = navigator.maxTouchPoints || 0;
    const iOSDevice = /iPad|iPhone|iPod/.test(ua) || (platform === "MacIntel" && touchPoints > 1);
    return iOSDevice && /AppleWebKit/.test(ua);
  })();

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (heroVideoRef.current) {
      heroVideoRef.current.playbackRate = 0.5;
    }
  }, []);

  useEffect(() => {
    if (!formState.succeeded) return;

    const gtag = (window as typeof window & {
      gtag?: (
        command: "event",
        eventName: string,
        parameters?: Record<string, string>
      ) => void;
    }).gtag;

    gtag?.("event", "generate_lead", {
      form_name: "catalog_request",
      form_location: "request_catalog_page",
    });
  }, [formState.succeeded]);

  const originCards = [
    {
      name: "MINAMIKYUSHU",
      location: "Kagoshima",
      cultivars: "Okumidori, Yabukita, Yutakamidori, Saemidori, Asatsuyu",
      overview: "Largest large-scale supply node in Japan."
    },
    {
      name: "NISHIO",
      location: "Aichi",
      cultivars: "Samidori, Yabukita, Asahi, Okumidori",
      overview: "Specialized tencha production hub."
    },
    {
      name: "WAZUKA",
      location: "Kyoto",
      cultivars: "Yabukita, Okumidori, Saemidori, Samidori, Houshun, Okuyutaka",
      overview: "Diverse premium-origin supply network."
    },
    {
      name: "SHIBUSHI",
      location: "Kagoshima",
      cultivars: "Okumidori, Yabukita, Saemidori",
      overview: "Efficient large-scale production node."
    },
    {
      name: "UJI",
      location: "Kyoto",
      cultivars: "Samidori, Asahi, Okumidori, Gokou",
      overview: "Historic premium matcha origin."
    },
    {
      name: "JOYO",
      location: "Kyoto",
      cultivars: "Samidori, Asahi, Okumidori",
      overview: "High-grade competition-level tencha area."
    },
    {
      name: "KYOTANABE",
      location: "Kyoto",
      cultivars: "Samidori, Asahi, Okumidori, Gokou",
      overview: "Premium gyokuro-based tencha sourcing."
    },
    {
      name: "SHIMADA",
      location: "Shizuoka",
      cultivars: "Okumidori, Seimei, Yabukita",
      overview: "Export-focused organic-compatible node."
    },
    {
      name: "YAME",
      location: "Fukuoka",
      cultivars: "Okumidori, Saemidori, Yabukita, Samidori, Kanayamidori, Yamakai, Okuyutaka, Gokou, Asatsuyu",
      overview: "Rich umami-focused premium sourcing."
    },
    {
      name: "SUZUKA",
      location: "Mie",
      cultivars: "Yabukita, Okumidori",
      overview: "Rapidly growing tencha conversion area."
    },
    {
      name: "FUJIEDA",
      location: "Shizuoka",
      cultivars: "Okumidori, Yabukita, Saemidori",
      overview: "Early high-quality tencha development zone."
    },
    {
      name: "KIRISHIMA",
      location: "Kagoshima",
      cultivars: "Okumidori, Yabukita, Saemidori",
      overview: "Aromatic highland production node."
    },
    {
      name: "UJITAWARA",
      location: "Kyoto",
      cultivars: "Yabukita, Samidori, Okumidori",
      overview: "Historic high-quality tea production region."
    },
    {
      name: "MINAMIYAMASHIRO",
      location: "Kyoto",
      cultivars: "Yabukita, Okumidori",
      overview: "Strong aroma mountain-origin node."
    },
    {
      name: "KIZUGAWA",
      location: "Kyoto",
      cultivars: "Yabukita, Okumidori",
      overview: "Integrated large-scale managed tea area."
    },
    {
      name: "SHIZUOKA",
      location: "Shizuoka",
      cultivars: "Okumidori, Yabukita, Okuhikari, Sawamizuka, Kanayamidori",
      overview: "Diverse processing-grade sourcing base."
    },
    {
      name: "TOYOTA",
      location: "Aichi",
      cultivars: "Yabukita, Samidori",
      overview: "Regional supplementary supply node."
    },
    {
      name: "YOKKAICHI",
      location: "Mie",
      cultivars: "Yabukita, Okumidori",
      overview: "Ise tea-based production support node."
    },
    {
      name: "AYABE",
      location: "Kyoto",
      cultivars: "Yabukita, Okumidori",
      overview: "Northern Kyoto industrial production node."
    },
    {
      name: "ANJO",
      location: "Aichi",
      cultivars: "Samidori, Yabukita",
      overview: "Strategic supplementary Nishio-area node."
    }
  ];

  if (isTermsPage) {
    return (
      <div className="min-h-screen bg-[var(--page-bg)] text-[var(--deep-text)]">
        <main className="max-w-4xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="mb-10">
            <a href="#" className="text-[var(--primary-green)] hover:text-[var(--primary-green-hover)] text-sm uppercase tracking-[0.12em]">
              Back to Home
            </a>
          </div>
          <article className="bg-[var(--white)] border border-[var(--company-border)] p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">TERMS OF SERVICE</h1>
            <p className="text-sm text-[var(--secondary-text)] mb-8">Last Updated: May 19, 2026</p>
            <div className="space-y-6 text-[15px] leading-[1.75] text-[var(--secondary-text)]">
              <p>These Terms of Service ("Terms") govern your access to and use of the GreenGold Japan website (the "Website"), operated by General Future Co., Ltd. under the GreenGold Japan brand ("GreenGold", "we", "us", or "our").</p>
              <p>By accessing or using this Website, you agree to be bound by these Terms. If you do not agree, please do not use this Website.</p>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">1. COMPANY INFORMATION</h2><p>GreenGold Japan<br />Powered by General Future Co., Ltd.<br />4-15-18 Nishitenma, Kita-ku, Osaka 530-0047, Japan</p><p className="mt-3">Contact:<br /><a href="mailto:info@greengoldjapan.com">info@greengoldjapan.com</a></p></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">2. BUSINESS PURPOSE OF THIS WEBSITE</h2><p>This Website is intended for informational and business communication purposes only.</p><p>GreenGold provides information relating to Japanese tea sourcing, matcha procurement support, OEM discussions, export-related business communications, and related commercial inquiries.</p><p>This Website is intended for business users, including distributors, importers, wholesalers, retailers, café operators, and commercial counterparties.</p></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">3. NO OFFER OR BINDING COMMITMENT</h2><p>All information presented on this Website, including product descriptions, catalog references, specifications, availability, MOQ indications, sourcing references, and other business information, is provided for general informational purposes only.</p><p>Nothing on this Website constitutes:</p><ul className="list-disc pl-6"><li>a legally binding offer,</li><li>a firm quotation,</li><li>a commitment to supply,</li><li>a guarantee of availability,</li><li>a promise of pricing continuity,</li><li>or a binding acceptance of any commercial transaction.</li></ul><p>Any actual transaction shall be subject to separate discussion, mutual agreement, and formal documentation where applicable.</p></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">4. PRODUCT INFORMATION DISCLAIMER</h2><p>Product specifications, origins, grades, packaging formats, pricing references, supply capabilities, lead times, compliance information, and availability may change without notice.</p><p>Actual terms may vary depending on supplier conditions, production capacity, harvest conditions, regulatory requirements, export restrictions, shipping constraints, and commercial negotiations.</p><p>Users must not rely solely on Website content for procurement decisions.</p></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">5. OEM / SOURCING DISCUSSIONS</h2><p>Submission of an inquiry, catalog request, or communication through this Website does not create:</p><ul className="list-disc pl-6"><li>any agency relationship,</li><li>any brokerage obligation,</li><li>any exclusivity arrangement,</li><li>any fiduciary duty,</li><li>or any obligation for GreenGold to secure supply.</li></ul><p>Commercial discussions remain subject to independent evaluation and separate agreement.</p></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">6. ACCEPTABLE USE</h2><p>You agree not to:</p><ul className="list-disc pl-6"><li>use the Website for unlawful purposes,</li><li>interfere with Website operations,</li><li>attempt unauthorized access,</li><li>introduce malicious code,</li><li>scrape, copy, harvest, or systematically extract Website content without permission,</li><li>misuse contact forms,</li><li>impersonate any individual or organization,</li><li>submit misleading business information.</li></ul></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">7. INTELLECTUAL PROPERTY</h2><p>All Website content, including but not limited to:</p><ul className="list-disc pl-6"><li>text,</li><li>branding,</li><li>logos,</li><li>graphics,</li><li>layout,</li><li>visual design,</li><li>product presentation materials,</li><li>catalogs (where provided),</li><li>downloadable materials,</li></ul><p>are owned by or licensed to GreenGold and protected by applicable intellectual property laws.</p><p>No content may be copied, reproduced, modified, distributed, republished, or commercially exploited without prior written consent.</p></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">8. THIRD-PARTY CONTENT AND LINKS</h2><p>The Website may contain references or links to third-party businesses, partners, suppliers, or external websites.</p><p>GreenGold does not control and is not responsible for third-party content, products, services, availability, or policies.</p></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">9. NO WARRANTY</h2><p>This Website is provided on an "as is" and "as available" basis.</p><p>To the fullest extent permitted by law, GreenGold disclaims all warranties, express or implied, including but not limited to:</p><ul className="list-disc pl-6"><li>merchantability,</li><li>fitness for a particular purpose,</li><li>non-infringement,</li><li>uninterrupted availability,</li><li>accuracy,</li><li>completeness,</li><li>reliability.</li></ul></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">10. LIMITATION OF LIABILITY</h2><p>To the fullest extent permitted by law, GreenGold, General Future Co., Ltd., their directors, officers, employees, affiliates, and representatives shall not be liable for:</p><ul className="list-disc pl-6"><li>direct losses,</li><li>indirect losses,</li><li>incidental damages,</li><li>consequential damages,</li><li>business interruption,</li><li>procurement losses,</li><li>lost profits,</li><li>lost opportunities,</li><li>reliance damages,</li><li>data loss,</li></ul><p>arising from or related to:</p><ul className="list-disc pl-6"><li>use of the Website,</li><li>inability to use the Website,</li><li>reliance on Website content,</li><li>third-party actions,</li><li>supply disruptions,</li><li>product availability issues,</li><li>export/import restrictions,</li><li>regulatory changes.</li></ul></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">11. INDEMNIFICATION</h2><p>You agree to indemnify and hold harmless GreenGold, General Future Co., Ltd., and their affiliates, officers, employees, and representatives from claims, liabilities, damages, losses, and expenses arising from your misuse of the Website or violation of these Terms.</p></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">12. PRIVACY</h2><p>Your use of this Website is also governed by our Privacy Policy.</p></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">13. CHANGES TO THESE TERMS</h2><p>We may update these Terms at any time without prior notice.</p><p>Updated versions become effective when posted on this Website.</p></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">14. GOVERNING LAW</h2><p>These Terms shall be governed by and construed in accordance with the laws of Japan.</p></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">15. JURISDICTION</h2><p>Any dispute arising out of or relating to these Terms or the Website shall be subject to the exclusive jurisdiction of the Osaka District Court in Japan.</p></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">16. CONTACT</h2><p>GreenGold Japan<br />Powered by General Future Co., Ltd.<br />4-15-18 Nishitenma, Kita-ku, Osaka 530-0047, Japan</p><p className="mt-3">Email:<br /><a href="mailto:info@greengoldjapan.com">info@greengoldjapan.com</a></p></section>
            </div>
          </article>
        </main>
      </div>
    );
  }

  if (isPrivacyPage) {
    return (
      <div className="min-h-screen bg-[var(--page-bg)] text-[var(--deep-text)]">
        <main className="max-w-4xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="mb-10">
            <a href="#" className="text-[var(--primary-green)] hover:text-[var(--primary-green-hover)] text-sm uppercase tracking-[0.12em]">
              Back to Home
            </a>
          </div>
          <article className="bg-[var(--white)] border border-[var(--company-border)] p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">PRIVACY POLICY</h1>
            <p className="text-sm text-[var(--secondary-text)] mb-8">Last Updated: May 19, 2026</p>
            <div className="space-y-6 text-[15px] leading-[1.75] text-[var(--secondary-text)]">
              <p>This Privacy Policy describes how GreenGold Japan ("GreenGold", "we", "us", or "our"), operated by General Future Co., Ltd., collects, uses, stores, and discloses personal information when you visit our website, request catalogs, submit business inquiries, or otherwise communicate with us.</p>
              <p>This website is intended for business users, distributors, wholesalers, importers, OEM partners, and other commercial counterparties.</p>
              <p>By using this website, you acknowledge the practices described in this Privacy Policy.</p>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">1. COMPANY INFORMATION</h2><p>GreenGold Japan<br />Powered by General Future Co., Ltd.<br />4-15-18 Nishitenma, Kita-ku, Osaka 530-0047, Japan</p><p className="mt-3">Contact:<br /><a href="mailto:info@greengoldjapan.com">info@greengoldjapan.com</a></p></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">2. INFORMATION WE COLLECT</h2><p>We may collect the following categories of information:</p><p className="mt-3 font-semibold text-[var(--deep-text)]">A. Information You Provide Directly</p><p>When you contact us, request a catalog, or submit an inquiry, we may collect:</p><ul className="list-disc pl-6"><li>Full name</li><li>Company name</li><li>Job title</li><li>Email address</li><li>Phone number</li><li>Country / region</li><li>Business requirements</li><li>Product interests</li><li>OEM / sourcing inquiry details</li><li>Any information voluntarily included in your message</li></ul><p className="mt-3 font-semibold text-[var(--deep-text)]">B. Information Collected Automatically</p><p>When you use our website, we may automatically collect:</p><ul className="list-disc pl-6"><li>IP address</li><li>Browser type</li><li>Device information</li><li>Operating system</li><li>Referring URLs</li><li>Website usage behavior</li><li>Session data</li><li>Cookie identifiers</li><li>Analytics data</li></ul></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">3. HOW WE USE YOUR INFORMATION</h2><p>We may use your information to:</p><ul className="list-disc pl-6"><li>Respond to inquiries</li><li>Provide requested catalogs or product information</li><li>Evaluate sourcing or OEM opportunities</li><li>Communicate regarding commercial discussions</li><li>Improve website performance and user experience</li><li>Conduct analytics and website optimization</li><li>Prevent spam, abuse, or fraudulent activity</li><li>Maintain security of our website and systems</li><li>Comply with legal obligations</li><li>Protect our legal rights and business interests</li></ul></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">4. COOKIES AND ANALYTICS</h2><p>We may use cookies, analytics tools, and similar technologies to improve website functionality and understand user behavior.</p><p>These technologies may collect information regarding:</p><ul className="list-disc pl-6"><li>Pages visited</li><li>Session duration</li><li>Device/browser characteristics</li><li>Geographic approximations</li><li>Referral sources</li></ul><p>You may disable cookies through your browser settings, although some functionality may be affected.</p></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">5. DISCLOSURE OF INFORMATION</h2><p>We may disclose information to:</p><ul className="list-disc pl-6"><li>IT hosting providers</li><li>Website infrastructure providers</li><li>Analytics service providers</li><li>Email communication platforms</li><li>CRM or business communication tools</li><li>Legal, regulatory, or governmental authorities where required</li><li>Professional advisers (legal, accounting, compliance)</li></ul><p>We do not sell personal information.</p></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">6. INTERNATIONAL DATA TRANSFERS</h2><p>Because our website and service providers may operate internationally, your information may be processed outside your country of residence.</p><p>By using this website, you acknowledge that such international transfers may occur.</p><p>We will take commercially reasonable steps to use reputable providers and appropriate safeguards where applicable.</p></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">7. DATA RETENTION</h2><p>We retain personal information only as long as reasonably necessary for:</p><ul className="list-disc pl-6"><li>Inquiry handling</li><li>Business communications</li><li>Recordkeeping</li><li>Legal compliance</li><li>Dispute resolution</li><li>Protection of legitimate business interests</li></ul><p>Retention periods may vary depending on the nature of the interaction.</p></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">8. SECURITY</h2><p>We implement commercially reasonable technical and organizational safeguards to protect personal information.</p><p>However, no internet transmission or storage system can be guaranteed to be completely secure.</p></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">9. THIRD-PARTY LINKS</h2><p>This website may contain links to third-party websites.</p><p>We are not responsible for the privacy practices, content, or policies of third-party websites.</p></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">10. CHILDREN</h2><p>This website is intended for business users and is not directed to children.</p><p>We do not knowingly collect personal information from minors.</p></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">11. YOUR RIGHTS</h2><p>Depending on applicable law, you may have rights relating to your personal information, including:</p><ul className="list-disc pl-6"><li>Access</li><li>Correction</li><li>Deletion</li><li>Restriction</li><li>Objection</li><li>Withdrawal of consent (where applicable)</li></ul><p>Requests may be submitted using the contact details below.</p><p>We may require identity verification before responding.</p></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">12. MARKETING COMMUNICATIONS</h2><p>If we send business communications or follow-up communications, you may request that such communications stop at any time.</p><p>Operational or legally required communications may still be sent where necessary.</p></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">13. CHANGES TO THIS POLICY</h2><p>We may revise this Privacy Policy from time to time.</p><p>Updated versions will be posted on this page with a revised effective date.</p></section>
              <section><h2 className="text-xl font-semibold text-[var(--deep-text)] mb-2">14. CONTACT</h2><p>For privacy-related inquiries:</p><p className="mt-2">GreenGold Japan<br />Powered by General Future Co., Ltd.<br />4-15-18 Nishitenma, Kita-ku, Osaka 530-0047, Japan</p><p className="mt-3">Email:<br /><a href="mailto:info@greengoldjapan.com">info@greengoldjapan.com</a></p></section>
            </div>
          </article>
        </main>
      </div>
    );
  }

  if (isRequestCatalogPage) {
    return (
      <div className="min-h-screen bg-[var(--page-bg)] text-[var(--deep-text)]">
        <main className="max-w-[720px] mx-auto px-6 md:px-8 py-12 md:py-16">
          <div className="mb-8">
            <a href="#" className="text-[var(--primary-green)] hover:text-[var(--primary-green-hover)] text-sm uppercase tracking-[0.12em]">
              Back to Home
            </a>
          </div>

          <header className="mb-8 md:mb-10">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--deep-text)]">Request Catalog</h1>
            <p className="mt-3 text-[15px] md:text-base text-[var(--secondary-text)] leading-relaxed">
              Tell us about your sourcing needs and we will get back to you shortly.
            </p>
          </header>

          <section className="bg-[var(--white)] border border-[var(--company-border)] shadow-[0_12px_28px_rgba(17,24,20,0.08)] p-5 md:p-8">
            {formState.succeeded ? (
              <p className="text-[15px] leading-relaxed text-[var(--deep-text)]">
                Thank you. We will contact you shortly.
              </p>
            ) : (
              <form onSubmit={handleCatalogSubmit} className="space-y-4">
                <input type="hidden" name="_subject" value="Catalog Request - GreenGold Japan" />
                <input type="hidden" name="source" value="GreenGold Japan LP" />

                <div>
                  <label htmlFor="name" className="block text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--secondary-text)] mb-1">FULL NAME *</label>
                  <input id="name" name="name" required className="w-full border border-[var(--company-border)] bg-[var(--white)] px-3 py-2.5 text-[14px] text-[var(--deep-text)] focus:outline-none focus:border-[var(--primary-green)]" />
                </div>

                <div>
                  <label htmlFor="company" className="block text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--secondary-text)] mb-1">COMPANY NAME *</label>
                  <input id="company" name="company" required className="w-full border border-[var(--company-border)] bg-[var(--white)] px-3 py-2.5 text-[14px] text-[var(--deep-text)] focus:outline-none focus:border-[var(--primary-green)]" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--secondary-text)] mb-1">BUSINESS EMAIL *</label>
                  <input id="email" type="email" name="email" required className="w-full border border-[var(--company-border)] bg-[var(--white)] px-3 py-2.5 text-[14px] text-[var(--deep-text)] focus:outline-none focus:border-[var(--primary-green)]" />
                  <ValidationError prefix="Email" field="email" errors={formState.errors} className="mt-1 text-[11px] text-red-700" />
                </div>

                <div>
                  <label htmlFor="country" className="block text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--secondary-text)] mb-1">COUNTRY / REGION *</label>
                  <input id="country" name="country" required className="w-full border border-[var(--company-border)] bg-[var(--white)] px-3 py-2.5 text-[14px] text-[var(--deep-text)] focus:outline-none focus:border-[var(--primary-green)]" />
                </div>

                <div>
                  <label htmlFor="estimated_monthly_volume" className="block text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--secondary-text)] mb-1">ESTIMATED MONTHLY VOLUME *</label>
                  <input id="estimated_monthly_volume" type="text" name="estimated_monthly_volume" required placeholder="e.g. 30 kg/month, 100–300 kg/month, or not sure yet" className="w-full border border-[var(--company-border)] bg-[var(--white)] px-3 py-2.5 text-[14px] text-[var(--deep-text)] placeholder:text-[var(--muted-text)] focus:outline-none focus:border-[var(--primary-green)]" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--secondary-text)] mb-1">INQUIRY DETAILS (OPTIONAL)</label>
                  <textarea id="message" name="message" rows={5} placeholder="Please share your sourcing needs, preferred tea types, certifications, or any specific requirements." className="w-full border border-[var(--company-border)] bg-[var(--white)] px-3 py-2.5 text-[14px] text-[var(--deep-text)] placeholder:text-[var(--muted-text)] focus:outline-none focus:border-[var(--primary-green)]" />
                  <ValidationError prefix="Message" field="message" errors={formState.errors} className="mt-1 text-[11px] text-red-700" />
                </div>

                <button
                  type="submit"
                  disabled={formState.submitting}
                  className="w-full border border-[var(--primary-green)] bg-[var(--primary-green)] hover:bg-[var(--primary-green-hover)] disabled:opacity-75 disabled:cursor-not-allowed py-3 text-[11px] uppercase tracking-[0.16em] font-semibold text-[var(--white)] transition-colors"
                >
                  {formState.submitting ? "Sending..." : "Request Catalog"}
                </button>

                {formState.errors && formState.errors.length > 0 && !formState.submitting && (
                  <p className="text-[13px] text-[var(--deep-text)]">
                    Submission failed. Please contact us at{" "}
                    <a href="mailto:info@greengoldjapan.com" className="underline">info@greengoldjapan.com</a>.
                  </p>
                )}

                <p className="text-[11px] leading-relaxed text-[var(--secondary-text)]">
                  By submitting this form, you agree that we may use your information to respond to your inquiry in accordance with our{" "}
                  <a href="#/privacy" className="underline text-[var(--deep-text)]">Privacy Policy</a>.
                </p>
              </form>
            )}
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans selection:bg-brand-matcha selection:text-white relative bg-[var(--page-bg)] overflow-x-hidden">
      <div className="fixed inset-0 z-0 abstract-mesh dot-pattern opacity-10 pointer-events-none" />

      <div className="relative z-10 editorial-grid border-b border-brand-outline">
        <header className="md:col-span-12 border-b border-[var(--header-border)] bg-[var(--header-bg)] px-7 md:px-9 py-2.5 md:py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center pr-4">
              <img src="/favicon.png" alt="Logo" className="h-[56px] md:h-[64px] w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center flex-1 px-3 md:px-6 min-w-0">
              <span className="font-sans font-medium text-[10px] md:text-[13px] tracking-[0.14em] md:tracking-[0.22em] uppercase text-[var(--secondary-text)] whitespace-nowrap truncate">
                Japanese Matcha / Hojicha / OEM
              </span>
            </div>
            <div className="flex items-center pl-4">
              <a
                href="#/request-catalog"
                className="font-sans font-semibold text-[12px] tracking-[0.18em] uppercase text-[var(--primary-green)] border border-[var(--primary-green)] rounded-[2px] px-4 md:px-5 py-2 transition-colors duration-200 hover:bg-[var(--primary-green)] hover:text-[var(--white)] whitespace-nowrap"
              >
                Request Catalog
              </a>
            </div>
          </div>
        </header>

        <section className="md:col-span-7 md:row-span-6 grid-cell relative overflow-hidden min-h-[500px] bg-[var(--page-bg)]">
          <video
            ref={heroVideoRef}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-[1]"
            autoPlay
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            poster="/hero-bg-tea-row-dark.webp"
          >
            <source src="/hero-bg-tea-field.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 pointer-events-none z-[1] bg-[var(--hero-overlay)]" />
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold tracking-[-0.01em] leading-[0.92] mb-8 text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.45)]">
              Scale. Variety.<br />Direct from Origin.
            </h1>
            <p className="max-w-md text-base md:text-[20px] leading-[1.35] text-white/90 mb-10 [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]">
              Flexible OEM with Cost Efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#/request-catalog" className="border border-white/72 text-white bg-transparent px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-semibold flex items-center gap-3 group hover:bg-white/12 transition-colors [text-shadow:0_1px_10px_rgba(0,0,0,0.35)]">
                Request Catalog <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        <section className="md:col-span-5 md:row-span-6 grid-cell border-l border-[var(--company-border)] bg-[var(--stats-bg)] relative overflow-hidden">
          <div className="space-y-10 relative z-10">
            {[
              { label: "Annual Supply Capacity", value: "420+", unit: "Tons / Year", detail: "Annual Supply Capacity" },
              { label: "Networked Farms & Producers", value: "60+", unit: "", detail: "Networked Farms & Producers" },
              { label: "Grade & Cultivar Options", value: "120+", unit: "", detail: "Grade & Cultivar Options" },
              { label: "Traceability / Lot Tracking", value: "100%", unit: "", detail: "Traceability / Lot Tracking" }
            ].map((stat, i) => (
              <div key={i} className="flex justify-between items-end border-b border-[var(--stats-line)] pb-3 group">
                <div>
                  <span className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--deep-text)]">
                    {stat.value}
                    {stat.unit && <span className="text-sm uppercase ml-1 text-[var(--secondary-text)]/80">{stat.unit}</span>}
                  </span>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--secondary-text)] mt-1">{stat.detail}</p>
                </div>
                <div className="w-1 h-1 bg-[var(--primary-green)] hidden group-hover:block" />
              </div>
            ))}
          </div>
        </section>

        <section className="md:col-span-12 border-t border-[var(--company-border)] bg-[var(--origin-bg)] overflow-hidden">
          <div className="flex flex-col md:flex-row h-full">
            <div className="md:w-1/6 p-8 border-r border-[var(--company-border)] flex flex-col justify-between bg-[var(--origin-label-bg)]">
              <div>
                <span className="text-label text-[var(--deep-text)]">Origin Archive</span>
                <p className="text-xs leading-relaxed text-[var(--muted-text)]">Primary sourcing nodes across Japan&apos;s major tea regions.</p>
              </div>
            </div>
            <div className="flex-1 overflow-x-auto">
              <div className="flex gap-[10px] md:gap-[14px] min-w-max p-3 md:p-4">
                {originCards.map((origin, i) => (
                  <button
                    key={origin.name}
                    type="button"
                    aria-label={`${origin.name} origin card, tap to ${flippedCards[i] ? "show front" : "show overview"}`}
                    className="relative w-[254px] h-[286px] cursor-pointer border border-[rgba(17,24,20,0.10)] bg-[#F8F8F3] shadow-[0_12px_28px_rgba(17,24,20,0.08)] overflow-hidden text-left"
                    onPointerDown={(e) => setDragState((prev) => ({ ...prev, [i]: { x: e.clientX, y: e.clientY, moved: false } }))}
                    onPointerMove={(e) =>
                      setDragState((prev) => {
                        const cur = prev[i];
                        if (!cur) return prev;
                        const moved = cur.moved || Math.abs(e.clientX - cur.x) > 7 || Math.abs(e.clientY - cur.y) > 7;
                        return moved === cur.moved ? prev : { ...prev, [i]: { ...cur, moved } };
                      })
                    }
                    onPointerUp={() => {
                      const st = dragState[i];
                      if (!st?.moved) setFlippedCards((prev) => ({ ...prev, [i]: !prev[i] }));
                    }}
                  >
                    <div
                      className={`relative w-full h-full ${isIOSWebKit ? "origin-card-ios-motion" : "transition-transform duration-700"}`}
                      style={isIOSWebKit ? undefined : { transformStyle: "preserve-3d", transform: flippedCards[i] ? "rotateY(180deg)" : "rotateY(0deg)" }}
                    >
                      <div
                        className={`origin-card-face ${isIOSWebKit ? (flippedCards[i] ? "origin-card-fade-hidden" : "origin-card-fade-visible") : ""}`}
                        style={isIOSWebKit ? undefined : { backfaceVisibility: "hidden" }}
                      >
                        <div
                          className="absolute inset-0 bg-center bg-cover"
                          style={{
                            backgroundImage: `url('/origin-topo/${String(i + 1).padStart(2, "0")}.png')`,
                          }}
                        />
                        <div className="origin-card-panel absolute left-3 right-3 top-3 h-[58%] rounded-[2px] bg-[rgba(11,79,47,0.72)]" />
                        <div className="relative z-10 flex justify-between items-start mb-8">
                          <span className="text-[10px] text-[rgba(255,255,255,0.82)]">{String(i + 1).padStart(2, "0")}</span>
                          <Database className="w-3 h-3 text-[rgba(255,255,255,0.70)]" />
                        </div>
                        <h3 className="relative z-10 text-xs font-bold tracking-widest mb-1 text-[var(--white)] uppercase">{origin.name}</h3>
                        <span className="relative z-10 text-[9px] uppercase tracking-tighter mb-5 block text-[rgba(255,255,255,0.82)]">{origin.location}</span>
                        <p className="relative z-10 text-[10px] leading-relaxed max-w-[28ch] text-[rgba(255,255,255,0.92)]">{origin.cultivars}</p>
                        <div className="absolute z-10 bottom-2 right-3 text-[8px] tracking-[0.10em] uppercase text-[rgba(255,255,255,0.70)] font-semibold">
                          Node {String(i + 1).padStart(2, "0")}
                        </div>
                      </div>
                      <div
                        className={`origin-card-face ${isIOSWebKit ? (flippedCards[i] ? "origin-card-fade-visible" : "origin-card-fade-hidden") : ""}`}
                        style={isIOSWebKit ? undefined : { backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                      >
                        <div
                          className="absolute inset-0 bg-center bg-cover"
                          style={{
                            backgroundImage: `url('/origin-topo/${String(i + 1).padStart(2, "0")}.png')`,
                          }}
                        />
                        <div className="origin-card-panel absolute left-3 right-3 top-3 h-[62%] rounded-[2px] bg-[rgba(11,79,47,0.72)]" />
                        <span className="relative z-10 text-[9px] uppercase tracking-[0.16em] text-[rgba(255,255,255,0.70)] block mb-4">Origin Overview</span>
                        <h3 className="relative z-10 text-xs font-bold tracking-widest mb-3 text-[var(--white)] uppercase">{origin.name}</h3>
                        <p className="relative z-10 text-[11px] leading-relaxed max-w-[30ch] text-[rgba(255,255,255,0.92)]">{origin.overview}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="md:col-span-8 p-0 border-t border-[#D2D9CC] relative overflow-hidden">
          <div className="grid-cell h-full border-r border-[#D2D9CC] relative z-10 bg-[#FAFBF6]">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-sm text-[var(--deep-text)]">A More Efficient Supply Structure.</h2>
            </div>
            <div className="w-full">
              <div className="grid grid-cols-3 text-[10px] uppercase font-semibold tracking-[0.14em] mb-4 pb-4 border-b border-[#D2D9CC] text-[var(--secondary-text)]">
                <div className="col-span-1">Key Factor</div>
                <div className="text-center text-[var(--primary-green)]">Our Direct-Origin Model</div>
                <div className="text-center opacity-60">Traditional Trading Model</div>
              </div>
              <div className="space-y-0 text-xs">
                {[
                  ["Nationwide Producer Network", "○", "Limited"],
                  ["Direct-from-Origin Shipping", "○", "–"],
                  ["OEM / Custom Development", "○", "Limited"],
                  ["EU Pesticide / FDA / Organic Compliance", "Extensive", "Limited"],
                  ["Traceability", "High", "Limited"],
                  ["Freshness Retention", "Higher", "Lower"],
                  ["Inventory Overhead", "Lower", "Higher"],
                  ["Domestic Handling Cost", "Minimized", "Extra"],
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 py-4 border-b border-[#D2D9CC] last:border-none">
                    <span className="font-medium text-[var(--secondary-text)]">{row[0]}</span>
                    <span className="text-center font-bold text-[var(--primary-green)] text-sm leading-none">{row[1]}</span>
                    <span className="text-center text-[var(--secondary-text)]/70">{row[2]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="md:col-span-4 border-t border-l border-[#CCD5C7] bg-[#EEF3E5] text-[var(--deep-text)] relative overflow-hidden h-full self-stretch flex flex-col">
          <div className="relative z-10 p-6 md:p-7 grid grid-cols-1 gap-5 items-start border-b border-[#CCD5C7] basis-2/3">
            <div className="order-1 flex justify-center">
              <div className="relative w-full max-w-[270px]">
                <div className="absolute inset-0 translate-x-2 translate-y-2 border border-[#CCD5C7]/70 bg-[var(--white)]/55" />
                <article
                  className="relative border border-[#CCD5C7] bg-[var(--white)] p-5 md:p-6 overflow-hidden shadow-none"
                  style={{
                    aspectRatio: "210 / 297",
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.42), rgba(255,255,255,0.42)), url('/catalog-bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "70% center",
                    boxShadow: `0 10px 24px var(--catalog-shadow)`
                  }}
                >
                  <div className="relative h-full flex flex-col">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.14em] text-[var(--secondary-text)] block">Updated Monthly</span>
                      <span className="text-[30px] md:text-[32px] font-bold tracking-tight text-[var(--deep-text)] block leading-[1.02] text-left mt-3">
                        {new Date().toLocaleString("en-US", { month: "long" })}, {currentYear} Catalog
                      </span>
                    </div>
                    <div className="mt-7 space-y-2">
                      <p className="text-[10px] uppercase tracking-[0.14em] text-[var(--deep-text)] whitespace-nowrap">Matcha / Hojicha / OEM</p>
                      <p className="text-[10px] uppercase tracking-[0.14em] text-[var(--deep-text)]">Origin Availability</p>
                    </div>
                    <div className="mt-auto">
                      <div className="border-t border-[#CCD5C7] pt-3">
                        <div className="flex items-end justify-between">
                          <span className="text-[9px] uppercase tracking-[0.14em] text-[var(--secondary-text)]">Export Sourcing File</span>
                          <span className="text-[9px] tracking-[0.12em] text-[var(--secondary-text)]">OSN-JP-026</span>
                        </div>
                      </div>
                      <div className="mt-3 h-[136px] md:h-[104px] flex items-center justify-center pb-0 md:pb-3">
                        <img src="/green-gold-japan-logo-cropped.png" alt="Catalog logo" className="h-16 md:h-24 w-auto object-contain" />
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="order-2 space-y-4 w-full md:max-w-[320px] md:mx-auto">
              <p className="text-[10px] uppercase tracking-[0.12em] text-[var(--secondary-text)]">Full pricing, MOQ, and current availability are provided after inquiry.</p>
              <a href="#/request-catalog" className="w-full border border-[var(--primary-green)] bg-[var(--primary-green)] hover:bg-[var(--primary-green-hover)] py-4 text-[10px] uppercase tracking-[0.16em] font-semibold text-[var(--white)] transition-colors text-center block">Request Catalog</a>
            </div>
          </div>
          <div
            className="p-6 md:p-8 border-t border-[#D9DED2] relative z-10 basis-1/3 bg-[#F8F8F3]"
          >
            <div className="grid grid-cols-[minmax(0,1fr)_minmax(136px,1fr)] items-start gap-3 md:flex md:flex-row md:justify-between md:gap-10">
              <div className="flex-1 min-w-0">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted-text)]">Company Information</span>
                <p className="mt-4 text-[20px] md:text-[23px] lg:text-[26px] leading-[0.98] text-[var(--deep-text)]" style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 400 }}>
                  GreenGold Japan
                </p>
                <p className="mt-2 text-[14px] md:text-[15px] lg:text-[16px] leading-[1.25] text-[var(--secondary-text)]" style={{ fontFamily: '"Hanken Grotesk", sans-serif', fontWeight: 500 }}>
                  <span className="whitespace-nowrap">Powered by</span>{" "}
                  <span className="whitespace-nowrap">General Future Co., Ltd.</span>
                </p>
                <p className="mt-3 text-[12px] md:text-[13px] lg:text-[14px] leading-[1.7] text-[var(--secondary-text)]">
                  4-15-18 Nishitenma, Kita-ku, Osaka, 530-0047, Japan
                </p>
              </div>
              <div className="self-center justify-self-center flex justify-center md:shrink-0 md:justify-end md:pr-1">
                <img src="/green-gold-japan-logo-cropped.png" alt="GreenGold Japan logo" className="h-24 sm:h-28 md:h-32 w-auto object-contain" />
              </div>
            </div>
          </div>
        </section>

        <footer className="md:col-span-12 grid-cell border-t border-[var(--primary-green)] flex-row h-24 items-center justify-between text-[11px] uppercase tracking-[0.12em] bg-[var(--primary-green)] text-[var(--white)]">
          <div className="flex gap-12">
            <span>© {currentYear} GreenGold Japan</span>
          </div>
          <div className="flex gap-8">
            <a href="#/terms" className="text-[var(--white)] hover:text-[var(--origin-label-bg)] transition-colors">Terms</a>
            <a href="#/privacy" className="text-[var(--white)] hover:text-[var(--origin-label-bg)] transition-colors">Privacy</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
