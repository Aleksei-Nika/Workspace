import { useRef, useState, useEffect } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

interface FilterState {
    search: string;
    date: string;
    type: 'all' | 'desc' | 'room';
    floor: 'all' | number;
    hasFlipchart: boolean;
    hasTypeC: boolean;
}

interface BookingFiltersProps {
    filters: FilterState;
    setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

export const BookingFilters: React.FC<BookingFiltersProps> = ({filters, setFilters}){
    const searchInput = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isFloorOpen, setIsFloorOpen] = useState(false);

    useEffect(() => {
        if (searchInput.current){
            searchInput.current.focus();
        }
    }, []);
    useClickOutside(dropdownRef, () => setIsFlooorOpen(false));

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilters(prev => ({...prev, search: e.target.value}))
    };

    const handleCheckboxChange = (field: 'hasFlipchart' | 'hasTypeC') => {
        setFilters(prev => ({...prev, [field]: !prev[field]}));
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilters(prev => ({...prev, date: e.target.value}))
    };

    return (
        <div>
            <div>
                <label>Поиск ресурс</label>
                <input
                    ref={searchInput}
                    type='text'
                    value={filters.search}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Дата бронирования</label>
                <input
                    type='date'
                    value={filters.date}
                    onChange={handleDateChange}
                />
            </div>
            <div>
                <label>Тип ресурса</label>
                <div>
                    {(['all', 'desk', 'room'] as const).map((t)=>(
                        <button
                            key={t}
                            onClick={()=>setFilters(prev=> ({...prev, type: t}))}
                        >
                            {t === 'all' ? 'Все' : t === 'desk'}
                        </button>
                    ))}
                </div>
            </div>
            <div ref={dropdownRef}>
                <label>Этаж</label>
                <button
                    onClick={()=>setIsFloorOpen(!isFloorOpen)}
                >
                    <span>{filters.floor === 'all' ? 'Все этажи' : `${filters}`}</span>
                </button>
                {isFloorOpen} && ( 
                    <div>
                        {['all', 1, 2, 3].map((floor)=>(
                            <button
                                key={floor}
                                onClick={() => {
                                    setFilters(prev=>({...prev, floor: floor as 'all' | 1 | 2 | 3}));
                                    setIsFloorOpen(false);
                                }}
                            >
                                {filters.floor === 'all' ? 'Все этажи' : {filters.floor}}
                            </button>
                        ))}
                    </div>
                )
            </div>
            <div>
                <div>
                    <label>
                        <input 
                        type='checkbox'
                        checked={filters.hasTypeC}
                        onChange={()=>handleCheckboxChange('hasTypeC')}
                        />
                    Type-C монитор
                    </label>
                </div>
            </div>
        </div>
    )
}