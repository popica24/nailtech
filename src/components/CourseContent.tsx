import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { DropdownSections, ExpandedSections } from "../types";

type Props = {
  content: DropdownSections;
  price: string;
};

const CourseContent = (props: Props) => {
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>(
    {}
  );

  const toggleSection = (sectionKey: string) => {
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
      <div className="space-y-6">
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <h5 className="font-semibold text-red-800 mb-3">
            ⚠️ Informații importante despre plată și participare
          </h5>
          <p className="text-red-700 text-sm mb-3">
            Vă rugăm să citiți cu atenție următoarele condiții înainte de
            înscriere:
          </p>
        </div>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h6 className="font-semibold text-gray-800 mb-3">
              Politica de rambursare:
            </h6>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
              <li>
                <strong>Plata efectuată nu este returnabilă</strong> în cazul în
                care nu vă prezentați la curs
              </li>
              <li>
                <strong>În cazul anulării participării</strong>, avansul se
                pierde și nu va fi luat în considerare pentru o altă sesiune a
                cursului
              </li>
              <li>
                <strong>Prețul este nenegociabil și nerambursabil</strong>,
                indiferent de motivul neparticipării
              </li>
              <li>
                <strong>Dacă cursantul este nemulțumit</strong> de anumite
                aspecte ale cursului, nu se acceptă returnarea sumei achitate,
                întrucât programa completă este prezentată înaintea înscrierii
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <div className="text-amber-500 text-xl">⚠️</div>
            <div>
              <h6 className="font-semibold text-amber-800 mb-2">
                Condiție de participare:
              </h6>
              <p className="text-amber-700 text-sm">
                Vă rugăm să vă înscrieți doar dacă sunteți{" "}
                <strong>100% siguri de participare</strong> și ați luat la
                cunoștință toate informațiile oferite anterior.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h6 className="font-semibold text-blue-800 mb-2">
            De ce aceste condiții?
          </h6>
          <p className="text-blue-700 text-sm">
            Aceste măsuri sunt necesare pentru a menține calitatea cursurilor și
            pentru a ne asigura că locurile sunt ocupate de persoane cu adevărat
            interesate de dezvoltarea profesională în acest domeniu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
