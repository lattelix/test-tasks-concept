import { ReactNode } from 'react';

interface AreaItemProps {
  children: ReactNode;
  id: string;
}

export default function AreaItem({ children, id }: AreaItemProps) {
  return (
    <div className="flex mb-3 justify-between max-w-[400px]">
      <label htmlFor={id} className="mr-3">
        {children}
      </label>
      <input type="text" id={id} className="border-2 border-gray-80" />
    </div>
  );
}
