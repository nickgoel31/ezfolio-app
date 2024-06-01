export const formatDate = (expStartDate:Date, expEndDate:Date| null) => {
    const startDate = new Date(expStartDate);
    const endDate = expEndDate ? new Date(expEndDate) : new Date(); // Assuming today's date if end date is not provided
                    
    const durationInMilliseconds = endDate.getTime() - startDate.getTime();
    const durationInDays = Math.round(durationInMilliseconds / (1000 * 60 * 60 * 24));
                    
    let durationOutput;
    if(durationInDays > 365){
        const durationInYears = Math.round(durationInDays / 365);
        durationOutput = `${durationInYears} year${durationInYears > 1 ? 's' : ''}`;
    }
    else if (durationInDays > 30) {
        const durationInMonths = Math.round(durationInDays / 30);
        durationOutput = `${durationInMonths} month${durationInMonths > 1 ? 's' : ''}`;
    } else {
        durationOutput = `${durationInDays} day${durationInDays > 1 ? 's' : ''}`;
    }

    return durationOutput;
}

export function formatCreatedAtDate(createdAt:Date) {
    const currentDate = new Date();
    const createdDate = new Date(createdAt);

    const timeDifference = currentDate.getTime() - createdDate.getTime();
    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);
    const weeksDifference = Math.floor(daysDifference / 7);
    const monthsDifference = Math.floor(daysDifference / 30);
    const yearsDifference = Math.floor(daysDifference / 365);

    if (daysDifference < 7) {
        return `${daysDifference} day${daysDifference !== 1 ? 's' : ''} ago`;
    } else if (daysDifference < 30) {
        return `${weeksDifference} week${weeksDifference !== 1 ? 's' : ''} ago`;
    } else if (daysDifference < 365) {
        return `${monthsDifference} month${monthsDifference !== 1 ? 's' : ''} ago`;
    } else {
        return `${yearsDifference} year${yearsDifference !== 1 ? 's' : ''} ago`;
    }
}

const createdAtDate = answer.createdAt.toString();
const formattedDate = formatCreatedAtDate(createdAtDate);
console.log(formattedDate);
