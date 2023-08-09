"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("206b5249-cb0a-4277-97a4-87cba679e61d");
  }, []);

  return null;
};
