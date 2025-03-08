// src/components/ui/use-toast.ts
import { useToast as useShadcnToast } from "@/components/ui/use-toast"; // Adjust the import based on your project structure

// Define the return type for useToast
type UseToastReturn = {
  toast: (options: { title: string; description: string; variant?: "default" | "destructive" }) => void;
};

// Define the toast function
export const toast = useShadcnToast().toast;

// Define the useToast hook with an explicit return type
export const useToast = (): UseToastReturn => {
  return useShadcnToast();
};