import type React from 'react';

const PipelineSection: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="flex flex-col md:flex-row">
          {/* Image column */}
          <div className="w-full md:w-1/2">
            <img
              src="https://ext.same-assets.com/999953051/823789601.jpeg"
              alt="DNA research"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Text column */}
          <div className="w-full bg-[#00635B] p-8 text-white md:w-1/2 md:p-12">
            <h2 className="mb-6 text-3xl font-light md:text-4xl">Our pipeline</h2>
            <p className="mb-8 text-lg leading-relaxed">
              We follow the science where we can make the greatest difference, now and in the future
            </p>
            <a
              href="/research/product-pipeline/"
              className="inline-block border border-white bg-transparent px-8 py-4 text-base font-normal text-white transition-colors hover:bg-white hover:text-[#00635B]"
            >
              Explore our pipeline
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PipelineSection;
