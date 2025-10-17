import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<string | T>(() => {
    try {
      const data = localStorage.getItem(key);
      return data ?? initialValue;
    } catch (error) {
      console.error(`Cannot find value for '${key}' key`, error);
      return initialValue;
    }
  });

  const setData = (newValue: T) => {
    localStorage.setItem(
      key,
      typeof newValue !== 'string' ? JSON.stringify(newValue) : newValue
    );
    setValue(newValue);
  };

  return [value, setData] as const;
}
