const Modal = () => {
  return (
    <>
      <div className="bix-modal-overlay w-full h-screen hidden fixed top-0 left-0 z-[50] bg-[#00000080] blur-[2px]"></div>
      <div className="bix-modal max-[575px]:w-full fixed hidden top-[45%] max-[767px]:top-[50%] left-[50%] z-[51] max-[767px]:w-full max-[767px]:max-h-full">
        <div className="bix-modal-dialog h-full my-[0%] transition-transform duration-[0.3s] ease-out mx-auto max-w-[500px] w-[500px] max-[575px]:max-w-full max-[575px]:w-full p-[0.5rem]">
          <div className="modal-content p-[20px] bg-[#fff] rounded-[30px] relative overflow-hidden">
            <div className="modal-body">
              <div className="bix-contact-tabs">
                <ul
                  className="nav nav-tabs mb-[24px] inline-flex justify-center items-center bg-[#fff] border-[1px] border-solid border-[#111a24] rounded-[25px]"
                  id="contact_tabs"
                >
                  <li className="bix-tab-popup nav-item m-[10px] active">
                    <a
                      href="javascript:void(0)"
                      className="py-[5px] px-[15px] rounded-[15px] capitalize font-medium text-[16px] block"
                      data-id-popup="freelancer"
                    >
                      Freelancer
                    </a>
                  </li>
                  <li className="bix-tab-popup nav-item m-[10px]">
                    <a
                      href="javascript:void(0)"
                      className="py-[5px] px-[15px] rounded-[15px] capitalize font-medium text-[16px] block"
                      data-id-popup="job"
                    >
                      Job
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className="tab-contact-pane tab-popup tab-active-popup"
                    data-id-popup="freelancer"
                  >
                    <div className="w-full">
                      <form id="contact-form">
                        <div className="form-group mb-[12px]">
                          <input
                            type="text"
                            name="Name"
                            placeholder="Name"
                            className="w-full h-[50px] p-[15px] border-[1px] border-solid border-[#eae8ef] outline-[0] rounded-[20px]"
                          />
                        </div>
                        <div className="form-group mb-[12px]">
                          <input
                            type="email"
                            name="Email"
                            placeholder="Email"
                            className="w-full h-[50px] p-[15px] border-[1px] border-solid border-[#eae8ef] outline-[0] rounded-[20px]"
                          />
                        </div>
                        <div className="form-group mb-[12px]">
                          <select
                            className="form-select w-full h-[50px] p-[15px] border-[1px] border-solid border-[#eae8ef] outline-[0] rounded-[20px]"
                            aria-label="Select Method"
                          >
                            <option selected={false}>Fixed Rate</option>
                            <option value="1">Hourly Rate</option>
                          </select>
                        </div>
                        <div className="form-group mb-[12px]">
                          <input
                            name="text"
                            placeholder="Offer ex $1900"
                            type="email"
                            className="w-full h-[50px] p-[15px] border-[1px] border-solid border-[#eae8ef] outline-[0] rounded-[20px]"
                          />
                        </div>
                        <div className="form-group mb-[12px]">
                          <textarea
                            name="your-comment"
                            placeholder="Offer Letter"
                            className="w-full h-auto p-[15px] border-[1px] border-solid border-[#eae8ef] outline-[0] rounded-[20px]"
                          ></textarea>
                        </div>
                        <div className="bix-review-buttons">
                          <button
                            type="submit"
                            className="bix-button transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] font-montserrat text-[14px] font-semibold leading-[1.2] capitalize bg-[#fff] text-[#111a24] border-[1px] border-solid border-[#111a24] rounded-[15px] hover:bg-[#f41a4a] hover:border-[#f41a4a] hover:text-[#fff]"
                            value="Submit"
                          >
                            Submit
                          </button>
                          <button
                            type="button"
                            className="bix-button bix-close-modal transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] font-montserrat text-[14px] font-semibold leading-[1.2] capitalize bg-[#fff] text-[#111a24] border-[1px] border-solid border-[#111a24] rounded-[15px] hover:bg-[#f41a4a] hover:border-[#f41a4a] hover:text-[#fff]"
                          >
                            Close
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="tab-contact-pane tab-popup"
                    data-id-popup="job"
                  >
                    <div className="w-full">
                      <form>
                        <div className="form-group mb-[12px]">
                          <input
                            type="text"
                            name="Name"
                            placeholder="Name"
                            className="w-full h-[50px] p-[15px] border-[1px] border-solid border-[#eae8ef] outline-[0] rounded-[20px]"
                          />
                        </div>
                        <div className="form-group mb-[12px]">
                          <input
                            type="email"
                            name="Email"
                            placeholder="Email"
                            className="w-full h-[50px] p-[15px] border-[1px] border-solid border-[#eae8ef] outline-[0] rounded-[20px]"
                          />
                        </div>
                        <div className="form-group mb-[12px]">
                          <select
                            className="form-select w-full h-[50px] p-[15px] border-[1px] border-solid border-[#eae8ef] outline-[0] rounded-[20px]"
                            aria-label="Select Method"
                          >
                            <option selected={false}>Virtual Job</option>
                            <option value="1">Office Job</option>
                          </select>
                        </div>
                        <div className="form-group mb-[12px]">
                          <input
                            name="text"
                            placeholder="Offer Salary ex $1500/Mo"
                            type="email"
                            className="w-full h-[50px] p-[15px] border-[1px] border-solid border-[#eae8ef] outline-[0] rounded-[20px]"
                          />
                        </div>
                        <div className="form-group mb-[12px]">
                          <textarea
                            name="your-comment"
                            placeholder="Offer Letter"
                            className="w-full h-auto p-[15px] border-[1px] border-solid border-[#eae8ef] outline-[0] rounded-[20px]"
                          ></textarea>
                        </div>
                        <div className="bix-review-buttons">
                          <button
                            type="submit"
                            className="bix-button transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] font-montserrat text-[14px] font-semibold leading-[1.2] capitalize bg-[#fff] text-[#111a24] border-[1px] border-solid border-[#111a24] rounded-[15px] hover:bg-[#f41a4a] hover:border-[#f41a4a] hover:text-[#fff]"
                            value="Submit"
                          >
                            Submit
                          </button>
                          <button
                            type="button"
                            className="bix-button bix-close-modal transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] font-montserrat text-[14px] font-semibold leading-[1.2] capitalize bg-[#fff] text-[#111a24] border-[1px] border-solid border-[#111a24] rounded-[15px] hover:bg-[#f41a4a] hover:border-[#f41a4a] hover:text-[#fff]"
                          >
                            Close
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
