import type React from 'react';

const ClinicalTrialsSection: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="flex flex-col md:flex-row">
          {/* Text column */}
          <div className="w-full bg-[#00635B] p-8 text-white md:w-1/2 md:p-12">
            <h2 className="mb-6 text-3xl font-light md:text-4xl">Clinical trials</h2>
            <p className="mb-8 text-lg leading-relaxed">
              Clinical trials help find new treatments to help save and improve lives. Our progress is due in large part to the important and tough scientific questions we set out to answer with our trials and collaborations.
            </p>
            <a
              href="/research/clinical-trials/"
              className="inline-block border border-white bg-transparent px-8 py-4 text-base font-normal text-white transition-colors hover:bg-white hover:text-[#00635B]"
            >
              Learn more about clinical trials
            </a>
          </div>

          {/* Image column */}
          <div className="w-full md:w-1/2">
            <img
              src="https://ext.same-assets.com/999953051/354332582.png"
              alt="Woman thinking"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicalTrialsSection;
