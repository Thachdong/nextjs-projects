import { CSSProperties, useMemo } from "react"

export const useBackgroundImage = (url: string): CSSProperties => {
    return useMemo(() => ({
        backgroundImage: `url(${url})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }), [url])
}