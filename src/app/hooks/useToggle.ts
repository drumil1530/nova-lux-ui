import { useState } from 'react';

const useToggle = <T>(initialValue: T, toggleValue: T) => {
  const [value, setValue] = useState<T>(initialValue);

  const toggle = () => {
    setValue((prev) => (prev === initialValue ? toggleValue : initialValue));
  };

  return [value, toggle] as const;
};

export default useToggle;
