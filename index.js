//author udinesia325@gmail.com
//hubungi email jika ingin berkontribusi denganku
export function  Comma( {
  value
}) {
  return value
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
export function FormatNum({value,type}){
  let rules ;
  if(type === "id"){
    rules = ["","rb","jt","M","T"]
  }else{
   rules = ["","k","m","b","t"]
  }
  const changeValue = Math.floor((""+value).length/3)
  let result = parseFloat(
    (changeValue !== 0 ? (value /Math.pow(1000,changeValue)):value).toPrecision(2))
  if(result %1 !== 0){
    result = result.toFixed(1)
  }
  return result+rules[changeValue]
}

export function Rank({value}){
  let j = value %10;
  let k = value%100;
  if(j===1&&k !== 11){
    return `${value}st`
  }
  if(j===2&&k !== 12){
    return `${value}nd`
  }
  if(j===3&&k !== 13){
    return `${value}rd`
  }
  return `${value}th`
}

export function  Shuffle({min,max}){
  min = Math.ceil(min)
  max = Math.ceil(max)
  return Math.floor(
   Math.random()*(max-min+1)) +min
    
}
