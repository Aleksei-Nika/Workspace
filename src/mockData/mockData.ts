export interface Resource {
    id: string;
    name: string;
    type: 'desk' | 'room';
    floor: number;
    features: string[];
}

export const mockResources: Resource[] = [
    {
        id: '1',
        name: 'Desk A-1',
        type: 'desk',
        floor: 2,
        features: ['Type-c монитор']
    },
    {
        id: '2',
        name: 'room Alpha',
        type: 'room',
        floor: 2,
        features: ['проектор', 'интерактивная доска']
    }
];