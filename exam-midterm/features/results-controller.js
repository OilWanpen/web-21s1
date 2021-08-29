const { db } = require('../_services/firebase-admin-initialized')

const resultCreateForm = async (req, res) => {
  res.render('result-create-form')
}

const resultList = async (req, res) => {
  const rank = req.params.rank

  const query = db.collection('results')
    .orderBy('rank')
    .get()

  const results = (await query).data()
  res.render('result-list', { results, rank })
}

const resultDetails = async (req, res) => {
  const distance = req.params.distance

  const query = db.collection('results')
    .doc(slug)
    .collection('attempts')
    .orderBy('distance')
    .get()

  const attempts = (await query).docs.map(doc => doc.data())
  res.render(`/results/${slug}`)
}

const resultworldRecord = async (req, res) => {
  const worldRecord = req.params.wr

  const query = db.collection('world-records')
    .doc(slug)
    .get()

  const worldrecord = (await query).docs.map(doc => doc.data())
  res.render(`/world-records/${slug}`)
}

const resultCreate = async (req, res) => {
  const slug = req.body.isbn13
  const name = req.body.name
  const rank = req.body.rank
  const jumporder = req.body.jumporder
  const distance = req.body.distance
  const record = req.body.record

  const data = { slug, name, rank, jumporder, distance, record }

  const query = db.collection('results')
    .doc(slug)
    .set(data)

  await query
  res.redirect(`/results/${slug}`)
}

module.exports = {
  resultCreateForm,
  resultList,
  resultDetails,
  resultworldRecord,
  resultCreate
}
