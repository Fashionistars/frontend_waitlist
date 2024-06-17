"use client";
import React, { useRef, useEffect } from "react";

const Modal = ({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (isOpen && dialog) {
      dialog.showModal();
    } else if (dialog?.open) {
      dialog.setAttribute("closing", "");
      dialog.addEventListener(
        "animationend",
        () => {
          dialog.close();
          dialog.removeAttribute("closing");
        },
        { once: true }
      );
    }

    return () => {
      if (dialog?.open) {
        dialog.close();
      }
    };
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className="dialog w-full p-2 md:p-6 max-w-4xl hide_scrollbar z-50 outline-none rounded-xl backdrop:bg-black/70 bg-transparent transform transition-all duration-300 ease-in-out max-h-full"
    >
      <div
        className="relative overflow-auto max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
