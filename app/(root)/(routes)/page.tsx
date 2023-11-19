"use client";

import { useLoginModal } from "@/hooks/useLoginModal";
import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = useLoginModal((state) => state.onOpen);
  const isOpen = useLoginModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
};

export default SetupPage;
