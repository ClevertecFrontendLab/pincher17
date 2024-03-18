export default function convertDateFormat(dateString: string): string {
    const datePart = dateString.split('T')[0];
    
    return datePart;
}