function filterMedias(media, options) {
    switch (options) {
        case 'ASC':
            media.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'POPULARE':
            media.sort((a, b) => b.likes - a.likes);
            break;
        case 'RECENT':
            media.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        default:
            undefined;
    }
}

export { filterMedias }