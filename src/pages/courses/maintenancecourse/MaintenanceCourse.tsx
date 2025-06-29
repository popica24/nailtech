import CourseContent from "../../../components/CourseContent";
import Footer from "../../../layout/components/Footer";
import { buyCourse } from "../../../utils/functions";
const dropdownSections = [
  {
    key: "descriere",
    title: "Descriere",
    content: (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border-l-4 border-teal-500">
          <h4 className="font-bold text-teal-800 text-lg mb-3">
            Curs TEHNICI DE ÎNTREȚINERE
          </h4>
          <p className="text-teal-700">
            Cursul perfect pentru perfecționarea tehnicilor de întreținere și
            corecție, cu accent pe arhitectura impecabilă a unghiei și metode
            avansate de lucru.
          </p>
        </div>

        <h4 className="font-semibold mt-6 mb-3">De ce să alegi acest curs?</h4>
        <ul className="list-disc list-inside space-y-2 text-[#333]">
          <li>
            <strong>Ai deja o bază solidă</strong> în domeniul nails și simți că
            e momentul să avansezi
          </li>
          <li>
            <strong>Vrei să îți perfecționezi tehnicile</strong> de întreținere
            și corecție, pentru a obține o arhitectură impecabilă a unghiei
          </li>
          <li>
            <strong>Cauți metode avansate</strong>, rapide și eficiente de
            schimbare a formei, adaptate fiecărei structuri naturale
          </li>
          <li>
            <strong>Îți dorești să te autodepășești</strong>, să ieși din zona
            de confort și să crești atât profesional, cât și personal
          </li>
          <li>
            <strong>Alegi să înveți de la specialiști</strong> cu experiență
            reală în salon, care îți oferă soluții aplicabile imediat
          </li>
          <li>
            <strong>Vrei să oferi servicii premium</strong> - acest curs îți
            oferă toate instrumentele necesare pentru a deveni un profesionist
            de top
          </li>
        </ul>

        <h4 className="font-semibold mt-6 mb-3">
          Cui se adresează acest curs?
        </h4>
        <div className="bg-blue-50 p-4 rounded-lg">
          <ul className="list-disc list-inside space-y-2 text-blue-800">
            <li>
              <strong>Tehnicienilor care vor să exceleze</strong> în lucrul pe
              unghii scurte, oferind rezultate estetice și rezistente
            </li>
            <li>
              <strong>Profesioniștilor care își doresc</strong> să ofere
              servicii rapide, precise și de înaltă calitate
            </li>
            <li>
              <strong>Oricui vrea să învețe tehnici moderne</strong>, eficiente
              și adaptate cerințelor actuale din salon
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    key: "program",
    title: "Programa de curs",
    content: (
      <div className="space-y-6">
        <div className="bg-teal-50 p-4 rounded-lg">
          <h4 className="font-semibold text-teal-800 mb-2">
            3 zile intensive - Tehnici avansate de întreținere
          </h4>
          <p className="text-teal-700 text-sm">
            Fiecare zi este dedicată unei tehnici specifice, cu accent pe
            practică și perfecționare.
          </p>
        </div>

        <div className="space-y-4">
          <div className="border-l-4 border-purple-500 pl-4">
            <h5 className="font-semibold text-purple-700 mb-2">
              ZIUA 1 – Short Manicure
            </h5>
            <div className="bg-purple-50 p-3 rounded">
              <h6 className="font-medium text-purple-800 mb-2">
                Manichiura scurtă ideală – pătratul perfect
              </h6>
              <p className="text-sm text-purple-700">
                Înveți să realizezi o manichiură scurtă cu o formă pătrată
                impecabilă, adaptată fiecărui tip de unghie naturală, punând
                accent pe simetrie și echilibru estetic.
              </p>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="font-semibold text-blue-700 mb-2">
              ZIUA 2 – Întreținere cu tipsuri reutilizabile
            </h5>
            <div className="bg-blue-50 p-3 rounded">
              <h6 className="font-medium text-blue-800 mb-2">
                Schimbarea formei + design minimalist exclusivist
              </h6>
              <p className="text-sm text-blue-700">
                Explorezi tehnica întreținerii cu tipsuri reutilizabile, înveți
                cum să modifici forma unghiei rapid și eficient, și creezi un
                design minimalist, elegant și actual.
              </p>
            </div>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h5 className="font-semibold text-green-700 mb-2">
              ZIUA 3 – Întreținere slim & French de interior
            </h5>
            <div className="bg-green-50 p-3 rounded">
              <h6 className="font-medium text-green-800 mb-2">
                Rafinament și precizie în fiecare detaliu
              </h6>
              <p className="text-sm text-green-700">
                Aplici tehnica întreținerii în stil slim, iar apoi aprofundezi
                realizarea unui French de interior, cu un design sofisticat și
                rafinat, potrivit clientelei premium.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg">
          <p className="text-sm text-gray-700 italic text-center">
            Fiecare zi combină teoria cu practica intensivă, oferind rezultate
            imediate și aplicabile în salon.
          </p>
        </div>
      </div>
    ),
  },
  {
    key: "temele",
    title: "Temele de curs",
    content: (
      <div className="space-y-6">
        <p className="font-semibold">
          Ce vei învăța în cadrul cursului - 9 module esențiale:
        </p>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <span className="bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full mt-1">
                1
              </span>
              <div>
                <h5 className="font-semibold text-teal-700 mb-1">
                  Alegerea produsului potrivit
                </h5>
                <p className="text-sm text-gray-700">
                  Cum să selectezi corect produsele în funcție de tipologia
                  unghiei, pentru aderență optimă și durabilitate maximă.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full mt-1">
                2
              </span>
              <div>
                <h5 className="font-semibold text-blue-700 mb-1">
                  Rezistența manichiurii – explicații și soluții
                </h5>
                <p className="text-sm text-gray-700">
                  Înțelegi ce factori influențează rezistența și înveți tehnici
                  care asigură rezultate de lungă durată.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full mt-1">
                3
              </span>
              <div>
                <h5 className="font-semibold text-green-700 mb-1">
                  Tehnici rapide și eficiente de lucru
                </h5>
                <p className="text-sm text-gray-700">
                  Optimizarea timpului de execuție fără a compromite calitatea,
                  esențială pentru un ritm susținut în salon.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full mt-1">
                4
              </span>
              <div>
                <h5 className="font-semibold text-purple-700 mb-1">
                  Stilizarea cuticulei – rapid și impecabil
                </h5>
                <p className="text-sm text-gray-700">
                  Metode profesionale pentru un finish curat și estetic, cu
                  impact imediat asupra aspectului final al manichiurii.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full mt-1">
                5
              </span>
              <div>
                <h5 className="font-semibold text-orange-700 mb-1">
                  Forma perfectă – pătratul ideal
                </h5>
                <p className="text-sm text-gray-700">
                  Cum să realizezi o formă pătrată simetrică și echilibrată,
                  adaptată fiecărei structuri de pat unghial.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <span className="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full mt-1">
                6
              </span>
              <div>
                <h5 className="font-semibold text-pink-700 mb-1">
                  Alegerea și diferențierea tipsurilor reutilizabile
                </h5>
                <p className="text-sm text-gray-700">
                  Cum să alegi corect tipul de tips și când să îl folosești
                  pentru un rezultat eficient și personalizat.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <span className="bg-indigo-500 text-white text-xs font-bold px-2 py-1 rounded-full mt-1">
                7
              </span>
              <div>
                <h5 className="font-semibold text-indigo-700 mb-1">
                  Repere pentru manichiura slim
                </h5>
                <p className="text-sm text-gray-700">
                  Tehnici detaliate pentru obținerea unei forme slim elegante,
                  corecte din punct de vedere tehnic și estetic.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full mt-1">
                8
              </span>
              <div>
                <h5 className="font-semibold text-red-700 mb-1">
                  Rezistența unghiei slim & tehnica de pilire
                </h5>
                <p className="text-sm text-gray-700">
                  Cum să asiguri durabilitate în cazul unghiilor subțiri și cum
                  să le pilești corect pentru a menține forma ideală.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full mt-1">
                9
              </span>
              <div>
                <h5 className="font-semibold text-yellow-700 mb-1">
                  Fotografii de portofoliu & editare
                </h5>
                <p className="text-sm text-gray-700">
                  Sfaturi și trucuri pentru realizarea unor imagini profesionale
                  ale lucrărilor tale, perfecte pentru promovare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "beneficii",
    title: "Beneficii curs",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg">
          <h4 className="font-semibold text-emerald-800 mb-2">
            Beneficiile cursului de Tehnici de Întreținere:
          </h4>
          <p className="text-emerald-700 text-sm">
            8 avantaje concrete pentru dezvoltarea ta profesională
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-4 p-4 bg-white border border-emerald-200 rounded-lg shadow-sm">
            <div className="text-emerald-500 text-2xl">⚡</div>
            <div>
              <h5 className="font-semibold text-emerald-700 mb-1">
                Perfecționarea tehnicii și optimizarea timpului
              </h5>
              <p className="text-sm text-gray-700">
                Îți perfecționezi tehnica și optimizezi timpul de lucru, oferind
                servicii de înaltă calitate, cu valoare reală pentru clientele
                tale.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-white border border-blue-200 rounded-lg shadow-sm">
            <div className="text-blue-500 text-2xl">🎯</div>
            <div>
              <h5 className="font-semibold text-blue-700 mb-1">
                Tehnici actuale și corecte de întreținere
              </h5>
              <p className="text-sm text-gray-700">
                Înveți cele mai actuale și corecte tehnici de întreținere, cu
                accent pe ajustarea formei și structurii unghiei pentru un
                rezultat natural și de durată.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-white border border-purple-200 rounded-lg shadow-sm">
            <div className="text-purple-500 text-2xl">🏗️</div>
            <div>
              <h5 className="font-semibold text-purple-700 mb-1">
                Specializare în schimbarea arhitecturii
              </h5>
              <p className="text-sm text-gray-700">
                Te specializezi în schimbarea arhitecturii unghiei, adaptând
                forma și structura în funcție de nevoile fiecărei cliente.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-white border border-orange-200 rounded-lg shadow-sm">
            <div className="text-orange-500 text-2xl">🧰</div>
            <div>
              <h5 className="font-semibold text-orange-700 mb-1">
                Materiale complete incluse
              </h5>
              <p className="text-sm text-gray-700">
                Ai acces la toate materialele necesare, inclusiv modele pentru
                practica zilnică, astfel încât să te concentrezi doar pe
                învățare.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-white border border-green-200 rounded-lg shadow-sm">
            <div className="text-green-500 text-2xl">💬</div>
            <div>
              <h5 className="font-semibold text-green-700 mb-1">
                Consultanță continuă
              </h5>
              <p className="text-sm text-gray-700">
                Beneficiezi de consultanță continuă, printr-un grup dedicat de
                WhatsApp activ și după finalizarea cursului.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-white border border-pink-200 rounded-lg shadow-sm">
            <div className="text-pink-500 text-2xl">📸</div>
            <div>
              <h5 className="font-semibold text-pink-700 mb-1">
                Fotografii profesionale de portofoliu
              </h5>
              <p className="text-sm text-gray-700">
                Primești fotografii profesionale cu lucrările tale, ideale
                pentru a-ți construi sau actualiza portofoliul.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-white border border-yellow-200 rounded-lg shadow-sm">
            <div className="text-yellow-500 text-2xl">💰</div>
            <div>
              <h5 className="font-semibold text-yellow-700 mb-1">
                Discounturi speciale
              </h5>
              <p className="text-sm text-gray-700">
                Te bucuri de discounturi speciale pe diverse platforme de
                produse profesionale.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-white border border-indigo-200 rounded-lg shadow-sm">
            <div className="text-indigo-500 text-2xl">🎓</div>
            <div>
              <h5 className="font-semibold text-indigo-700 mb-1">
                Diplomă de participare
              </h5>
              <p className="text-sm text-gray-700">
                Primești diplomă de participare, care certifică abilitățile
                dobândite în cadrul cursului.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
          <h5 className="font-semibold text-yellow-800 mb-2">
            Materiale necesare pentru curs
          </h5>
          <p className="text-sm text-yellow-700 mb-3">
            Fiecare cursantă trebuie să aibă la ea:
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h6 className="font-medium mb-2">Instrumente de bază:</h6>
              <ul className="list-disc list-inside space-y-1">
                <li>Pusher (împingător cuticulă)</li>
                <li>Forfecuță pentru cuticulă</li>
              </ul>
            </div>

            <div>
              <h6 className="font-medium mb-2">Capete de freză:</h6>
              <ul className="list-disc list-inside space-y-1">
                <li>2 capete diamantate (granulație roșie)</li>
                <li>3 capete extradure (carbid)</li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h6 className="font-medium mb-2">Pensule pentru gel:</h6>
              <ul className="list-disc list-inside space-y-1">
                <li>Liner 5/0 (recomandat: Roubloff)</li>
                <li>Pensulă pentru gel oval 4/6</li>
                <li>Pensulă pentru Acrygel</li>
              </ul>
            </div>
          </div>

          <p className="text-xs text-yellow-600 mt-3 italic">
            * Dacă nu ai toate produsele, le poți achiziționa în prima zi,
            direct de la școală.
          </p>
        </div>
      </div>
    ),
  },
];
const MaintenanceCourse = () => {
  return (
    <>
      <div className="container flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div
          className="mt-30 relative w-full h-[500px] md:h-[320px]"
          id="home"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="absolute inset-0 opacity-40">
            <img
              src="/Courses/maintenance-cover.jpg"
              alt="Background Image"
              className="object-cover object-center w-full h-full rounded-xl shadow-lg"
            />
          </div>
          <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
            <div className=" mb-4 md:mb-0">
              <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2 montserrat-500">
                Cursul de Intreținere cu precizie și estetică
              </h1>
              <p className="font-regular text-xl mb-8 mt-4 montserrat-400 md:w-1/2">
                Acest curs avansat se adresează tehnicienelor cu experiență care
                doresc să-și perfecționeze tehnica, să învețe metode eficiente
                de corecție și întreținere și să ofere servicii premium,
                aplicabile imediat în salon.
              </p>
              <button
                onClick={() =>
                  buyCourse(
                    8,
                    "Pentru a-ți rezerva locul la cursul de intretinere, este necesar un avans de 600 de lei. După efectuarea plății, vei fi redirecționat către pagina de contact pentru a lua legătura cu noi. Suntem aici să te ghidăm în fiecare pas!"
                  )
                }
                className="w-full md:w-min whitespace-nowrap cursor-pointer transition-all duration-[0.3s] ease-in-out py-[8px] px-[10px] montserrat-400 text-base font-semibold text-white rounded-[5px] bg-[#A57865]"
              >
                Inscrie-te si tu !
              </button>
            </div>
          </div>
        </div>

        <CourseContent content={dropdownSections} price="2400RON" />

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
    </>
  );
};

export default MaintenanceCourse;
