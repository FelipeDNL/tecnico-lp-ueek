import { useCallback } from 'react';

export function usePegarNome() {
    return useCallback((fullName: string): string => {
        const trimmed = fullName.trim();
        const firstSpaceIdx = trimmed.indexOf(' ');
        let firstWord = trimmed;

        if (firstSpaceIdx !== -1) {
            firstWord = trimmed.substring(0, firstSpaceIdx);
        }

        return firstWord;
    }, []);
}
