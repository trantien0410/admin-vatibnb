"use client";

import LoginModal from "@/components/modal/login-modal";
import { useEffect, useState } from "react";

export const LoginProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <LoginModal />;
};
