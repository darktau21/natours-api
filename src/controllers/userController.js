module.exports.getAll = async (req, res) => {
  res.send('Get all')
}

module.exports.add = async (req, res) => {
  res.send('Add')
}

module.exports.getById = async (req, res) => {
  res.send('Get by id')
}

module.exports.patchById = async (req, res) => {
  res.send('Patch by id')
}

module.exports.deleteById = async (req, res) => {
  res.send('Delete by id')
}
