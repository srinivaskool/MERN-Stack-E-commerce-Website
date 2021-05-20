import axios from "axios";

export const getCategories = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/categories`);
};

export const getCategory = async (slug) => {
  return await axios.get(`${process.env.REACT_APP_API}/category/${slug}`);
};

export const removeCategory = async (slug, authtoken) => {
  return await axios.delete(`${process.env.REACT_APP_API}/category/${slug}`, {
    headers: {
      authtoken: authtoken,
    },
  });
};

// slug fro uypdation and category is value that need to be updated to
export const updateCategory = async (slug, category, authtoken) => {
  return await axios.put(
    `${process.env.REACT_APP_API}/category/${slug}`,
    category,
    {
      headers: {
        authtoken: authtoken,
      },
    }
  );
};

// after url category is to name the new category sop need to be passed
export const createCategory = async (category, authtoken) => {
  return await axios.post(`${process.env.REACT_APP_API}/category`, category, {
    headers: {
      authtoken: authtoken,
    },
  });
};

export const getCategorySubs = async (_id) => {
  return await axios.get(`${process.env.REACT_APP_API}/category/subs/${_id}`);
};
