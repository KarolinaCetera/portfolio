export type Project = {
  id: string;
  name: string;
  type: string;
  status: string;
  description: string;
};

export type TechElementType = {
  name: string;
  description: string;
  icon: string;
};

export type ExperienceElementType = {
  _id?: string;
  companyName: string;
  period: string;
  stack: string;
  points: string[];
};
