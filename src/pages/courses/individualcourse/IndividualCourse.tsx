import CourseContent from "../../../components/CourseContent";
import Footer from "../../../layout/components/Footer";

const dropdownSections = [
  {
    key: "descriere",
    title: "Descriere",
    content: (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h4 className="font-bold text-purple-800 text-lg mb-3">
            Curs Individual VIP – Experiență personalizată, rezultate
            excepționale
          </h4>
          <p className="text-purple-700">
            Cursul Individual VIP este destinat tehnicienelor care își doresc
            exclusivitate totală, flexibilitate și atenție 100% personalizată în
            procesul de perfecționare.
          </p>
        </div>

        <p>
          Lucrezi direct cu trainerul, într-un mediu intim, fără alți
          participanți, beneficiind de un program adaptat complet nevoilor tale.
        </p>

        <div className="bg-gold-50 p-4 rounded-lg border border-yellow-300">
          <p className="text-yellow-800 font-medium text-center">
            ✨ Investește în tine și oferă-ți șansa unei evoluții reale! ✨
          </p>
          <p className="text-yellow-700 text-sm text-center mt-2">
            Alege un curs care îți respectă timpul, îți valorifică potențialul
            și îți oferă o experiență premium.
          </p>
        </div>

        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <p className="font-semibold text-lg text-gray-800">
            Cursul Individual VIP este despre tine.{" "}
            <span className="text-purple-600">Doar despre tine.</span>
          </p>
        </div>

        <h4 className="font-semibold mt-6 mb-3">
          Pentru cine este acest curs?
        </h4>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Tehnicienele care vor <strong>exclusivitate totală</strong> în
            procesul de învățare
          </li>
          <li>
            Profesioniștii cu <strong>program încărcat</strong> care au nevoie
            de flexibilitate
          </li>
          <li>
            Cei care vor să <strong>progreseze rapid</strong> și eficient
          </li>
          <li>
            Tehnicienii care au <strong>provocări specifice</strong> sau tehnici
            preferate
          </li>
          <li>
            Persoanele care învață mai bine în <strong>mediu intim</strong>,
            fără distrageri
          </li>
          <li>
            Cei care vor <strong>rezultate premium</strong> și atenție
            individualizată
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "caracteristici",
    title: "Caracteristici exclusive",
    content: (
      <div className="space-y-6">
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-semibold text-purple-800 mb-3">
            Ce îți oferă acest curs exclusivist:
          </h4>
        </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-4 p-4 bg-white border border-purple-200 rounded-lg shadow-sm">
            <div className="text-purple-500 text-2xl">👑</div>
            <div>
              <h5 className="font-semibold text-purple-700 mb-1">
                Exclusivitate totală
              </h5>
              <p className="text-sm text-gray-700">
                Trainerul lucrează doar cu tine, fără alte cursante
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-white border border-blue-200 rounded-lg shadow-sm">
            <div className="text-blue-500 text-2xl">📅</div>
            <div>
              <h5 className="font-semibold text-blue-700 mb-1">
                Program flexibil
              </h5>
              <p className="text-sm text-gray-700">
                Stabilim împreună datele și orele, în funcție de
                disponibilitatea ta
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-white border border-green-200 rounded-lg shadow-sm">
            <div className="text-green-500 text-2xl">⚡</div>
            <div>
              <h5 className="font-semibold text-green-700 mb-1">
                Lucru intensiv
              </h5>
              <p className="text-sm text-gray-700">
                Maximizezi practica și progresezi rapid
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-white border border-orange-200 rounded-lg shadow-sm">
            <div className="text-orange-500 text-2xl">💬</div>
            <div>
              <h5 className="font-semibold text-orange-700 mb-1">
                Feedback personalizat
              </h5>
              <p className="text-sm text-gray-700">
                Corectări și îndrumări constante, adaptate stilului tău
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-white border border-pink-200 rounded-lg shadow-sm">
            <div className="text-pink-500 text-2xl">🎯</div>
            <div>
              <h5 className="font-semibold text-pink-700 mb-1">
                Structură personalizată
              </h5>
              <p className="text-sm text-gray-700">
                Conținutul este conceput în funcție de nivelul și obiectivele
                tale
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-white border border-yellow-200 rounded-lg shadow-sm">
            <div className="text-yellow-500 text-2xl">🌟</div>
            <div>
              <h5 className="font-semibold text-yellow-700 mb-1">
                Rezultate rapide și de calitate
              </h5>
              <p className="text-sm text-gray-700">
                Atenția individuală înseamnă progres vizibil încă din primele
                ore
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "beneficii",
    title: "Beneficii VIP",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-gold-50 to-yellow-50 p-4 rounded-lg">
          <h4 className="font-semibold text-yellow-800 mb-2">
            Beneficiile cursului Individual VIP:
          </h4>
          <p className="text-yellow-700 text-sm">
            7 avantaje majore care fac diferența în procesul tău de învățare
          </p>
        </div>

        <div className="space-y-4">
          <div className="border-l-4 border-purple-500 pl-6 py-3 bg-purple-50">
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                1
              </span>
              <h5 className="font-semibold text-purple-800">
                Atenție 100% personalizată
              </h5>
            </div>
            <p className="text-sm text-purple-700">
              Sesiunile sunt create special pentru tine, în funcție de
              cunoștințele și obiectivele tale.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-6 py-3 bg-blue-50">
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                2
              </span>
              <h5 className="font-semibold text-blue-800">
                Ritmul tău, progresul tău
              </h5>
            </div>
            <p className="text-sm text-blue-700">
              Înveți fără presiune, în propriul ritm, pentru rezultate durabile.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-6 py-3 bg-green-50">
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                3
              </span>
              <h5 className="font-semibold text-green-800">
                Corectarea imediată a greșelilor
              </h5>
            </div>
            <p className="text-sm text-green-700">
              Trainerul observă și corectează fiecare detaliu, crescând
              eficiența învățării.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-6 py-3 bg-orange-50">
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                4
              </span>
              <h5 className="font-semibold text-orange-800">
                Focus pe ceea ce contează pentru tine
              </h5>
            </div>
            <p className="text-sm text-orange-700">
              Ai o tehnică preferată sau o provocare? Ne concentrăm exact pe ce
              ai nevoie.
            </p>
          </div>

          <div className="border-l-4 border-pink-500 pl-6 py-3 bg-pink-50">
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                5
              </span>
              <h5 className="font-semibold text-pink-800">
                Încredere în tine de la primele încercări
              </h5>
            </div>
            <p className="text-sm text-pink-700">
              Feedback-ul constant și susținerea trainerului îți oferă siguranță
              în procesul de învățare.
            </p>
          </div>

          <div className="border-l-4 border-indigo-500 pl-6 py-3 bg-indigo-50">
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-indigo-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                6
              </span>
              <h5 className="font-semibold text-indigo-800">
                Flexibilitate maximă
              </h5>
            </div>
            <p className="text-sm text-indigo-700">
              Programul este adaptabil, astfel încât să se potrivească perfect
              programului tău zilnic.
            </p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-6 py-3 bg-yellow-50">
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                7
              </span>
              <h5 className="font-semibold text-yellow-800">
                Rezultate premium, vizibile imediat
              </h5>
            </div>
            <p className="text-sm text-yellow-700">
              Progresezi rapid, iar lucrările tale vor reflecta imediat
              calitatea noilor cunoștințe.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "program",
    title: "Organizare și program",
    content: (
      <div className="space-y-6">
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-semibold text-purple-800 mb-3">
            Cum funcționează cursul Individual VIP?
          </h4>
          <p className="text-purple-700 text-sm">
            Programul este complet flexibil și personalizat, conceput în jurul
            nevoilor și obiectivelor tale specifice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
              <span className="text-blue-500 mr-2">📋</span>
              Planificare personalizată
            </h5>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Evaluare inițială a nivelului curent</li>
              <li>Stabilirea obiectivelor specifice</li>
              <li>Crearea unui plan de învățare adaptat</li>
              <li>Alegerea tehnicilor de focalizat</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
              <span className="text-green-500 mr-2">⏰</span>
              Flexibilitate totală
            </h5>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Tu alegi zilele și orele</li>
              <li>Durată adaptabilă sesiunilor</li>
              <li>Posibilitate de reprogramare</li>
              <li>Pauze personalizate</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
              <span className="text-orange-500 mr-2">🎯</span>
              Conținut personalizat
            </h5>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Tehnici alese în funcție de nevoile tale</li>
              <li>Accent pe provocările specifice</li>
              <li>Materiale adaptate nivelului tău</li>
              <li>Exerciții practice intensive</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
              <span className="text-purple-500 mr-2">💎</span>
              Experiență premium
            </h5>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Mediu exclusiv și liniștit</li>
              <li>Materiale și echipamente de top</li>
              <li>Atenție completă din partea trainerului</li>
              <li>Suport continuu post-curs</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="text-purple-600 text-3xl">✨</div>
            <div>
              <h6 className="font-semibold text-purple-800 mb-1">
                Experiența ta, regulile tale
              </h6>
              <p className="text-purple-700 text-sm">
                În cursul Individual VIP, tu ești în centrul atenției. Fiecare
                aspect al programului este gândit pentru a maximiza potențialul
                tău și a-ți oferi cea mai bună experiență de învățare posibilă.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "inscriere",
    title: "Informații înscriere",
    content: (
      <div className="space-y-6">
        <div className="bg-gold-50 border-l-4 border-yellow-500 p-4">
          <h4 className="font-semibold text-yellow-800 mb-3">
            🌟 Cursul Individual VIP - Investiția supremă în dezvoltarea ta
          </h4>
          <p className="text-yellow-700 text-sm">
            Acest curs reprezintă vârful experienței educaționale în domeniul
            nail art-ului, oferind o experiență completamente personalizată și
            rezultate excepționale.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-white border border-purple-200 rounded-lg p-4">
            <h5 className="font-semibold text-purple-700 mb-3 flex items-center">
              <span className="text-purple-500 mr-2">📞</span>
              Cum te înscrii?
            </h5>
            <div className="space-y-2 text-sm text-gray-700">
              <p>Pentru a te înscrie la cursul Individual VIP:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Contactează-ne telefonic sau prin mesaj</li>
                <li>Discutăm despre obiectivele și nevoile tale</li>
                <li>Stabilim împreună programul perfect pentru tine</li>
                <li>Confirmăm înscrierea și detaliile finale</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-blue-200 rounded-lg p-4">
            <h5 className="font-semibold text-blue-700 mb-3 flex items-center">
              <span className="text-blue-500 mr-2">⭐</span>
              Ce include cursul?
            </h5>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Atenție 100% individualizată din partea trainerului</li>
              <li>Program complet flexibil și personalizat</li>
              <li>Toate materialele și echipamentele necesare</li>
              <li>Feedback constant și corectări immediate</li>
              <li>Suport post-curs pentru întrebări și clarificări</li>
              <li>Certificat de participare personalizat</li>
            </ul>
          </div>

          <div className="bg-white border border-green-200 rounded-lg p-4">
            <h5 className="font-semibold text-green-700 mb-3 flex items-center">
              <span className="text-green-500 mr-2">🎓</span>
              Pentru cine este recomandat?
            </h5>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Tehnicienii cu experiență care vor să se perfecționeze</li>
              <li>Începătorii care vor cele mai bune fundamente</li>
              <li>
                Persoanele cu program aglomerat care necesită flexibilitate
              </li>
              <li>
                Cei care vor să învețe tehnici specifice rapid și eficient
              </li>
              <li>Profesiioniștii care caută experiențe premium de învățare</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg text-center">
          <h5 className="font-bold text-purple-800 text-lg mb-2">
            Pregătește-te pentru o transformare completă!
          </h5>
          <p className="text-purple-700 text-sm mb-4">
            Cursul Individual VIP nu este doar despre învățarea unor tehnici -
            este despre dezvoltarea ta completă ca profesionist în domeniul nail
            art-ului.
          </p>
          <div className="bg-white bg-opacity-50 rounded-lg p-3">
            <p className="text-purple-800 font-medium">
              💎 Investiția în cursul VIP este investiția în excelența ta
              profesională 💎
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

const IndividualCourse = () => {
  return (
    <>
      <div className="container flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div
          className="mt-30 relative w-full h-[450px] md:h-[320px]"
          id="home"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="absolute inset-0 opacity-40">
            <img
              src="/Courses/baza2.jpg"
              alt="Background Image"
              className="object-cover object-center w-full h-full rounded-xl shadow-lg"
            />
          </div>
          <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2 montserrat-500">
                Cursul Individual VIP
              </h1>
              <p className="font-regular text-xl mb-8 mt-4 montserrat-400">
                Cursul Individual VIP este destinat tehnicienelor care își
                doresc exclusivitate totală, flexibilitate și atenție 100%
                personalizată în procesul de perfecționare. Lucrezi direct cu
                trainerul, într-un mediu intim, fără alți participanți.
              </p>
              <a
                href="https://wa.me/+40749095803?text=Buna%20%21%20Legat%20de%20cursul%20individual%2C%20ma%20numesc..."
                className="w-full cursor-pointer transition-all duration-[0.3s] ease-in-out py-[8px] px-[10px] montserrat-400 text-base font-semibold text-white rounded-[5px] bg-[#A57865]"
              >
                Inscrie-te si tu !
              </a>
            </div>
          </div>
        </div>

        <CourseContent content={dropdownSections} price={"1500-2000RON / ZI"} />

        <section
          className="bg-gray-100 w-full mx-auto"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1000"
        >
          <div className="py-8">
            <div className="mx-auto text-center">
              <h2
                className="text-3xl font-extrabold text-[#C8A875] montserrat-400"
                id="contactUs"
              >
                Viziteaza-ne !
              </h2>
              <p className="mt-3 text-lg text-gray-500">Si ramai surprins !</p>
            </div>
            <div className="mt-8 lg:mt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                    <div className="border-t border-gray-200 px-6 py-4">
                      <h3 className="text-lg text-gray-900">Contact</h3>
                      <p className="mt-1 text-gray-600">
                        <a href="tel:+40749095803">Telefon: +40 749 095 803</a>
                      </p>
                      <a className="flex m-1" href="tel:+919823331842">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-start h-10 w-30 rounded-md bg-[#C8A875] text-white p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6 me-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                              />
                            </svg>
                            Suna !
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="px-6 py-4 montserrat-300">
                      <h3 className="text-lg font-medium text-gray-900">
                        Adresa
                      </h3>
                      <p className="mt-1 text-gray-600">
                        Strada 13 Decembrie Bloc 14
                      </p>
                    </div>
                    <div className="border-t border-gray-200 px-6 py-4 montserrat-300">
                      <h3 className="text-lg font-medium text-gray-900">
                        Program
                      </h3>
                      <p className="mt-1 text-gray-600">
                        Luni - Sambata : 10:00 - 18:00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden order-none sm:order-first max-w-[95vw] md:max-w-none mx-auto">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1438.504264830933!2d25.327129872991247!3d45.56333114750024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sro!4v1748261746215!5m2!1sen!2sro"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default IndividualCourse;
