import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo, updateUserAsync } from "../features/user/userSlice";

function AddressForm({ open, setOpen, selectedAddress, addressIndex }) {
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const closeModal = () => {
    setOpen(false);
  };

  const handleEdit = (addressUpdate) => {
    const newUser = {...user, addresses: [...user.addresses]}
    newUser.addresses.splice(addressIndex, 1, addressUpdate)
    dispatch(updateUserAsync(newUser))
  }

  useEffect(() => {
    if (selectedAddress) {
      setValue('name', user.addresses[addressIndex].name);
      setValue('mobileNumber', user.addresses[addressIndex].mobileNumber);
      setValue('pincode', user.addresses[addressIndex].pincode);
      setValue('state', user.addresses[addressIndex].state);
      setValue('city', user.addresses[addressIndex].city);
      setValue('street', user.addresses[addressIndex].street);
      setValue('area', user.addresses[addressIndex].area);
    }
  }, [selectedAddress, user?.addresses, addressIndex]);

  return (
    <>
      {selectedAddress ? (
        <>
          {open && (
            <div className="fixed inset-0 z-10 flex items-center justify-center overflow-hidden bg-gray-500 bg-opacity-75">
              <div className="relative w-full h-full max-w-3xl p-8 bg-white rounded-lg shadow-xl transform transition-all">
                <div className="absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="relative rounded-md text-black font-bold hover:text-gray-500"
                    onClick={closeModal}
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className=" overflow-y-auto">
                  <div className="text-base font-semibold leading-6 text-gray-900">
                    Edit Address
                  </div>
                  <div className="mt-4">
                    <form
                      className=" flex flex-col w-full"
                      onSubmit={handleSubmit((data) => {
                        handleEdit(data)
                        // reset();
                        setOpen(false)
                      })}
                    >
                      <div className=" relative">
                        <input
                          type="text"
                          name="country"
                          id="country"
                          placeholder="India"
                          disabled
                          className=" w-full border-[1px] border-[#ccc] rounded-md outline-none pl-10 cursor-not-allowed"
                        />
                        <label
                          className=" absolute text-[11px] font-Montserrat font-bold text-gray-400 bg-white top-[-10px] left-3 px-1"
                          htmlFor="country"
                        >
                          Country
                        </label>
                        <img
                          src="https://th.bing.com/th/id/R.607b9f69862d76af04b474113c0c7ff5?rik=lfnOsbv7mhDNbQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fb%2fbc%2fFlag_of_India.png&ehk=Pk5lH0C%2fhstFahWfb15vLjtrJb3DslIU4%2fAQneo9IIM%3d&risl=&pid=ImgRaw&r=0"
                          alt="country"
                          className=" absolute top-2 left-2 rounded-full h-6 w-6"
                        />
                      </div>
                      <div className=" h-[1px] w-full mt-8 mb-8 bg-[#ddd]"></div>
                      <div className=" relative">
                        <input
                          type="text"
                          {...register("name", {
                            required: "Name is required",
                          })}
                          id="name"
                          className=" w-full border-[1px] border-[#ccc] focus:ring-0 focus:border-black rounded-md outline-none "
                        />
                        <label
                          className=" absolute text-[12px] font-Montserrat font-bold text-black bg-white top-[-10px] left-3 px-1"
                          htmlFor="name"
                        >
                          Full Name
                        </label>
                      </div>
                      <div className=" relative mt-6">
                        <input
                          type="text"
                          {...register("mobileNumber", {
                            required: "Mobile Number is required",
                          })}
                          id="mobileNumber"
                          maxLength={10}
                          className=" w-full border-[1px] border-[#ccc] focus:ring-0 focus:border-black rounded-md outline-none py-3 pl-20"
                        />
                        <label
                          className=" absolute text-[12px] font-Montserrat font-bold text-black bg-white top-[-10px] left-3 px-1"
                          htmlFor="name"
                        >
                          Mobile Number
                        </label>
                        <div className="absolute top-2 left-2 flex items-center text-[#878787] bg-[#f7f7f7] rounded-md p-1">
                          <img
                            src="https://th.bing.com/th/id/R.607b9f69862d76af04b474113c0c7ff5?rik=lfnOsbv7mhDNbQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fb%2fbc%2fFlag_of_India.png&ehk=Pk5lH0C%2fhstFahWfb15vLjtrJb3DslIU4%2fAQneo9IIM%3d&risl=&pid=ImgRaw&r=0"
                            alt="country"
                            className=" rounded-full h-5 w-5"
                          />
                          <span>+91</span>
                        </div>
                      </div>
                      <div className=" h-[1px] w-full mt-8 mb-8 bg-[#ddd]"></div>
                      <div className=" relative">
                        <input
                          type="text"
                          {...register("pincode", {
                            required: "Pincode is required",
                          })}
                          id="pincode"
                          maxLength="6"
                          className=" w-full border-[1px] border-[#ccc] focus:ring-0 focus:border-black rounded-md outline-none "
                        />
                      </div>
                      <div className=" flex gap-3 mt-6">
                        <input
                          type="text"
                          {...register("city", {
                            required: "City is required",
                          })}
                          id="city"
                          className=" w-full border-[1px] border-[#ccc] focus:ring-0 focus:border-black rounded-md outline-none "
                        />
                        <input
                          type="text"
                          {...register("state", {
                            required: "state is required",
                          })}
                          id="state"
                          className=" w-full border-[1px] border-[#ccc] focus:ring-0 focus:border-black rounded-md outline-none "
                        />
                      </div>
                      <div className=" flex mt-6">
                        <input
                          type="text"
                          {...register("street", {
                            required:
                              "Flat no/Building, Street name is required",
                          })}
                          id="street"
                          className=" w-full border-[1px] border-[#ccc] focus:ring-0 focus:border-black rounded-md outline-none mr-4"
                        />
                      </div>
                      <div className=" flex mt-6">
                        <input
                          type="text"
                          {...register("area", {
                            required: "Area is required",
                          })}
                          id="area"
                          className=" w-full border-[1px] border-[#ccc] focus:ring-0 focus:border-black rounded-md outline-none mr-4"
                        />
                      </div>
                      <div className=" flex mt-6 mx-24 gap-5">
                        <button
                          type="submit"
                          value="submit"
                          className=" w-full bg-[#42a2a2] text-white font-Montserrat py-3 rounded-md"
                        >
                          Save Address
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          {open && (
            <div className="fixed inset-0 z-10 flex items-center justify-center overflow-hidden bg-gray-500 bg-opacity-75">
              <div className="relative w-full h-full max-w-3xl p-8 bg-white rounded-lg shadow-xl transform transition-all">
                <div className="absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="relative rounded-md text-black font-bold hover:text-gray-500"
                    onClick={closeModal}
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className=" overflow-y-auto">
                  <div className="text-base font-semibold leading-6 text-gray-900">
                    Add New Address
                  </div>
                  <div className="mt-4">
                    <form
                      className=" flex flex-col w-full"
                      onSubmit={handleSubmit((data) => {
                        dispatch(
                          updateUserAsync({
                            ...user,
                            addresses: [...user.addresses, data],
                          })
                        );
                        reset();
                        setOpen(false)
                      })}
                    >
                      <div className=" relative">
                        <input
                          type="text"
                          name="country"
                          id="country"
                          placeholder="India (selected)"
                          disabled
                          className=" w-full border-[1px] border-[#ccc] rounded-md outline-none pl-10 cursor-not-allowed"
                        />
                        <label
                          className=" absolute text-[11px] font-Montserrat font-bold text-gray-400 bg-white top-[-10px] left-3 px-1"
                          htmlFor="country"
                        >
                          Country
                        </label>
                        <img
                          src="https://th.bing.com/th/id/R.607b9f69862d76af04b474113c0c7ff5?rik=lfnOsbv7mhDNbQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fb%2fbc%2fFlag_of_India.png&ehk=Pk5lH0C%2fhstFahWfb15vLjtrJb3DslIU4%2fAQneo9IIM%3d&risl=&pid=ImgRaw&r=0"
                          alt="country"
                          className=" absolute top-2 left-2 rounded-full h-6 w-6"
                        />
                      </div>
                      <div className=" h-[1px] w-full mt-8 mb-8 bg-[#ddd]"></div>
                      <div className=" relative">
                        <input
                          type="text"
                          {...register("name", {
                            required: "Name is required",
                          })}
                          id="name"
                          placeholder="Name Surname"
                          className=" w-full border-[1px] border-[#ccc] focus:ring-0 focus:border-black rounded-md outline-none "
                        />
                        <label
                          className=" absolute text-[12px] font-Montserrat font-bold text-black bg-white top-[-10px] left-3 px-1"
                          htmlFor="name"
                        >
                          Full Name
                        </label>
                      </div>
                      <div className=" relative mt-6">
                        <input
                          type="text"
                          {...register("mobileNumber", {
                            required: "Mobile Number is required",
                          })}
                          id="mobileNumber"
                          placeholder="Mobile Number"
                          maxLength={10}
                          className=" w-full border-[1px] border-[#ccc] focus:ring-0 focus:border-black rounded-md outline-none py-3 pl-20"
                        />
                        <label
                          className=" absolute text-[12px] font-Montserrat font-bold text-black bg-white top-[-10px] left-3 px-1"
                          htmlFor="name"
                        >
                          Mobile Number
                        </label>
                        <div className="absolute top-2 left-2 flex items-center text-[#878787] bg-[#f7f7f7] rounded-md p-1">
                          <img
                            src="https://th.bing.com/th/id/R.607b9f69862d76af04b474113c0c7ff5?rik=lfnOsbv7mhDNbQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fb%2fbc%2fFlag_of_India.png&ehk=Pk5lH0C%2fhstFahWfb15vLjtrJb3DslIU4%2fAQneo9IIM%3d&risl=&pid=ImgRaw&r=0"
                            alt="country"
                            className=" rounded-full h-5 w-5"
                          />
                          <span>+91</span>
                        </div>
                      </div>
                      <div className=" h-[1px] w-full mt-8 mb-8 bg-[#ddd]"></div>
                      <div className=" relative">
                        <input
                          type="text"
                          {...register("pincode", {
                            required: "Pincode is required",
                          })}
                          id="pincode"
                          maxLength="6"
                          placeholder="Pincode/Postal Code/Zipcode"
                          className=" w-full border-[1px] border-[#ccc] focus:ring-0 focus:border-black rounded-md outline-none "
                        />
                      </div>
                      <div className=" flex gap-3 mt-6">
                        <input
                          type="text"
                          {...register("city", {
                            required: "City is required",
                          })}
                          id="city"
                          placeholder="City"
                          className=" w-full border-[1px] border-[#ccc] focus:ring-0 focus:border-black rounded-md outline-none "
                        />
                        <input
                          type="text"
                          {...register("state", {
                            required: "state is required",
                          })}
                          id="state"
                          placeholder="State"
                          className=" w-full border-[1px] border-[#ccc] focus:ring-0 focus:border-black rounded-md outline-none "
                        />
                      </div>
                      <div className=" flex mt-6">
                        <input
                          type="text"
                          {...register("street", {
                            required:
                              "Flat no/Building, Street name is required",
                          })}
                          id="street"
                          placeholder="Flat no/Building, Street name"
                          className=" w-full border-[1px] border-[#ccc] focus:ring-0 focus:border-black rounded-md outline-none"
                        />
                      </div>
                      <div className=" flex mt-6">
                        <input
                          type="text"
                          {...register("area", {
                            required: "Area is required",
                          })}
                          id="area"
                          placeholder="Area/Locality"
                          className=" w-full border-[1px] border-[#ccc] focus:ring-0 focus:border-black rounded-md outline-none"
                        />
                      </div>
                      <div className=" flex mt-6 mx-6 gap-5 sm:mx-12 md:mx-24">
                        <button
                          type="submit"
                          value="submit"
                          className=" w-full bg-[#42a2a2] text-white font-Montserrat py-3 rounded-md"
                        >
                          Save Address
                        </button>
                        <button
                          onClick={() => reset()}
                          className=" w-full bg-white text-[#42a2a2] font-Montserrat border-[1px] border-[#42a2a2] rounded-md"
                        >
                          Cancle
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default AddressForm;
