"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import { Transition, Dialog } from "@headlessui/react";

export const SessionModal = ({ isOpen, setIsOpen, selectedUser }) => {
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 md:px-16 md:py-12 text-left align-middle shadow-xl transition-all">
                  {/* xicon */}
                  <div
                    className="absolute right-4 top-4 cursor-pointer"
                    onClick={closeModal}
                  >
                    <Image
                      width={32}
                      height={32}
                      src="/XCircle.png"
                      alt="X-Icon"
                    />
                  </div>
                  <div className="flex flex-col">
                    {/* instructor image */}
                    <div className="rounded-full w-[250px] h-[250px] overflow-hidden">
                      <Image
                        width={250}
                        height={250}
                        src={`https://www.urduitacademy.com/team/${selectedUser?.pic}`}
                        alt="Instuctor Image"
                      />
                    </div>
                    <h3 className="font-bold text-xl md:text-4xl text-[#000000] mt-[17px]">
                      {selectedUser?.name}
                    </h3>
                    <p className="font-bold text-base text-[#000000] mt-2">
                      Book a 1:1 session at 1000INR/hr
                    </p>
                    <p className="text-[#1C1C1C] font-normal text-base mt-4 md:mt-[28px]">
                      {selectedUser?.detail}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md bg-[#0063F6] px-4 py-2 md:py-4 md:px-12 text-base font-medium text-white mt-4 md:mt-[40px]"
                      onClick={closeModal}
                    >
                      Book 1on1 session
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
