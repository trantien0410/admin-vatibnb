"use client";

import LoginModal from "@/components/modal/loginModal";
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
