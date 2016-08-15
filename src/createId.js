export default function (uniqueNumber, description) {
   const shortDescription = description
    .toLowerCase()
    .split(' ')
    .slice(0, 2)
    .join('-');

    return `${uniqueNumber}-${shortDescription}`;
}
