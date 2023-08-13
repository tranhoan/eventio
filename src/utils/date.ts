export const getDateFormat = (date: Date) => {
    const month = date.toLocaleDateString('default', { month: 'long' });
    const day = date.toLocaleDateString('default', { day: 'numeric' });
    const year = date.getFullYear();
    const time = date.toLocaleTimeString('default', {
        hour: 'numeric',
        minute: '2-digit',
    });

    return `${month} ${day}, ${year} - ${time}`;
};
