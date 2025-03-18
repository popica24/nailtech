const Products = () => {
  return (
    <>
      {" "}
      <section
        className="section-projects py-[50px] max-[991px]:py-[40px] max-[767px]:py-[35px]"
        id="projects"
      >
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-[12px]">
              <div
                className="bix-banner mb-[30px] flex justify-center text-center max-[1199px]:mb-[25px] max-[767px]:mb-[20px]"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="400"
              >
                <h4 className="montserrat-300 text-[36px] font-bold text-[#111a24] tracking-[0.03rem] leading-[1.2] max-[1199px]:text-[32px] max-[767px]:text-[28px] max-[575px]:text-[24px]">
                  Produsele{" "}
                  <span className="text-[var(--crem-cald)]">Mele</span>
                </h4>
              </div>
              <div
                className="bix-banner-line mb-[110px]"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="600"
              >
                <span className="inner-border relative flex justify-center"></span>
              </div>
            </div>
            <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
              <div className="flex flex-wrap w-full mb-[-24px]">
                <Product name="Produs 1" description="Descriere" price="65" />
                <Product name="Produs 2" description="Descriere" price="80" />
                <Product name="Produs 3" description="Descriere" price="35" />
                <Product name="Produs 4" description="Descriere" price="70" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;

type ProductProps = {
  image?: string;
  name: string;
  description: string;
  price: string;
};

const Product = (props: ProductProps) => {
  return (
    <div className="montserrat-300 cursor-pointer mx-auto mt-11 w-80 transform overflow-hidden bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <img
        className="h-48 w-full object-cover object-center"
        src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="Product Image"
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium text-gray-900">{props.name}</h2>
        <p className="mb-2 text-base text-gray-700">{props.description}</p>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900">
            RON {props.price}
          </p>
        </div>
      </div>
    </div>
  );
};
