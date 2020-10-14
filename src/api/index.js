import { orderBy } from "lodash";
const contentful = require("contentful");

const client = contentful.createClient({
  space: "",
  accessToken: "",
});

const parseIngredient = ({ fields }) => fields;

const parseIngredientsEntries = (ingredients, cb = parseIngredient) =>
  ingredients.map(cb);

const parseMeal = ({ fields: { mealName, ingredients } }) => ({
  mealName,
  ingredients: parseIngredientsEntries(ingredients),
});

const parseMealsEntries = (meals, cb = parseMeal) => meals?.map(cb);

const parsePlan = ({
  fields: { order, planDisplayName, calories, meals },
}) => ({
  order,
  planDisplayName,
  calories,
  meals: parseMealsEntries(meals),
});

const parsePlansEntries = (plans, cb = parsePlan) =>
  orderBy(plans.map(cb), "order", "asc");

const parseClient = ({ fields: { fullName: name, plans } }) => ({
  name,
  plans: parsePlansEntries(plans),
});

function parseClientEntries(entries, cb = parseClient) {
  return entries?.items?.map(cb)[0];
}
export const getClient = (token) =>
  client
    .getEntries({
      content_type: "client",
      "fields.accessKey[in]": token,
      include: "4",
    })
    .then((response) => parseClientEntries(response));

export default { getClient };
