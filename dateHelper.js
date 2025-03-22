export function getDateInFuture(days){
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + days);
    return futureDate.toISOString().split("T")[0];
}