export const processBody = (data) => ({
    clothPiece: {
        type: data.type,
        size: data.size,
        color: {
            r: data.color.r,
            g: data.color.g,
            b: data.color.b,
            a: data.color.a,
        },
        picture: data.picture,
    }
});