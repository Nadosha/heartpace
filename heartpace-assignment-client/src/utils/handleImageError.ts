export const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = event.target as HTMLImageElement
    target.onerror = null
    target.src = '/logo192.png'
}
