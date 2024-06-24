"use client";
import Modal from "./Modal";
import { Suspense } from "react";
import Form from "./Form";
import { useSearchParams } from "next/navigation";

function ModalContent() {
  const searchParams = useSearchParams();
  const modalOpen = searchParams.has("join");

  return (
    <Modal isOpen={modalOpen}>
      <Form />
    </Modal>
  );
}

export default ModalContent;
