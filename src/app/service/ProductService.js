const ProductResources = require('../resource/ProductResources');

module.exports = {
  async create(product, productFiles) {
    const productRegister = await ProductResources.create(product,
      productFiles);
    return productRegister;
  },

  async index() {
    const productIndex = await ProductResources.index();
    return productIndex;
  },

  async showDetailsProducts(idproduct) {
    // eslint-disable-next-line max-len
    const productdetails = await ProductResources.showDetailsProducts(idproduct);
    return productdetails;
  },

  async show(product) {
    const productShow = await ProductResources.show(product);
    return productShow;
  },

  async showSubcategories(data) {
    const productSubcategories = await
    ProductResources.showSubcategories(data);
    return productSubcategories;
  },

  async update(data) {
    const productUpdate = await ProductResources.update(data.product, data.id);
    return productUpdate;
  },

  async delete(product) {
    const productDelete = await ProductResources.delete(product);
    return productDelete;
  },

  async busca(product) {
    const busca = await ProductResources.busca(product);
    return busca;
  },

};
