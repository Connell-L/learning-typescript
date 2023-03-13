export interface FormValues {
    id: number;
    name?: string;
    role?: string;
    skills: string[];
    startDate?: string;
    preference?: string;
}

const today = new Date();

export const contactData: Array<FormValues> = [
    {
        id: 1,
        name: 'John Doe',
        role: 'Software Engineer',
        skills: ['React', 'Angular', 'Material UI'],
        startDate: `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`,
        preference: 'Office'
    },
    {
        id: 2,
        name: 'Jane Doe',
        role: 'Product Manager',
        skills: ['React', 'SASS', 'Material UI'],
        startDate: `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`,
        preference: 'Remote'
    },
    {
        id: 3,
        name: 'John Smith',
        role: 'Software Engineer',
        skills: ['React', 'TypeScript', 'Tailwind CSS'],
        startDate: `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`,
        preference: 'Hyrbrid'
    },
    {
        id: 4,
        name: 'Jane Smith',
        role: 'Software Engineer',
        skills: ['React', 'Java', 'Python'],
        startDate: `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`,
        preference: 'Remote'
    }
];
