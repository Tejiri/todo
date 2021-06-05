function fromJson(data) {
  //data = JSON.parse(map);

  this.id = data.id;
  this.name = data.name;
  this.password = data.type;
}

module.exports = {
  convertFromJson: fromJson,
};
