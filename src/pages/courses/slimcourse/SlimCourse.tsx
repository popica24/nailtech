import CourseContent from "../../../components/CourseContent";
import Footer from "../../../layout/components/Footer";

const dropdownSections = [
  {
    key: "descriere",
    title: "Descriere",
    content: (
      <div className="space-y-4">
        <p className="font-semibold">
          Cursul SLIM este pentru tine dacă vrei mai mult decât unghii frumoase
          – vrei unghii corecte, durabile și tehnic impecabile.
        </p>

        <p>
          Nu este doar un nou trend – este o tehnică esențială, care pune accent
          pe eleganță, structură corectă și execuție impecabilă. Cursul SLIM te
          învață cum să construiești unghii subțiri, durabile și perfect
          echilibrate – exact ce își doresc clientele moderne.
        </p>

        <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg border-l-4 border-pink-400">
          <h4 className="font-semibold text-pink-800 mb-3">
            De ce să alegi cursul SLIM?
          </h4>
          <p className="text-pink-700 text-sm">
            Acest curs este conceput pentru tehnicieni care vor să-și
            perfecționeze abilitățile și să ofere clientelor o experiență
            premium cu rezultate impecabile din punct de vedere tehnic și
            estetic.
          </p>
        </div>

        <h4 className="font-semibold mt-6 mb-3">
          Pentru cine este acest curs?
        </h4>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Tehnicienii care vor să învețe să construiască unghii subțiri și
            elegante
          </li>
          <li>
            Profesioniștii care vor să reducă timpul de lucru prin tehnici
            avansate
          </li>
          <li>
            Cei care vor să ofere servicii premium și să-și diferențieze munca
          </li>
          <li>
            Tehnicienii care vor să-și crească prețurile prin oferirea unei
            tehnici superioare
          </li>
          <li>
            Cei care vor să lucreze cu precizie și să controleze perfect fiecare
            detaliu
          </li>
        </ul>

        <div className="mt-6 p-4 bg-amber-50 rounded-lg">
          <p className="text-sm italic text-amber-800">
            Totul este explicat și demonstrat pas cu pas – tehnică, structură,
            rezistență. Fiecare detaliu contează, iar tu vei avea controlul
            asupra fiecărei forme.
          </p>
        </div>
      </div>
    ),
  },
  {
    key: "program",
    title: "Programa de curs",
    content: (
      <div className="space-y-6">
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-semibold text-purple-800 mb-2">
            ZIUA 1: CONSTRUCȚIE PE ȘABLON DINTR-UN SINGUR PAS
          </h4>
          <p className="text-purple-700 font-medium">MANICHIURĂ SLIM</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-700 italic">
            Programul este intensiv și se concentrează pe perfecționarea
            tehnicii SLIM într-o singură zi, cu accent pe practică hands-on și
            detalii tehnice avansate.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <h5 className="font-semibold text-indigo-700 mb-3">
            Structura zilei de curs:
          </h5>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Demonstrație teoretică și practică a tehnicii SLIM</li>
            <li>Construcție ghidată pe șablon dintr-un singur pas</li>
            <li>Practică individuală cu feedback constant</li>
            <li>Perfecționarea detaliilor și finisajelor</li>
            <li>Analiza rezultatelor și recomandări personalizate</li>
          </ul>
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
          Vei lucra cu precizie și vei înțelege în profunzime:
        </p>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h5 className="font-semibold text-indigo-700 mb-3">
              Fundamentele arhitecturii SLIM
            </h5>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>
                <strong>Planurile și axele unghiei</strong> – baza unei
                arhitecturi corecte
              </li>
              <li>
                <strong>Simetria</strong> și cum să o adaptezi în funcție de
                patul unghial
              </li>
              <li>
                <strong>Dozarea materialului</strong> – pentru echilibru estetic
                și rezistență
              </li>
              <li>
                <strong>Arhitectura unghiei naturale</strong>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h5 className="font-semibold text-indigo-700 mb-3">
              Tehnici de aplicare și modelaj
            </h5>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>
                <strong>Modelarea acrygelului dintr-un singur pas</strong>
              </li>
              <li>
                <strong>Tehnica fără pilire</strong> – pentru viteză și
                eficiență
              </li>
              <li>
                <strong>Alegerea și poziționarea corectă a șablonului</strong>{" "}
                pentru forma slim
              </li>
              <li>
                <strong>Unghia SLIM clear</strong> – modelarea cu acrygel
                transparent, cea mai provocatoare formă de control a
                materialului
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h5 className="font-semibold text-indigo-700 mb-3">
              Tehnici avansate de pilire
            </h5>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>
                <strong>Pilirea pe unghia slim</strong>
              </li>
              <li>
                <strong>Pilirea subunghială</strong>
              </li>
              <li>
                <strong>Pilirea laterale inferioare</strong>
              </li>
              <li>
                <strong>Continuitatea punctelor de creștere</strong>
              </li>
              <li>
                <strong>Verificarea cu lupa</strong> a fiecărui detaliu
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h5 className="font-semibold text-indigo-700 mb-3">
              Control și finisare
            </h5>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>
                <strong>Controlul apexului și al grosimii</strong> – pentru
                echilibru și finețe
              </li>
              <li>
                <strong>Soluții pentru paturi unghiale dificile</strong> – exact
                cum întâlnim în salon
              </li>
              <li>
                <strong>Corectarea greșelilor invizibile</strong> care fac
                diferența
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h6 className="font-semibold text-blue-800 mb-2">
            Accent special pe:
          </h6>
          <p className="text-blue-700 text-sm">
            Tehnica SLIM clear cu acrygel transparent - considerată cea mai
            provocatoare formă de control a materialului, care demonstrează
            adevărata măiestrie tehnică.
          </p>
        </div>
      </div>
    ),
  },
  {
    key: "beneficii",
    title: "Beneficii curs",
    content: (
      <div className="space-y-6">
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold text-green-800 mb-3">
            Ce valoare aduce în munca de salon?
          </h4>
        </div>

        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <h5 className="font-semibold text-green-700 mb-2">
              Eficiență și productivitate
            </h5>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>
                <strong>Reduci timpul de pilire</strong> – mai puțin efort, mai
                multă eficiență
              </li>
              <li>
                <strong>Înveți să optimizezi timpul de lucru</strong>
              </li>
              <li>
                <strong>Oferi un rezultat subțire, elegant și rezistent</strong>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="font-semibold text-blue-700 mb-2">
              Diferențiere și calitate premium
            </h5>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>
                <strong>Oferi diferența prin detalii</strong> – designuri
                impecabile și structură premium
              </li>
              <li>
                <strong>Atragi clientele care caută rafinament</strong>
              </li>
              <li>
                <strong>Poți crește prețurile pe merit</strong> – tehnica SLIM
                este un plus real în portofoliul tău
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h5 className="font-semibold text-purple-700 mb-2">
              Dezvoltare profesională
            </h5>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>
                <strong>Corectezi greșelile invizibile</strong> care fac
                diferența
              </li>
              <li>
                <strong>Îți crești încrederea și perfecționezi tehnica</strong>
              </li>
              <li>
                <strong>
                  Adaugi o tehnică de top în portofoliul tău profesional
                </strong>
              </li>
            </ul>
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
                <li>Flacără, diametru 2.1</li>
                <li>Glonte (pentru prelucrarea cuticulei)</li>
                <li>3 capete extradure (carbid)</li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h6 className="font-medium mb-2">Pensule specializate:</h6>
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
  {
    key: "politici",
    title: "Politica de plată și participare",
    content: (
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
    ),
  },
];
const SlimCourse = () => {
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
              src="/Courses/slim-cover.jpg"
              alt="Background Image"
              className="object-cover object-center w-full h-full rounded-xl shadow-lg"
            />
          </div>
          <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
            <div className=" mb-4 md:mb-0">
              <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2 montserrat-500">
                Cursul de Slim
              </h1>
              <p className="font-regular text-xl mb-8 mt-4 montserrat-400 md:w-1/2">
                Nu este doar un nou trend – este o tehnică esențială, care pune
                accent pe eleganță, structură corectă și execuție impecabilă.
                Cursul SLIM te învață cum să construiești unghii subțiri,
                durabile și perfect echilibrate
              </p>
              <a
                href="https://wa.me/+40749095803?text=Buna%20%21%20Legat%20de%20cursul%20de%20slim%2C%20ma%20numesc..."
                className="w-full cursor-pointer transition-all duration-[0.3s] ease-in-out py-[8px] px-[10px] montserrat-400 text-base font-semibold text-white rounded-[5px] bg-[#A57865]"
              >
                Inscrie-te si tu !
              </a>
            </div>
          </div>
        </div>

        <CourseContent content={dropdownSections} price={"1000RON"} />

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

export default SlimCourse;
