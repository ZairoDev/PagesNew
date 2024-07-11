// src/data.ts

type StaticImageData = {
    src: string;
    height: number;
    width: number;
    placeholder?: string;
  };
  
  export interface People {
    id: string;
    name: string;
    job: string;
    avatar: string | StaticImageData;
  }
  
  export const FOUNDER_DEMO: People[] = [
    {
      id: '1',
      name: 'Founder Name 1',
      job: 'Founder Job 1',
      avatar: '/icons/How we work 1.png', // Relative path from public folder
    },
    {
      id: '2',
      name: 'Founder Name 2',
      job: 'Founder Job 2',
      avatar: '/icons/How we work 2.png', // Relative path from public folder
    },
    {
      id: '3',
      name: 'Founder Name 3',
      job: 'Founder Job 3',
      avatar: '/icons/How we work 6.png', // Relative path from public folder
    },
    {
      id: '4',
      name: 'Founder Name 4',
      job: 'Founder Job 4',
      avatar: '/icons/How we work 8.png', // Relative path from public folder
    },
    {
      id: '5',
      name: 'Founder Name 5',
      job: 'Founder Job 3',
      avatar: '/icons/How we work 9.png', // Relative path from public folder
    },
    {
      id: '6',
      name: 'Founder Name 3',
      job: 'Founder Job 3',
      avatar: '/icons/How we work 10.png', // Relative path from public folder
    },

    // Add more entries as needed
  ];
  