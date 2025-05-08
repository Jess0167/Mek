import type React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="flex flex-col md:flex-row">
          {/* Text column */}
          <div className="w-full bg-[#00635B] p-8 text-white md:w-1/2 md:p-12">
            <h2 className="mb-6 text-3xl font-light md:text-4xl">About us</h2>
            <p className="mb-8 text-lg leading-relaxed">
              For more than 130 years, we have brought hope to humanity through the development of important medicines and vaccines.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/company-overview/"
                className="inline-block border border-white bg-transparent px-8 py-4 text-base font-normal text-white transition-colors hover:bg-white hover:text-[#00635B]"
              >
                Who we are
              </a>
              <a
                href="/what-we-do/"
                className="inline-block border border-white bg-transparent px-8 py-4 text-base font-normal text-white transition-colors hover:bg-white hover:text-[#00635B]"
              >
                What we do
              </a>
            </div>
          </div>

          {/* Image column */}
          <div className="w-full md:w-1/2">
            <img
              src="https://ext.same-assets.com/999953051/555251757.jpeg"
              alt="Scientist reviewing test tubes"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
