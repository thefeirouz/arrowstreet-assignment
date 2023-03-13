export const formatSsn = (ssn: string) => {
    let formattedSsn = ssn;
    if (ssn.length > 5) {
       formattedSsn = ssn.slice(0, 3) + "-" + ssn.slice(3, 5) + "-" + ssn.slice(5);
    } else if (ssn.length > 3) {
       formattedSsn = ssn.slice(0, 3) + "-" + ssn.slice(3)
    }
    return formattedSsn;
}