const createQuery = (width: number, axis = 'width') => {
    return `only screen and (max-${axis}: ${width}px)`;
};

export const mediaQueries = {
    mobile: createQuery(480),
    tablet: createQuery(800),
    create: createQuery,
};
