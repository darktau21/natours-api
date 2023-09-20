class ApiFeatures {
  constructor(query, requestQuery) {
    this.query = query;
    this.requestQuery = requestQuery;
  }

  filter() {
    const queryParamsJSON = JSON.stringify(this.requestQuery).replace(/[g,l]te?/g, '$$$&');
    const queryParams = JSON.parse(queryParamsJSON);
    this.query.find(queryParams);

    return this;
  }

  sort() {
    if (this.requestQuery.sort) {
      const sortQueryParam = this.requestQuery.sort.replaceAll(',', ' ');
      this.query.sort(sortQueryParam);
    } else {
      this.query.sort('-createdAt');
    }
    return this;
  }

  select() {
    if (this.requestQuery.select) {
      const selectQueryParam = this.requestQuery.select.replaceAll(',', ' ');
      this.query.select(selectQueryParam);
    }

    this.query.select('-__v');
    return this;
  }

  paginate() {
    const page = +this.requestQuery.page || 1;
    const limit = +this.requestQuery.limit || 100;
    const skip = (page - 1) * limit;

    this.query.skip(skip).limit(limit);

    return this;
  }
}

module.exports = ApiFeatures;
