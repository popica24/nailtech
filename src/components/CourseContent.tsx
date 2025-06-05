import { ReactNode, useState } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownSection {
  key: string;
  title: string;
  content: ReactNode;
}

type DropdownSections = DropdownSection[];

type Props = {
  content: DropdownSections;
  price: string;
};

const CourseContent = (props: Props) => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  return (
    <div className="w-full py-6 montserrat-300">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Course Details */}
        <div className="lg:w-1/3 flex-shrink-0">
          <div className="bg-white rounded-lg p-6 shadow-sm ">
            <h2 className="text-2xl mb-6 text-[#A57865]">
              Pret Curs - {props.price}
            </h2>
            <div className="space-y-4">
              <p>
                Pentru a vă rezerva locul la curs, este necesar un avans de 600
                RON, care se achită în momentul înscrierii.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Dropdowns */}
        <div className="lg:w-2/3 flex-grow">
          <div className="space-y-4">
            {props.content.map((section) => (
              <div
                key={section.key}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.key)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg text-[#A57865]">{section.title}</h3>
                  <span
                    className={`transform transition-transform duration-300 ease-in-out ${
                      expandedSections[section.key] ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 text-[#A57865]" />
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedSections[section.key]
                      ? "max-h-auto opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="pt-4">{section.content}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
