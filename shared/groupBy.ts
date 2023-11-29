export default function groupBy(array, criteria) {

    const sortedArray = array.reduce(function (accumulator, currentValue) {

      if ( !accumulator[currentValue[criteria]] ) { accumulator[currentValue[criteria]] = [] }

      accumulator[currentValue[criteria]].push(currentValue)

      return accumulator

    }, [])

    return sortedArray

}