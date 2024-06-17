"use client";
import Modal from "./Modal";
import { Suspense } from "react";
import Form from "./Form";
import { useSearchParams } from "next/navigation";

function ModalContent() {
  const searchParams = useSearchParams();
  const modalOpen = searchParams.has("join");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Modal isOpen={modalOpen}>
        <Form />
      </Modal>
    </Suspense>
  );
}
export default ModalContent;
