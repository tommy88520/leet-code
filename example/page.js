const paginatedResults = (data, page, limit) => {
  const start = page < 1 ? 1 : page;
  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  const result = data.slice(startIndex, endIndex)
  return result
}

const result= paginatedResults([1,2,3,4,5,6,7,7,8,9,99], 2, 5)
// console.log(result)

const ApaginatedResults = (current, totalpage, limit) => {

  const result = []

  let startindex = current < 1 ? 1 : current;

  if(totalpage - startindex < limit) startindex = totalpage + 1 - limit

  const endPage = startindex + limit

  for(let i = startindex; i < endPage; i++) {
    result.push(i)
  }

  return result;
}

const result2 = ApaginatedResults(2, 10, 3)

console.log(result2)

