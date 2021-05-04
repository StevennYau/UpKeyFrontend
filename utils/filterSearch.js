const filterSearch = ({router, page, category, search}) => {
   const path = router.pathname;
   const query = router.query;

   if (category) query.category = category;
   if (page) query.page = page;
   if (search) query.search = search;

   router.push({
      pathname: path,
      query: query
   })
}

export default filterSearch