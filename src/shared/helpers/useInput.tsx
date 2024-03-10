import { useState, ChangeEvent } from 'react';

interface UseInputProps {
  initialValue: string;
}

interface UseInputReturn {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  reset: () => void;
  bind: {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  };
}

export const useInput = ({ initialValue }: UseInputProps): UseInputReturn => {
  const [value, setValue] = useState<string>(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
      },
    },
  };
};
