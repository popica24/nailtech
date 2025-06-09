import CourseContent from "../../../components/CourseContent";
import Footer from "../../../layout/components/Footer";
const dropdownSections = [
  {
    key: "descriere",
    title: "Descriere",
    content: (
      <div className="space-y-4 overflow-y-scroll">
        <p className="font-semibold">
          Cursul de bază - nivel 1 nu este doar o simplă oportunitate de
          învățare – este un pas spre realizarea visurilor tale!
        </p>
        <p>
          Cu o structură bine gândită și informații valoroase, vei dobândi
          abilități esențiale care îți vor transforma complet perspectiva și
          cariera.
        </p>

        <h4 className="font-semibold mt-6 mb-3">De ce să alegi acest curs?</h4>
        <ul className="list-disc list-inside space-y-2 text-[#333]">
          <li>
            <strong>Cunoștințe valoroase</strong> – Dobândești informații care
            te vor ajuta să crești în domeniul tău de interes
          </li>
          <li>
            <strong>Suport constant</strong> – Voi fi alături de tine la fiecare
            pas, ghidându-te să aplici ceea ce înveți în viața reală
          </li>
          <li>
            <strong>Dezvoltare personală</strong> – Nu este doar despre
            abilități tehnice, ci și despre încrederea în tine și curajul de
            a-ți urma visurile
          </li>
        </ul>

        <h4 className="font-semibold mt-6 mb-3">
          Cui se adresează acest curs?
        </h4>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Începători</strong> – persoane fără experiență anterioară,
            care vor să pornească o carieră în domeniul manichiurii
          </li>
          <li>
            <strong>Tehnicieni la început de drum</strong> – care își doresc să
            învețe corect, de la zero, după cele mai noi metode din industrie
          </li>
          <li>
            <strong>Profesioniști cu experiență</strong> – care vor să-și
            actualizeze și consolideze cunoștințele de bază, pentru o tehnică
            mai eficientă și precisă
          </li>
        </ul>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm italic">
            Acesta nu este doar un curs, este o investiție în tine, în viitorul
            tău și în succesul tău pe termen lung!
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
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2">
            5 zile intensive | Tehnică fără pilire
          </h4>
          <p className="text-sm text-blue-700">
            Program de desfășurare: 10:00 – 17:00 / 18:00 / 19:00
          </p>
          <p className="text-sm text-blue-700">
            Organizare practică: Se va lucra 1 model la 2 cursante, respectiv
            fiecare cursantă va lucra o mână pe zi
          </p>
        </div>

        <div className="space-y-4">
          <div className="border-l-4 border-purple-500 pl-4">
            <h5 className="font-semibold text-purple-700">ZIUA 1</h5>
            <ul className="list-disc list-inside space-y-1 text-sm mt-2">
              <li>Aplicarea bazei Rubber Base cu Apex pe unghia naturală</li>
              <li>Tehnica fără pilire, cu rezistență de până la 4 săptămâni</li>
              <li className="italic">
                * fiecare cursantă lucrează pe propria mână
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h5 className="font-semibold text-purple-700">ZIUA 2</h5>
            <ul className="list-disc list-inside space-y-1 text-sm mt-2">
              <li>Construcție pe șablon – formă pătrat natural</li>
              <li>Tehnica fără pilire aplicată în construcție</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h5 className="font-semibold text-purple-700">ZIUA 3</h5>
            <ul className="list-disc list-inside space-y-1 text-sm mt-2">
              <li>Construcție pe șablon – formă oval clasic</li>
              <li>Perfecționarea formei și a proporțiilor</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h5 className="font-semibold text-purple-700">ZIUA 4</h5>
            <ul className="list-disc list-inside space-y-1 text-sm mt-2">
              <li>Întreținere cu tipsuri reutilizabile</li>
              <li>Realizarea formei oval slim și tehnica Babyboomer</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h5 className="font-semibold text-purple-700">ZIUA 5</h5>
            <ul className="list-disc list-inside space-y-1 text-sm mt-2">
              <li>Întreținere cu schimbarea arhitecturii</li>
              <li>
                Aplicarea unui design la alegere, în funcție de stilul cursantei
              </li>
            </ul>
          </div>
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
          Pe parcursul celor 5 zile, vei dobândi cunoștințe teoretice și
          practice esențiale, structurate clar, pentru o bază solidă în cariera
          ta de tehnician unghii:
        </p>

        <div className="space-y-5">
          <div className="border border-gray-200 rounded-lg p-4">
            <h5 className="font-semibold text-indigo-700 mb-3">
              1. Organizarea și igiena spațiului de lucru
            </h5>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Amenajarea corectă a spațiului</li>
              <li>Norme de igienă, dezinfectare și sterilizare</li>
              <li>Instrumentar metalic și nemetalic</li>
              <li>Clasificarea biturilor, pilelor și bufferelor</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h5 className="font-semibold text-indigo-700 mb-3">
              2. Cunoașterea materialelor și echipamentelor
            </h5>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Aparatura electronică și modul de utilizare</li>
              <li>Materiale tehnice: tipuri, clasificare și alegere corectă</li>
              <li>Sisteme de gel și procesul de polimerizare</li>
              <li>Cauzele exfolierii și cum obținem aderență optimă</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h5 className="font-semibold text-indigo-700 mb-3">
              3. Anatomie și stilizare
            </h5>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Anatomia și fiziologia degetului</li>
              <li>Tipuri de cuticulă și metode de stilizare</li>
              <li>Faldurile laterale: stilizare și tipologii</li>
              <li>Patul unghial: recunoaștere și adaptare tehnică</li>
              <li>Curbura C, axele unghiei, puncte de reper</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h5 className="font-semibold text-indigo-700 mb-3">
              4. Tehnici de construcție și întreținere
            </h5>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>
                Aplicarea bazei rubber / gel autonivelant în tehnica fără pilire
              </li>
              <li>Tipuri de apex și importanța acestuia</li>
              <li>Aplicarea culorii perfect sub cuticulă</li>
              <li>Tehnici de pilire corectă și remodelare</li>
              <li>Corecția unghiilor cu tendință de creștere în jos</li>
              <li>Zona de stres și durabilitatea construcției</li>
              <li>Măsurarea unghiilor pentru un rezultat armonios</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h5 className="font-semibold text-indigo-700 mb-3">
              5. Tehnici avansate și design
            </h5>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Tehnica babyboomer și french</li>
              <li>
                Construcții cu șabloane – adaptarea decupajului la forma patului
                unghial
              </li>
              <li>Tipsuri reutilizabile – utilizare corectă și eficientă</li>
              <li>
                Întreținere cu schimbare de arhitectură și design personalizat
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h5 className="font-semibold text-indigo-700 mb-3">
              6. Elemente de business și promovare
            </h5>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Noțiuni de promovare în mediul online</li>
              <li>Tipologii de clienți și gestionarea situațiilor dificile</li>
              <li>Cum să realizezi și să editezi fotografii de portofoliu</li>
              <li>Lista completă de produse necesare pentru început</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h5 className="font-semibold text-indigo-700 mb-3">
              7. Psihologie, branding personal și promovare
            </h5>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>
                Psihologia clientului – cum creezi o experiență plăcută și
                fidelizezi clientele
              </li>
              <li>
                Formarea listei de prețuri – cum îți calculezi corect munca și
                valoarea
              </li>
              <li>
                Promovare în Social Media – strategii eficiente de conținut,
                postare și creștere organică
              </li>
              <li>
                Fotografii Instagramabile – cum realizezi imagini care vând
              </li>
              <li>Tehnici de fotografiere și cadre ideale</li>
              <li>Instrumente de editare</li>
              <li>Cum arată un portofoliu profesional și convingător</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "beneficii",
    title: "Beneficii curs",
    content: (
      <div className="space-y-4">
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="font-semibold text-green-800 mb-2">
            Ca să fii un tehnician bun, trebuie să ai o bază bună.
          </p>
          <p className="text-green-700 text-sm">
            De aici începe totul – cu tehnici corecte, explicații clare și
            practică reală. Pentru că succesul nu e întâmplător, ci se
            construiește pas cu pas.
          </p>
        </div>

        <p>
          Cursul BAZĂ – Nivel 1 este creat pentru a-ți oferi exact acea
          fundație: clară, detaliată și practică. Iată ce beneficii vei avea:
        </p>

        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>Înveți totul de la zero</strong>, fără să fie nevoie de
            experiență anterioară
          </li>
          <li>
            <strong>Material complet și detaliat</strong> – Nu vei primi doar
            niște simple notițe, ci un material complet, construit din
            experiență reală, cu explicații clare, exemple concrete și scheme
            care te vor ajuta să înțelegi cu adevărat fiecare pas
          </li>
          <li>
            <strong>Diplomă acreditată</strong> eliberată la cerere (autorizată
            de Ministerul Muncii)
          </li>
          <li>
            <strong>Coduri de reducere</strong> pentru achiziții de produse
            profesionale de pe site-uri partenere
          </li>
          <li>
            <strong>Suport post-curs garantat</strong> – rămân alături de tine
            pentru orice întrebare sau provocare, chiar și după finalizarea
            cursului
          </li>
          <li>
            <strong>Tehnici de salon aplicabile</strong> – Vei învăța toate
            tehnicile de salon, aplicabile în viața reală și utile imediat
          </li>
          <li>
            <strong>Secrete pentru rezultate impecabile</strong> – Descoperi
            secretele unor rezultate impecabile și cum să le reproduci constant
          </li>
          <li>
            <strong>Lucru profesionist</strong> – Înveți să lucrezi
            profesionist, cu viziune, siguranță și eficiență
          </li>
          <li>
            <strong>Toate informațiile esențiale</strong> pentru succesul tău în
            acest domeniu
          </li>
        </ul>

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
                <li>Pensulă „limbă de pisică"</li>
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
    key: "acte",
    title: "Acte necesare diplomă acreditată",
    content: (
      <div className="space-y-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h5 className="font-semibold text-blue-800 mb-3">
            Condiții obligatorii pentru înscriere:
          </h5>
          <ul className="list-disc list-inside space-y-2 text-blue-700">
            <li>
              <strong>Vârsta minimă:</strong> 18 ani împliniți
            </li>
            <li>
              <strong>Studii:</strong> liceul finalizat (cu sau fără
              Bacalaureat)
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">
            Pentru eliberarea diplomei acreditate de către Ministerul Muncii,
            este necesar să pregătești următoarele documente (în copie):
          </h5>

          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Cartea de identitate (CI)</strong>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Certificatul de naștere</strong>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Certificatul de căsătorie</strong> (dacă este cazul)
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Ultima diplomă de studii</strong> (minim liceul absolvit
                – cu sau fără diplomă de Bacalaureat)
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Adeverință medicală</strong> de la medicul de familie,
                cu mențiunea: „Apt pentru curs"
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h6 className="font-medium text-gray-800 mb-2">
            Ce punem noi la dispoziție:
          </h6>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li>
              <strong>Aparatură profesională</strong> – echipamente moderne și
              performante
            </li>
            <li>
              <strong>Produse de lucru</strong> – materiale consumabile și
              produse tehnice de calitate
            </li>
            <li>
              <strong>Sprijin constant</strong> – suport tehnic și ghidare pas
              cu pas în timpul exercițiilor
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];
const BaseCourse = () => {
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
              src="/Courses/baza-cover.jpg"
              alt="Background Image"
              className="object-cover object-center w-full h-full rounded-xl shadow-lg"
            />
          </div>
          <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
            <div className=" mb-4 md:mb-0">
              <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2 montserrat-500">
                Cursul de baza - Nivel Incepator
              </h1>
              <p className="font-regular text-xl mb-8 mt-4 montserrat-400 md:w-1/2">
                Nu este doar o simplă oportunitate de învățare – este un pas
                spre realizarea visurilor tale! Cu o structură bine gândită și
                informații valoroase, vei dobândi abilități esențiale care îți
                vor transforma complet perspectiva și cariera.
              </p>
              <a
                href="https://wa.me/+40749095803?text=Buna%20%21%20Legat%20de%20cursul%20de%20baza%2C%20nivel%20incepator%2C%20ma%20numesc..."
                className="w-full cursor-pointer transition-all duration-[0.3s] ease-in-out py-[8px] px-[10px] montserrat-400 text-base font-semibold text-white rounded-[5px] bg-[#A57865]"
              >
                Inscrie-te si tu !
              </a>
            </div>
          </div>
        </div>

        <CourseContent content={dropdownSections} price={"2400RON"} />

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
                  <div className="max-w-full mx-auto rounded-lg">
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

export default BaseCourse;
