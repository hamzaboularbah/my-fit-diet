import { differenceInDays } from "date-fns";

export const getPlanByDate = (plans = [], planDate = new Date(), startDate) => {
  const [year, month, day] = startDate.split("-");

  const formattedStartDate = new Date(
    parseInt(year, 10),
    parseInt(month, 10) - 1,
    parseInt(day, 10)
  );
  const dateDiff = differenceInDays(planDate, formattedStartDate);

  return dateDiff < plans.length
    ? plans[dateDiff]
    : plans[dateDiff % plans.length];
};
