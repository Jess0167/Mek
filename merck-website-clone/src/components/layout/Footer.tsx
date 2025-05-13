import type React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-10">
      {/* Contact information */}
      <div className="bg-[#00635B] py-8 text-white">
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
          <div className="mb-6">
            <h3 className="text-xl font-medium">Contact Us</h3>
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <a href="tel:+13146494713" className="hover:text-gray-200">
              Phone: 1-314-649-4713
            </a>
            <a href="mailto:info@mercck.com" className="hover:text-gray-200">
              Email: info@mercck.com
            </a>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="mx-auto w-full max-w-[1400px] px-6 py-12 lg:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Column 1 */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider">For patients and health care professionals</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="https://www.merckhelps.com/" className="hover:text-[#00635B]">
                  <strong>MerckHelps</strong> Merck Patient Assistance Program provides certain Merck medicines and adult vaccines for free to qualified patients.
                </a>
              </li>
              <li>
                <a href="https://www.merckaccessprogram.com/" className="hover:text-[#00635B]">
                  <strong>Merck Access Program</strong> Information about insurance coverage and financial assistance options for eligible patients.
                </a>
              </li>
              <li>
                <a href="https://www.merckclinicaltrials.com/" className="hover:text-[#00635B]">
                  <strong>Clinical trials</strong> Learn about our clinical trials and find available studies.
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider">Sustainability</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="https://www.merck.com/company-overview/sustainability/" className="hover:text-[#00635B]">
                  <strong>Impact Report</strong> Reporting on our commitment to operating responsibly to benefit society.
                </a>
              </li>
              <li>
                <a href="https://www.merckformothers.com/" className="hover:text-[#00635B]">
                  <strong>Merck for Mothers</strong> An initiative to create a world where no woman has to die giving life.
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider">About Merck</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="https://www.merck-animal-health.com/" className="hover:text-[#00635B]">
                  <strong>Merck Animal Health</strong> The global animal health business unit of Merck.
                </a>
              </li>
              <li>
                <a href="https://www.merck.com/contact-us/" className="hover:text-[#00635B]">
                  <strong>Contact Us</strong> If you have a question or need more information about us, find out who you should contact.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright & legal links */}
      <div className="border-t border-gray-200 py-6">
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-wrap gap-6 text-xs">
            <a href="/forward-looking-statement/" className="hover:text-[#00635B]">Forward-looking statement</a>
            <a href="https://www.msdprivacy.com/us/en/cookie-privacy-policy.html" className="hover:text-[#00635B]">Cookie policy</a>
            <a href="https://www.msdprivacy.com/us/en/" className="hover:text-[#00635B]">Privacy</a>
            <a href="https://www.msdprivacy.com/us/en/transparency-and-privacy.html" className="hover:text-[#00635B]">Transparency disclosure</a>
            <a href="/terms-of-use/" className="hover:text-[#00635B]">Terms of use</a>
            <a href="https://www.msdaccessibility.com/" className="hover:text-[#00635B]">Accessibility</a>
            <a href="/sitemap/" className="hover:text-[#00635B]">Sitemap</a>
          </div>
          <div className="mt-6 text-xs">
            <p>Copyright © 2025 Merck & Co., Inc., Rahway, NJ, USA, and its affiliates. All rights reserved. | This site is intended only for residents of the United States and Canada.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
