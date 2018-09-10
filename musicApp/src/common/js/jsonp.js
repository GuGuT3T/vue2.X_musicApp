import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data))
  })
}
