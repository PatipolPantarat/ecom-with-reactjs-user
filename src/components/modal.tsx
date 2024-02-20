import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button } from "./button";

interface ModalProps {
  title: string;
  description: string;
  onCancel: () => void;
  onSubmit: () => void;
  onSubmitText: string;
  openModal: boolean;
}

export const Modal = ({
  title,
  description,
  onCancel,
  onSubmit,
  onSubmitText,
  openModal,
}: ModalProps) => {
  return (
    <Transition appear show={openModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onCancel}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="text-xl font-medium text-dark text-center py-4 ">
                  {title}
                </div>
                <div className="text-dark-600  py-4 text-center">
                  {description}
                </div>
                <div className=" mt-5 flex justify-evenly items-center">
                  <Button type="button" variant="secondary" onClick={onCancel}>
                    Cancel
                  </Button>
                  <Button type="button" variant="success" onClick={onSubmit}>
                    {onSubmitText}
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

interface FormModalProps {
  title: string;
  children: React.ReactNode;
  onCancel: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onSubmitText: string;
  openModal: boolean;
}

export const FormModal = ({
  title,
  children,
  onCancel,
  onSubmit,
  onSubmitText,
  openModal,
}: FormModalProps) => {
  return (
    <Transition appear show={openModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onCancel}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <form onSubmit={(e) => onSubmit(e)}>
                  <div className="text-xl font-medium text-dark text-center py-4 ">
                    {title}
                  </div>
                  <div className="text-dark-600  py-4 text-center">
                    {children}
                  </div>
                  <div className=" mt-5 flex justify-evenly items-center">
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={onCancel}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" variant="success">
                      {onSubmitText}
                    </Button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
