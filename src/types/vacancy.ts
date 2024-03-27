import { StaticImageData } from "next/image";

export type Vacancy = {
  id: number;
  unique_id: number;
  company_logo?: StaticImageData;
  duration?: string;
  payment_period?: string;
  experience?: string;
  company_name: string | null;
  title: string | null;
  salary: string | null;
  agency: number | null;
  description: string | null;
  location: string | null;
  created_at: string;
};
