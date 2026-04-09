export type Project = {
  id: string;
  cat: string;
  year: string;
  title: string;
  desc: string;
  tags: string[];
  filter: ('ecommerce' | 'corporate' | 'app' | 'ux')[];
  challenge: string;
  solution: string;
  type: string;
  image?: string;
};

export type Skill = {
  name: string;
  pct: number;
};