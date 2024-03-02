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