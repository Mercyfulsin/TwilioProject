// NextJS automatically looks for api routes with /api/ following the url + file name.
// You can reach this API request by http://localhost:3000/api/hello if you are running locally

export default (req, res) => {
  res.status(200).json({ text: 'Hello' })
}
