export type BlogPost = {
  id: number;
  slug: string;
  img: string;
  date: string;
  category: string;
  title: string;
  desc: string;
  intro: string;
  sections: {
    heading: string;
    body: string;
  }[];
};
