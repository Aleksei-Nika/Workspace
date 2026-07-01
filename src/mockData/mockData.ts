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

    ...Array.from({length: 45}).map((_, index)=>({
        id: `generated-${index}`,
        name: index % 2 === 0 ? `Hot Desk B-${index}` : `Gamma-${index}`,
        type: index % 2 === 0 ? ('desc' as const) : ('room' as const),
        floor: (index % 3) + 1,
        features: index % 3 === 0 ? ['Type-c монитор', 'Флипчарт'] : ['Флипчарт']
    }))
];