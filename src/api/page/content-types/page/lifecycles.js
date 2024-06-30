const slugify = require("slugify");

module.exports = {
  beforeCreate(event) {
    const { data } = event.params;

    if (data.slug) {
      data.slug = slugify(data.slug, { lower: true, strict: true });
    }
  },
  beforeUpdate(event) {
    const { data } = event.params;

    if (data.slug) {
      data.slug = slugify(data.slug, { lower: true, strict: true });
    }
  },
};
