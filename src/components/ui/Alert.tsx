import { ReactNode } from "react";
import clsx from "clsx";

interface AlertProps {
  type: "success" | "error";
  children: ReactNode;
}

export default function Alert({ type, children }: AlertProps) {
  return (
    <div
      className={clsx(
        "rounded-lg p-4 border text-sm",
        type === "success" &&
          "bg-green-50 border-green-200 text-green-700",
        type === "error" &&
          "bg-red-50 border-red-200 text-red-700"
      )}
    >
      {children}
    </div>
  );
}
