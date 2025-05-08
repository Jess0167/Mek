import type React from 'react';

type RelatedLinkProps = {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
};

const RelatedLink: React.FC<RelatedLinkProps> = ({ title, description, imageSrc, link }) => {
  return (
    <a href={link} className="group block">
      <div className="flex overflow-hidden rounded">
        <div className="h-32 w-32 flex-shrink-0 overflow-hidden bg-gray-100">
          <img
            src={imageSrc}
            alt={`${title} thumbnail`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex-1 bg-gray-100 p-6 transition-colors group-hover:bg-gray-200">
          <h3 className="mb-2 text-lg font-bold text-[#00635B]">{title}</h3>
          <p className="text-sm leading-relaxed text-gray-700">{description}</p>
        </div>
      </div>
    </a>
  );
};

const RelatedLinksSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
        <h2 className="mb-10 text-3xl font-bold">Related links</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <RelatedLink
            title="Media"
            description="Our latest news, announcements and multimedia resources"
            imageSrc="https://ext.same-assets.com/999953051/1400653269.jpeg"
            link="/media/"
          />

          <RelatedLink
            title="Contact us"
            description="If you have a question or need more information about us, find out who you should contact here"
            imageSrc="https://ext.same-assets.com/999953051/3334935280.jpeg"
            link="/contact-us/"
          />

          <RelatedLink
            title="Sustainability"
            description="We operate responsibly every day to enable a safe and healthy future for people and communities globally."
            imageSrc="https://ext.same-assets.com/999953051/4140353626.jpeg"
            link="/company-overview/sustainability/"
          />
        </div>
      </div>
    </section>
  );
};

export default RelatedLinksSection;
